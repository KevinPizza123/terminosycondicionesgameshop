import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';

import { Videogame, VideogameSchema } from './schemas/videogame.schema';
import { VideogamesController } from './videogames.controller';
import { VideogamesService } from './videogames.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Videogame.name, schema: VideogameSchema }]), 
  ],
  controllers: [VideogamesController],
  providers: [VideogamesService],
})
export class VideogamesModule {}