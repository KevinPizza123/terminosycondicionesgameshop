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

import { Request } from 'express';
import { ApiTags } from '@nestjs/swagger'; 
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('categorys')
@ApiTags('category') 

export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @Get()
  async findAll(@Req() request: Request) { 
    return this.categoryService.findAll(request);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.categoryService.findOne(id); 
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoryService.update(id, updateCategoryDto); 
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.categoryService.remove(id); 
  }
}