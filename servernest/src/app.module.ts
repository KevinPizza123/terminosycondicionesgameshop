import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryModule } from './category/category.module';
import { VideogamesModule } from './videogames/videogames.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/tutorial'), 
    VideogamesModule,
    CategoryModule,
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}