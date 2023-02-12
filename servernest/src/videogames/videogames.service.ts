import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Request } from 'express';
import { Model } from 'mongoose';
import { CreateVideogameDto } from './dto/create-videogame.dto';
import { UpdateVideogameDto } from './dto/update-videogame.dto';
import { Videogame, VideogameDocument } from './schemas/videogame.schema';

@Injectable()
export class VideogamesService {
  constructor( 
    @InjectModel(Videogame.name) private readonly VideogameModel: Model<VideogameDocument>, 
  ) {}

  async create(createVideogameDto: CreateVideogameDto): Promise<Videogame> { 
    return this.VideogameModel.create(createVideogameDto); 
  }

  async findAll(request: Request): Promise<Videogame[]> { 
    return this.VideogameModel
      .find(request.query) 
      .setOptions({ sanitizeFilter: true }) 
      .exec();
  }


  async findOne(id: string): Promise<Videogame> { 
    return this.VideogameModel.findOne({ _id: id }).exec(); 
  }

  async update(id: string, updateVideogameDto: UpdateVideogameDto): Promise<Videogame> { 
    return this.VideogameModel.findOneAndUpdate({ _id: id }, updateVideogameDto, { 
      new: true, 
    });
  }

  async remove(id: string) { 
    return this.VideogameModel.findByIdAndRemove({ _id: id }).exec(); 
  }
}