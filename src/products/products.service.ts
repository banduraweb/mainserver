import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from "@nestjs/mongoose";
import { ProductEntity, ProductEntityDocument } from "./entities/product.entity";
import { Model } from 'mongoose'

@Injectable()
export class ProductsService {
  constructor(@InjectModel(ProductEntity.name) private readonly productsRepo: Model<ProductEntityDocument>) {
  }
  async create(createProductDto: CreateProductDto) {
    console.log(createProductDto);
    return new this.productsRepo(createProductDto).save();
  }

  async findAll() {
    return await this.productsRepo.find()
  }

  async findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  async remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
