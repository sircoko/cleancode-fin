import { Injectable } from '@nestjs/common';
import {
  CreateCategoryDto,
  UpdateCategoryDto,
} from '../../core/dtos/category.dto';
import { Category } from 'src/core';

@Injectable()
export class CategoryFactoryService {
  createNewCategory(createCategoryDto: CreateCategoryDto) {
    const newCategory = new Category();
    newCategory.name = createCategoryDto.name;
    newCategory.description = createCategoryDto.description;
    return newCategory;
  }
  updateCategory(updateCategoryDto: UpdateCategoryDto) {
    const newCategory = new Category();
    newCategory.name = updateCategoryDto.name;
    newCategory.description = updateCategoryDto.description;
    return newCategory;
  }
}
