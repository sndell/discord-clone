import { Schema, model, Document, Types, ObjectId } from 'mongoose';

interface Profile extends Document {
  user: ObjectId;
  username: string;
  displayName: string;
  photoUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

const profileSchema = new Schema<Profile>(
  {
    user: {
      type: Types.ObjectId,
      ref: 'User',
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      minLength: 3,
      maxLength: 32,
      match: /^[a-zA-Z0-9_.-]+$/,
    },
    displayName: { type: String, required: true, maxlength: 32 },
    photoUrl: { type: String, required: true },
  },
  { timestamps: true }
);

const Profile = model<Profile>('Profile', profileSchema);

export default Profile;
