import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service.js';
import { CategoryService } from '../category/category.service.js';
import { NotFoundException } from '@nestjs/common';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductService, CategoryService],
    }).compile();

    service = module.get<ProductService>(ProductService);
  });

  it('throw exception for invalid categoryId', () => {
    expect(() =>
      service.create({
        name: 'Laptop',
        price: 10.00,
        categoryId: 3,
      }),
    ).toThrow(NotFoundException);
  });

  it('throw exception for invalid productId', () => {
    expect(() => service.findOne(2)).toThrow(NotFoundException)
  })

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
