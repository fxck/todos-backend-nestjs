import * as mongoose from 'mongoose';

export const TodoSchema = new mongoose.Schema(
  {
    text: String,
    index: Number,
    completed: Boolean,
  }
);

TodoSchema.virtual('id').get(function() { return this._id.toHexString(); });
TodoSchema.set('toObject', { virtuals: true });
TodoSchema.set('toJSON', { virtuals: true });
