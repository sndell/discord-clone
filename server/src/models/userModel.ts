import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcrypt';

interface User extends Document {
  email: string;
  password: string;
  isVerified: boolean;
  verificationToken?: string;
  comparePassword: (password: string) => Promise<boolean>;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<User>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isVerified: { type: Boolean, required: true, default: false },
    verificationToken: { type: String },
  },
  { timestamps: true }
);

userSchema.pre<User>('save', async function (next) {
  if (!this.isModified('password')) next();

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
  next();
});

userSchema.methods.comparePassword = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

const User = model<User>('User', userSchema);

export default User;
