import { IGenericRepository } from 'src/core';
import { DeepPartial, FindOptionsWhere, Repository } from 'typeorm';

export class TypeOrmGenericRepository<T> implements IGenericRepository<T> {
  private _repository: Repository<T>;
  constructor(repository: Repository<T>) {
    this._repository = repository;
  }

  getAll(relations?): Promise<T[]> {
    return this._repository.find({ relations });
  }
  get(id: any): Promise<T | null> {
    return this._repository.findOneBy({ id } as FindOptionsWhere<T>);
  }
  create(item: T): Promise<T> {
    console.log('[TypeORMRepository:Create]: ', item);
    return this._repository.save(item);
  }
  update(id: any, item: T): Promise<T> {
    const object = this._repository.findOneBy({ id } as FindOptionsWhere<T>);
    if (!object) return;
    Object.assign(object, item);
    return this._repository.save(object as DeepPartial<T>);
  }
  delete(id: any): Promise<number> {
    const result = this._repository.delete({ id }).then((result): number => {
      return result.affected;
    });
    return result;
  }
}
