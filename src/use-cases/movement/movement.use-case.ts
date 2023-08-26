import { Injectable } from '@nestjs/common';
import {
  CreateMovementDto,
  IDataServices,
  Movement,
  UpdateMovementDto,
} from 'src/core';
import { MovementFactoryService } from './movement.factory.service';

@Injectable()
export class MovementUseCases {
  constructor(
    private dataServices: IDataServices,
    private movementFactoryService: MovementFactoryService,
  ) {}

  getAllMovements(): Promise<Movement[]> {
    return this.dataServices.movements.getAll();
  }

  getMovementrById(id: any): Promise<Movement> {
    return this.dataServices.movements.get(id);
  }

  createMovement(createMovementDto: CreateMovementDto): Promise<Movement> {
    const movement =
      this.movementFactoryService.createNewMovement(createMovementDto);
    return this.dataServices.movements.create(movement);
  }

  updateMovement(
    movementId: string,
    updateMovementDto: UpdateMovementDto,
  ): Promise<Movement> {
    const movement =
      this.movementFactoryService.updateMovement(updateMovementDto);
    return this.dataServices.movements.update(movementId, movement);
  }
}
