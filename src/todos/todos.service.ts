import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, UpdateQuery } from 'mongoose';
import { CreateTodoDto } from './dtos/create.todo.dto';
import { Todo } from './interfaces/todo.interface';

@Injectable()
export class TodosService {
  constructor(@InjectModel('Todo') private readonly todoModel: Model<Todo>) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const createdTodo = new this.todoModel(createTodoDto);
    console.debug('create todo: ', createdTodo);
    return createdTodo.save();
  }

  async findAll(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }

  async findOne(todoId: string): Promise<Todo> {
    const task = await this.todoModel.findById(todoId).exec().toJSON();
    if (!task) {
      throw new NotFoundException('todo not found');
    }
    return task;
  }

  async update(id: string, updateTodo: UpdateQuery<Todo>) {
    const updatedTodo = await this.todoModel.findByIdAndUpdate(id, updateTodo, { returnDocument: "after"});
    console.debug('update todo: ', updatedTodo);
    return updatedTodo;
  }

  async remove(id: string): Promise<any> {
    const deletedTask = await this.todoModel.findByIdAndRemove(id);
    return deletedTask;
  }
}
