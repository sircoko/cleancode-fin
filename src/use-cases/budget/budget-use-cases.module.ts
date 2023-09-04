import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/services';
import { BudgetFactoryService } from './budget.factory.service';
import { BudgetUseCases } from './budget.use-case';

@Module({
  imports: [DataServicesModule],
  providers: [BudgetFactoryService, BudgetUseCases],
  exports: [BudgetFactoryService, BudgetUseCases],
})
export class BudgetUseCasesModule {}
