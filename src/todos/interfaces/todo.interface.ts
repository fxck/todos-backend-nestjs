import { Document } from 'mongoose';

export interface Todo extends Document {
  readonly text: string;
  readonly index: number;
  readonly completed: boolean;
}
