import { Request } from 'express';

export interface UserAgent {
  source: string;
  browser: string;
  version: string;
  os: string;
  platform: string;
}

export interface AuthenticatedRequest extends Request {
  userId: string;
}

export interface RequestWithRefreshToken extends Request {
  refreshToken: string;
  refreshTokenOwner: string;
}

export type LogoutRequest = AuthenticatedRequest & RequestWithRefreshToken;
