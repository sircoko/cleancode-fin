import { Module } from '@nestjs/common';
import { TypeOrmDataServicesModule } from 'src/frameworks/data-services/typeORM/typeORM-data-services.module';

@Module({
  imports: [TypeOrmDataServicesModule],
  exports: [TypeOrmDataServicesModule],
})
export class DataServicesModule {}
