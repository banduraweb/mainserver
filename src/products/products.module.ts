import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { ProductEntitySchema, ProductEntity } from "./entities/product.entity";

@Module({
  imports: [MongooseModule.forFeature([{name: ProductEntity.name, schema: ProductEntitySchema}])],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
