import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { TypeOrmGenericRepository } from './typeORM-generic-repository';
import { InjectRepository } from '@nestjs/typeorm';
import { IDataServices } from 'src/core';
import { Repository } from 'typeorm';
import { Category, Movement, User } from './model';

@Injectable()
export class TypeOrmDataServices
  implements IDataServices, OnApplicationBootstrap
{
  categories: TypeOrmGenericRepository<Category>;
  movements: TypeOrmGenericRepository<Movement>;
  users: TypeOrmGenericRepository<User>;

  constructor(
    @InjectRepository(User)
    private UsersRepository: Repository<User>,
    @InjectRepository(Movement)
    private MovementsRepository: Repository<Movement>,
  ) {}

  onApplicationBootstrap() {
    console.log('DataService succesfully initiated...');
    this.users = new TypeOrmGenericRepository<User>(this.UsersRepository);
    this.movements = new TypeOrmGenericRepository<Movement>(this.MovementsRepository);
  }
}
