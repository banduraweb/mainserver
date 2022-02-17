import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { EventPattern } from '@nestjs/microservices';
import { HttpService } from '@nestjs/axios';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private readonly httpService: HttpService,
  ) {}

  @EventPattern('hello')
  async hello(data) {
    console.log(data);
  }

  @EventPattern('product_created')
  async create(data: CreateProductDto) {
    const { id, title, image, likes } = data;
    return await this.productsService.create({ id, title, image, likes });
  }

  @Get()
  async findAll() {
    return await this.productsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.productsService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() { title, image }: UpdateProductDto,
  ) {
    return await this.productsService.update(+id, { title, image });
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.productsService.remove(+id);
  }
  @Post(':id/like')
  async like(@Param('id') id: string) {
    const product = await this.productsService.findOne(+id);
    await this.httpService
      .post(`http://localhost:3000/api/v1/products/${id}/like`, {})
      .subscribe((res) => {
        console.log(res);
      });
    return this.productsService.update(+id, { likes: product.likes + 1 });
  }
}
