import * as mongoose from 'mongoose';

export const TodoSchema = new mongoose.Schema({
  text: String,
  index: Number,
  completed: Boolean,
});

TodoSchema.virtual('id').get(() => this._id.toHexString());
