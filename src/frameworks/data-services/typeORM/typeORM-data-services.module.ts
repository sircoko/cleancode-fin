import { Module } from '@nestjs/common';
import { IDataServices } from 'src/core';
import { TypeOrmDataServices } from './typeORM-data-services.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movement, User } from './model';

@Module({
  imports: [TypeOrmModule.forFeature([User, Movement])],
  providers: [
    {
      provide: IDataServices,
      useClass: TypeOrmDataServices,
    },
  ],
  exports: [IDataServices],
})
export class TypeOrmDataServicesModule {}
