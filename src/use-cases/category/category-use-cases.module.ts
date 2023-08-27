import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/services';
import { CategoryFactoryService } from './category.factory.services';
import { CategoryUseCases } from './category.use-case';

@Module({
  imports: [DataServicesModule],
  providers: [CategoryFactoryService, CategoryUseCases],
  exports: [CategoryFactoryService, CategoryUseCases],
})
export class CategoryUseCasesModule {}
