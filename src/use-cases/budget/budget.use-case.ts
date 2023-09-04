import { Injectable } from '@nestjs/common';
import { Budget, CreateBudgetDto, IDataServices } from 'src/core';
import { BudgetFactoryService } from './budget.factory.service';
import { UpdateBudgetDto } from '../../core/dtos/budget.dto';

@Injectable()
export class BudgetUseCases {
  constructor(
    private dataServices: IDataServices,
    private budgetFactoryService: BudgetFactoryService,
  ) {}

  getAllBudgets(): Promise<Budget[]> {
    console.log('usecases');
    const relations = [];
    return this.dataServices.budgets.getAll(relations);
  }

  getBudgetById(id: any): Promise<Budget> {
    return this.dataServices.budgets.get(id);
  }

  createBudget(createBudgetDto: CreateBudgetDto): Promise<Budget> {
    const budget = this.budgetFactoryService.createNewBudget(createBudgetDto);
    return this.dataServices.budgets.create(budget);
  }

  updateBudget(
    budgetId: string,
    updateBudgetDto: UpdateBudgetDto,
  ): Promise<Budget> {
    const budget = this.budgetFactoryService.updateBudget(updateBudgetDto);
    return this.dataServices.budgets.update(budgetId, budget);
  }
}
