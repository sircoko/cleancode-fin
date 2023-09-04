import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { TypeOrmGenericRepository } from './typeORM-generic-repository';
import { InjectRepository } from '@nestjs/typeorm';
import { IDataServices } from 'src/core';
import { Repository } from 'typeorm';
import { Budget, Category, Movement, User } from './model';

@Injectable()
export class TypeOrmDataServices
  implements IDataServices, OnApplicationBootstrap
{
  categories: TypeOrmGenericRepository<Category>;
  movements: TypeOrmGenericRepository<Movement>;
  users: TypeOrmGenericRepository<User>;
  budgets: TypeOrmGenericRepository<Budget>;

  constructor(
    @InjectRepository(User)
    private UsersRepository: Repository<User>,
    @InjectRepository(Movement)
    private MovementsRepository: Repository<Movement>,
    @InjectRepository(Category)
    private CategoryRepository: Repository<Category>,
    @InjectRepository(Budget)
    private BudgetRepository: Repository<Budget>,
  ) {}

  onApplicationBootstrap() {
    console.log('DataService succesfully initiated...');
    this.users = new TypeOrmGenericRepository<User>(this.UsersRepository);
    this.movements = new TypeOrmGenericRepository<Movement>(
      this.MovementsRepository,
    );
    this.categories = new TypeOrmGenericRepository<Category>(
      this.CategoryRepository,
    );
    this.budgets = new TypeOrmGenericRepository<Budget>(this.BudgetRepository);
  }
}
