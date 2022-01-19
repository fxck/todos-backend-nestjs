import * as mongoose from 'mongoose';

export const TodoSchema = new mongoose.Schema(
  {
    text: String,
    index: Number,
    completed: Boolean,
  },
  toJSON: { virtuals: true },
  toObject: { virtuals: true }  
);

TodoSchema.virtual('id').get(function() { return this._id.toHexString(); });
