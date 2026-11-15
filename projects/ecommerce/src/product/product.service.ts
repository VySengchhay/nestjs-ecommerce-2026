import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import { CategoryService } from '../category/category.service.js';

@Injectable()
export class ProductService {
  constructor(private readonly categoryService: CategoryService) {}

  private products = [
    { id: 1, name: 'Sample Product', price: 19.99, categoryId: 1 },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((p) => p.id === id);
    if (!product) throw new NotFoundException(`Product ${id} not found`);
    return product;
  }

  create(dto: CreateProductDto) {
    this.categoryService.findOne(dto.categoryId);
    const product = { id: this.products.length + 1, ...dto };
    this.products.push(product);
    return product;
  }

  update(id: number, dto: UpdateProductDto) {
    if (dto.categoryId) {
      this.categoryService.findOne(dto.categoryId);
    }

    const product = this.findOne(id);
    Object.assign(product, dto);
    return product;
  }

  remove(id: number) {
    this.findOne(id);
    this.products = this.products.filter((p) => p.id !== id);
    return {
      removed: true,
    };
  }
}
