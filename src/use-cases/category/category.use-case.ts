import { Injectable } from '@nestjs/common';
import {
  Category,
  CreateCategoryDto,
  IDataServices,
  UpdateCategoryDto,
} from 'src/core';
import { CategoryFactoryService } from './category.factory.services';

@Injectable()
export class CategoryUseCases {
  constructor(
    private dataServices: IDataServices,
    private categoryFactoryService: CategoryFactoryService,
  ) {}

  getAllCategories(): Promise<Category[]> {
    return this.dataServices.categories.getAll();
  }

  getCategoryById(id: any): Promise<Category> {
    return this.dataServices.categories.get(id);
  }

  createCategory(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const category =
      this.categoryFactoryService.createNewCategory(createCategoryDto);
    return this.dataServices.categories.create(category);
  }

  updateCategory(
    categoryId: string,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    const category =
      this.categoryFactoryService.updateCategory(updateCategoryDto);
    return this.dataServices.categories.update(categoryId, category);
  }
}
