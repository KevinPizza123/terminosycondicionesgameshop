import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category, CategoryDocument } from './schemas/category.schema';
import { Request } from 'express';

@Injectable()
export class CategoryService {
  constructor( 
    @InjectModel(Category.name) private readonly categoryModel: Model<CategoryDocument>, 
  ) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> { 
    return this.categoryModel.create(createCategoryDto); 
  }

  async findAll(request: Request): Promise<Category[]> { 
    return this.categoryModel
      .find(request.query) 
      .setOptions({ sanitizeFilter: true }) 
      .exec();
  }

  async findOne(id: string): Promise<Category> { 
    return this.categoryModel.findOne({ _id: id }).exec(); 
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) { 
    return this.categoryModel.findOneAndUpdate({ _id: id }, updateCategoryDto, { 
      new: true, 
    });
  }

  async remove(id: string) { 
    return this.categoryModel.findByIdAndRemove({ _id: id }).exec(); 
  }
}