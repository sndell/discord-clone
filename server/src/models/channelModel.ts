import { Schema, model, Document, Types, ObjectId } from 'mongoose';

interface Channel extends Document {
  guild: ObjectId;
  voice: boolean;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

const channelSchema = new Schema<Channel>(
  {
    guild: { type: Types.ObjectId, ref: 'Guild', required: true },
    voice: { type: Boolean, required: true },
    name: { type: String, required: true },
  },
  { timestamps: true }
);

const Channel = model<Channel>('Channel', channelSchema);

export default Channel;
