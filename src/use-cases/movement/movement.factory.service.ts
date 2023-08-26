import { Injectable } from '@nestjs/common';
import {
  CreateMovementDto,
  UpdateMovementDto,
} from '../../core/dtos/movement.dto';
import { Movement } from 'src/core';

@Injectable()
export class MovementFactoryService {
  createNewMovement(createMovementDto: CreateMovementDto) {
    const newMovement = new Movement();
    newMovement.amount = createMovementDto.amount;
    newMovement.concept = createMovementDto.concept;
    newMovement.date = createMovementDto.date;
    return newMovement;
  }
  updateMovement(updateMovementDto: UpdateMovementDto) {
    const newMovement = new Movement();
    newMovement.amount = updateMovementDto.amount;
    newMovement.concept = updateMovementDto.concept;
    newMovement.date = updateMovementDto.date;
    return newMovement;
  }
}
