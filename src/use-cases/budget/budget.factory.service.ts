import { Injectable } from '@nestjs/common';
import { Budget } from 'src/core';
import { CreateBudgetDto, UpdateBudgetDto } from 'src/core/dtos/budget.dto';

@Injectable()
export class BudgetFactoryService {
  createNewBudget(createBudgetDto: CreateBudgetDto) {
    const newBudget = new Budget();
    newBudget.name = createBudgetDto.name;
    newBudget.description = createBudgetDto.description;
    newBudget.amount = createBudgetDto.amount;
    newBudget.percentage = createBudgetDto.percentage;
    return newBudget;
  }
  updateBudget(updateBudget: UpdateBudgetDto) {
    const newBudget = new Budget();
    newBudget.name = updateBudget.name;
    newBudget.description = updateBudget.description;
    newBudget.amount = updateBudget.amount;
    newBudget.percentage = updateBudget.percentage;
    return newBudget;
  }
}
