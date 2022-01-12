import { IsInt, IsString, IsBoolean } from 'class-validator';

export class UpdateTodoDto {
  @IsString()
  readonly id: string;

  @IsString()
  readonly text: string;

  @IsInt()
  readonly index: number;

  @IsBoolean()
  readonly completed: boolean;
}
