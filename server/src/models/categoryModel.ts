import { Schema, model, Document, Types, ObjectId } from 'mongoose';

interface Category extends Document {
  guild: ObjectId;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

const categorySchema = new Schema<Category>(
  {
    guild: { type: Types.ObjectId, ref: 'Guild', required: true },
    name: { type: String, required: true },
  },
  { timestamps: true }
);

const Category = model<Category>('Category', categorySchema);

export default Category;
