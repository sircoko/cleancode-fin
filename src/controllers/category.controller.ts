import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from 'src/core';
import { CategoryUseCases } from 'src/use-cases/category';

@Controller('api/categories')
export class CategoryController {
  constructor(private categoryUseCases: CategoryUseCases) {}

  @Get()
  async getAll() {
    console.log('[CategoryController:Get]');
    return this.categoryUseCases.getAllCategories();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    console.log('[CategoryController:Get/:id', id);
    return this.categoryUseCases.getCategoryById(id);
  }

  @Post()
  async createCategory(@Body() categoryDto: CreateCategoryDto) {
    console.log('[CategoryController:Post]', categoryDto);
    return this.categoryUseCases.createCategory(categoryDto);
  }

  @Put(':id')
  async updateCategory(
    @Param('id') categoryId: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    console.log('[CateoryController:Put]', categoryId, updateCategoryDto);
    return this.categoryUseCases.updateCategory(categoryId, updateCategoryDto);
  }
}
