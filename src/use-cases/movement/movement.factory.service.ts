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
    newMovement.user = createMovementDto.user;
    newMovement.category = createMovementDto.category;
    return newMovement;
  }
  updateMovement(updateMovementDto: UpdateMovementDto) {
    const newMovement = new Movement();
    newMovement.amount = updateMovementDto.amount;
    newMovement.concept = updateMovementDto.concept;
    newMovement.date = updateMovementDto.date;
    newMovement.user = updateMovementDto.user;
    newMovement.category = updateMovementDto.category;
    return newMovement;
  }
}
