import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller.js';
import { ProductService } from './product.service.js';
import { CategoryService } from '../category/category.service.js';

describe('ProductController', () => {
  let controller: ProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [ProductService, CategoryService]
    }).compile();

    controller = module.get<ProductController>(ProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
