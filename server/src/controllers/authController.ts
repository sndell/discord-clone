import { Request, Response } from 'express';
import User from '../models/userModel';
import generateToken from '../util/jwt';
import crypto from 'crypto';
import RefreshToken from '../models/refreshTokenModel';
import { pick } from 'lodash';
import { LogoutRequest, RequestWithRefreshToken, UserAgent } from 'types';

// User login
const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'Incorrect email.' });

    // Compare the entered password with the stored password
    const match = await user.comparePassword(password);
    if (!match) return res.status(401).json({ message: 'Incorrect password.' });

    // Generate an access token
    const token = generateToken(user._id);

    // Generate a refresh token
    const refreshToken = crypto.randomBytes(32).toString('hex');

    // Get user agent details
    const userAgent: UserAgent = pick(req.useragent, [
      'source',
      'browser',
      'version',
      'os',
      'platform',
    ]);

    const ipAddress = req.ip;

    const expirationDate = new Date();
    expirationDate.setMonth(expirationDate.getMonth() + 6);

    // Create a new refresh token
    await RefreshToken.create({
      token: refreshToken,
      userId: user._id,
      ipAddress,
      userAgent,
      expirationDate,
    });

    // Set cookies for the access token and refresh token
    res
      .cookie('token', token, {
        httpOnly: true,
        sameSite: 'none',
      })
      .cookie('refreshToken', refreshToken, {
        httpOnly: true,
        sameSite: 'none',
        path: '/api/v1/auth',
      })
      .status(201)
      .json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

// User logout
const logout = async (req: LogoutRequest, res: Response) => {
  try {
    const { refreshToken } = req;

    if (!refreshToken)
      return res.status(404).json({ message: 'Refresh token not found.' });

    // Delete the refresh token from the database
    await RefreshToken.findOneAndDelete({ token: refreshToken });

    res.clearCookie('token');
    res.clearCookie('refreshToken', { path: '/api/v1/auth' });
    res.status(200).json({ message: 'Logout successful.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

// Refresh access token
const refreshToken = async (req: RequestWithRefreshToken, res: Response) => {
  try {
    const { refreshTokenOwner } = req;

    // Find the user by ID
    const user = await User.findById(refreshTokenOwner);
    if (!user) return res.status(404).json({ message: 'User not found.' });

    // Generate a new access token
    const newToken = generateToken(user._id);

    // Set the new access token as a cookie
    res
      .cookie('token', newToken, {
        httpOnly: true,
        sameSite: 'none',
      })
      .status(200)
      .json({ message: 'Token refreshed successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

// Verify email
const verifyEmail = async (req: Request, res: Response) => {
  try {
    const { verificationToken } = req.params;

    // Find the user by verificationToken
    const user = await User.findOne({ verificationToken });
    if (!user) return res.status(404).json({ message: 'User not found.' });

    // Set isVerified to true
    user.isVerified = true;
    user.verificationToken = undefined;
    await user.save();

    res.status(200).json({ message: 'User verified successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

export default { login, logout, refreshToken, verifyEmail };
