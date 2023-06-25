import { Schema, model, Document } from 'mongoose';
import { UserAgent } from 'types';

interface RefreshToken extends Document {
  token: string;
  expirationDate: Date;
  userId: Schema.Types.ObjectId;
  ipAddress: string;
  userAgent: UserAgent;
  createdAt: Date;
  updatedAt: Date;
}

const refreshTokenSchema = new Schema<RefreshToken>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    token: { type: String, required: true },
    expirationDate: { type: Date, required: true },
    ipAddress: { type: String, required: true },
    userAgent: { type: Object, required: true },
  },
  { timestamps: true }
);

const RefreshToken = model<RefreshToken>('RefreshToken', refreshTokenSchema);

export default RefreshToken;
