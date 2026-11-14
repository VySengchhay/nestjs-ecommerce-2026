 import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto.js';
import { UpdateCategoryDto } from './dto/update-category.dto.js';

@Injectable()
export class CategoryService {
    private categories = [
    { id: 1, name: 'Food' },
    { id: 2, name: 'Education' },
  ];

  findAll() {
    return this.categories;
  }

  findOne(id: number) {
    const category = this.categories.find((c) => c.id === id);
    if (!category) throw new NotFoundException(`Category ${id} not found`);
    return category;
  }

  create(dto: CreateCategoryDto) {
    const category = { id: this.categories.length + 1, ...dto };
    this.categories.push(category);
    return category;
  }

  update(id: number, dto: UpdateCategoryDto) {
    const category = this.findOne(id);
    Object.assign(category, dto);
    return category;
  }

  remove(id: number) {
    this.findOne(id);
    this.categories = this.categories.filter((c) => c.id !== id);
    return {
      remove: true,
    };
  }
}
