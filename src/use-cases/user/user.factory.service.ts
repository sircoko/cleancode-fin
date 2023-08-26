import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '../../core/dtos';
import { User } from 'src/core';

@Injectable()
export class UserFactoryService {
  createNewUser(createUserDto: CreateUserDto) {
    const newUser = new User();
    newUser.email = createUserDto.email;
    newUser.firstname = createUserDto.firstname;
    newUser.lastname = createUserDto.lastname;
    newUser.password = createUserDto.password;
    newUser.username = createUserDto.username;
    return newUser;
  }
  updateUser(createUserDto: UpdateUserDto) {
    const newUser = new User();
    newUser.email = createUserDto.email;
    newUser.firstname = createUserDto.firstname;
    newUser.lastname = createUserDto.lastname;
    return newUser;
  }
}
