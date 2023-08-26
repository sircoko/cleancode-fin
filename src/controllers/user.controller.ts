import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/core';
import { UserUseCases } from 'src/use-cases/user/user.use-case';

@Controller('api/users')
export class UserController {
  constructor(private userUseCases: UserUseCases) {}

  @Get()
  async getAll() {
    console.log('[UserController:Get]');
    return this.userUseCases.getAllUsers();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    console.log('[UserController:Get/:id]', id);
    return this.userUseCases.getUserById(id);
  }

  @Post()
  async createUser(@Body() userDto: CreateUserDto) {
    console.log('[UserController:Post]', userDto);
    return this.userUseCases.createUser(userDto);
  }

  @Put(':id')
  async updateUser(
    @Param('id') userId: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    console.log('[UserController:Put]', userId, updateUserDto);
    return this.userUseCases.updateUser(userId, updateUserDto);
  }
}
