import { Category, Movement, User } from '../entities';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataServices {
  abstract users: IGenericRepository<User>;

  // abstract categories: IGenericRepository<Category>;

  abstract movements: IGenericRepository<Movement>;
}
