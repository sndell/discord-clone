import { sign } from 'jsonwebtoken';

const generateToken = (value: string) => {
  return sign({ value }, process.env.JWT_SECRET_KEY, { expiresIn: '20m' });
};

export default generateToken;
