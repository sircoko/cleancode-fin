import { PartialType } from '@nestjs/mapped-types';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMovementDto {
  @IsString()
  @IsNotEmpty()
  concept: string;

  @IsDate()
  @IsNotEmpty()
  date: Date;

  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsNumber()
  @IsNotEmpty()
  user: any;

  @IsNumber()
  @IsNotEmpty()
  category: any;
}

export class UpdateMovementDto extends PartialType(CreateMovementDto) {}
