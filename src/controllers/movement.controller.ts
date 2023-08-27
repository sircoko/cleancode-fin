import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateMovementDto, UpdateMovementDto } from 'src/core';
import { MovementUseCases } from 'src/use-cases/movement/movement.use-case';

@Controller('api/movements')
export class MovementController {
  constructor(private movementUseCases: MovementUseCases) {}

  @Get()
  async getAll() {
    console.log('[MovementController:Get]');
    return this.movementUseCases.getAllMovements();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    console.log('[MovementController:Get/:id]', id);
    return this.movementUseCases.getMovementrById(id);
  }

  @Post()
  async createMovement(@Body() movementDto: CreateMovementDto) {
    console.log('[MovementController:Post]', movementDto);
    return this.movementUseCases.createMovement(movementDto);
  }

  @Put(':id')
  async updateMovement(
    @Param('id') movementId: string,
    @Body() updateMovementDto: UpdateMovementDto,
  ) {
    console.log('[MovementController:Put]', movementId, updateMovementDto);
    return this.movementUseCases.updateMovement(movementId, updateMovementDto);
  }
}
