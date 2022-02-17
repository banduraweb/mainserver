import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from "@nestjs/microservices";

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://lcvfitov:N5_UMZccoxOApPBLcdu7dbbCS4rVG1F1@beaver.rmq.cloudamqp.com/lcvfitov'],
      queue: 'main_queue',
      queueOptions: {
        durable: false
      },
    },
  });

   await app.listen();
  console.log("main started");
}
bootstrap();
