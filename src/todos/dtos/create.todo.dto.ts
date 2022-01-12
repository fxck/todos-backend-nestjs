import { IsBoolean, IsInt, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  readonly text: string;

  @IsInt()
  readonly index: number;

  @IsBoolean()
  readonly completed: boolean;
}
