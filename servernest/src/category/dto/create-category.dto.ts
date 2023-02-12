import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({ example: '2' }) 
  readonly _id: string; 

  @ApiProperty({ example: 'Hentai' })
  readonly name: string;

  @ApiProperty({ example: 'Categoria basada en secciones de juegos de hentai para mayores de 18 años' })
  readonly descripcion: string;

  
}