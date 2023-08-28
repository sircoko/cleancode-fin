import { Injectable } from '@nestjs/common';
import { IDataServices } from 'src/core/abstracts';
import { User } from 'src/core/entities';
import { CreateUserDto, UpdateUserDto } from 'src/core/dtos';
import { UserFactoryService } from './user.factory.service';

@Injectable()
export class UserUseCases {
  constructor(
    private dataServices: IDataServices,
    private userFactoryService: UserFactoryService,
  ) {}

  getAllUsers(): Promise<User[]> {
    const relations = ['movements'];
    return this.dataServices.users.getAll(relations);
  }

  getUserById(id: any): Promise<User> {
    return this.dataServices.users.get(id);
  }

  createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userFactoryService.createNewUser(createUserDto);
    return this.dataServices.users.create(user);
  }

  updateUser(userId: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = this.userFactoryService.updateUser(updateUserDto);
    return this.dataServices.users.update(userId, user);
  }
}
