import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { TypeOrmGenericRepository } from './typeORM-generic-repository';
import { InjectRepository } from '@nestjs/typeorm';
import { IDataServices, Movements } from 'src/core';
import { Repository } from 'typeorm';
import { Category, User } from './model';

@Injectable()
export class TypeOrmDataServices
  implements IDataServices, OnApplicationBootstrap
{
  categories: TypeOrmGenericRepository<Category>;
  movements: TypeOrmGenericRepository<Movements>;
  users: TypeOrmGenericRepository<User>;

  constructor(
    @InjectRepository(User)
    private UsersRepository: Repository<User>,
  ) {}

  onApplicationBootstrap() {
    console.log('DataService succesfully initiated...');
    this.users = new TypeOrmGenericRepository<User>(this.UsersRepository);
  }
}
