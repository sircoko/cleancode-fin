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
  async createUser(@Body() userDto: CreateMovementDto) {
    console.log('[MovementController:Post]', userDto);
    return this.movementUseCases.createMovement(userDto);
  }

  @Put(':id')
  async updateUser(
    @Param('id') userId: string,
    @Body() updateUserDto: UpdateMovementDto,
  ) {
    console.log('[MovementController:Put]', userId, updateUserDto);
    return this.movementUseCases.updateMovement(userId, updateUserDto);
  }
}
