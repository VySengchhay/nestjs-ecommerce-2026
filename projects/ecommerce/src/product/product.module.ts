import { Module } from '@nestjs/common';
import { ProductController } from './product.controller.js';
import { ProductService } from './product.service.js';
import { CategoryModule } from '../category/category.module.js';

@Module({
  imports: [CategoryModule],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
