import { Module } from '@nestjs/common';
import { IDataServices } from 'src/core';
import { TypeOrmDataServices } from './typeORM-data-services.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Budget, Category, Movement, User } from './model';

@Module({
  imports: [TypeOrmModule.forFeature([User, Movement, Category, Budget])],
  providers: [
    {
      provide: IDataServices,
      useClass: TypeOrmDataServices,
    },
  ],
  exports: [IDataServices],
})
export class TypeOrmDataServicesModule {}
