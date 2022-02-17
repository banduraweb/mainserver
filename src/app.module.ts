import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
require('dotenv').config();

@Module({
  imports: [MongooseModule.forRoot(process.env.DBURl, {
    autoCreate: true
  }), ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
