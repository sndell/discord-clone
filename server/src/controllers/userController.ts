import { Request, Response } from 'express';
import User from '../models/userModel';
import generateToken from '../util/jwt';
import crypto from 'crypto';
import Profile from '../models/profileModel';
import RefreshToken from '../models/refreshTokenModel';
import { pick } from 'lodash';
import { AuthenticatedRequest, UserAgent } from 'types';

// Register a new user
const createUser = async (req: Request, res: Response) => {
  try {
    const { email, password, username, displayName, photoUrl } = req.body;

    // Check if the username or email already exist
    const usernameExists = await User.exists({ username });
    const emailExists = await User.exists({ email });

    if (usernameExists || emailExists) {
      const message = usernameExists
        ? 'Username already in use.'
        : 'Email already in use.';
      return res.status(409).json({ message });
    }

    // Generate a verification token
    const verificationToken = await crypto.randomBytes(16).toString('hex');

    // Create a new user
    const user = await User.create({
      email,
      password,
      verificationToken,
    });

    // Create a new profile
    await Profile.create({
      user: user._id,
      username,
      displayName: displayName || username,
      photoUrl:
        photoUrl ||
        `https://ui-avatars.com/api/?name=${username}&background=random&size=128`,
    });

    res.status(201).json({ message: 'Registration successful.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

const getCurrentUser = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { userId } = req;
    const user = await Profile.findOne({ user: userId });
    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

export default { createUser, getCurrentUser };
