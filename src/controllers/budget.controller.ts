import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateBudgetDto, UpdateBudgetDto } from 'src/core';
import { BudgetUseCases } from 'src/use-cases/budget/budget.use-case';

@Controller('api/budgets')
export class BudgetController {
  constructor(private budgetUseCases: BudgetUseCases) {}
  @Get()
  async getAll() {
    console.log('[BugdetController:Get]');
    return this.budgetUseCases.getAllBudgets();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    console.log('[BudgetController:Get/:id]', id);
    return this.budgetUseCases.getBudgetById(id);
  }

  @Post()
  async createBudget(@Body() budgetDto: CreateBudgetDto) {
    console.log('[BudgetController:Post]', budgetDto);
    return this.budgetUseCases.createBudget(budgetDto);
  }

  @Put(':id')
  async updateBudget(
    @Param('id') budgetId: string,
    @Body() updateBudgetDto: UpdateBudgetDto,
  ) {
    console.log('[BudgetController:Put]', budgetId, updateBudgetDto);
    return this.budgetUseCases.updateBudget(budgetId, updateBudgetDto);
  }
}
