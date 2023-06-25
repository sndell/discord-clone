import { Response, NextFunction } from 'express';
import { AuthenticatedRequest, RequestWithRefreshToken } from 'types';
import { JwtPayload, TokenExpiredError, verify } from 'jsonwebtoken';
import RefreshToken from '../models/refreshTokenModel';
import User from '../models/userModel';

const isAuthenticated = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { token } = req.cookies;

    if (!token)
      return res.status(401).json({ message: 'Unauthorized: missing token' });

    const decodedToken = verify(
      token,
      process.env.JWT_SECRET_KEY
    ) as JwtPayload;

    const exists = User.exists({ _id: decodedToken.value });
    if (!exists)
      res.status(401).json({ message: 'Unauthorized: invalid token' });

    req.userId = decodedToken.value;
    next();
  } catch (error) {
    console.error(error);

    if (error instanceof TokenExpiredError)
      return res.status(401).json({ message: 'Unauthorized: token expired' });

    return res.status(401).json({ message: 'Unauthorized: invalid token' });
  }
};

const isValidRefreshToken = async (
  req: RequestWithRefreshToken,
  res: Response,
  next: NextFunction
) => {
  try {
    const { refreshToken } = req.cookies;
    if (!refreshToken)
      return res.status(401).json({ message: 'Unauthorized: token not found' });

    const existingRefreshToken = await RefreshToken.findOne({
      token: refreshToken,
    });
    if (!existingRefreshToken)
      return res.status(401).json({ message: 'Unauthorized: invalid token' });

    if (existingRefreshToken.expirationDate < new Date()) {
      await existingRefreshToken.deleteOne();
      return res.status(401).json({ message: 'Unauthorized: token expired' });
    }

    req.refreshToken = refreshToken;
    req.refreshTokenOwner = existingRefreshToken.userId.toString();
    next();
  } catch (error) {
    console.error(error);

    return res.status(401).json({ message: 'Unauthorized: invalid token' });
  }
};

export default { isAuthenticated, isValidRefreshToken };
