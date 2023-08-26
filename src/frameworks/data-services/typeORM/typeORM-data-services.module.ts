import { Module } from '@nestjs/common';
import { IDataServices } from 'src/core';
import { TypeOrmDataServices } from './typeORM-data-services.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './model';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    {
      provide: IDataServices,
      useClass: TypeOrmDataServices,
    },
  ],
  exports: [IDataServices],
})
export class TypeOrmDataServicesModule {}
