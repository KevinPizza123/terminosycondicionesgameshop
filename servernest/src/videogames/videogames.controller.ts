
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger'; 
import { CreateVideogameDto } from './dto/create-videogame.dto';
import { UpdateVideogameDto } from './dto/update-videogame.dto';
import { VideogamesService } from './videogames.service';
import { Request } from 'express';
@Controller('videogames')
@ApiTags('videogames') 

export class VideogamesController {
  constructor(private readonly videogamesService: VideogamesService) {}

  @Post()
  create(@Body() createVideogameDto: CreateVideogameDto) {
    return this.videogamesService.create(createVideogameDto);
  }

  @Get()
  findAll(@Req() request: Request) { 
    return this.videogamesService.findAll(request);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.videogamesService.findOne(id); 
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVideogameDto: UpdateVideogameDto) {
    return this.videogamesService.update(id, updateVideogameDto); 
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.videogamesService.remove(id); 
  }
}