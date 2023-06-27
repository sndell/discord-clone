import { Schema, model, Document, Types, ObjectId } from 'mongoose';

interface Guild extends Document {
  creator: ObjectId;
  members: Array<ObjectId>;
  channels: Array<ObjectId>;
  createdAt: Date;
  updatedAt: Date;
}

const guildSchema = new Schema<Guild>(
  {
    creator: {
      type: Types.ObjectId,
      ref: 'User',
      required: true,
    },
    members: [
      {
        type: Types.ObjectId,
        ref: 'Profile',
        required: true,
      },
    ],
    channels: [
      {
        type: Types.ObjectId,
        ref: 'Channel',
        required: true,
      },
    ],
  },
  { timestamps: true }
);

const Guild = model<Guild>('Guild', guildSchema);

export default Guild;
