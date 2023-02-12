import { ApiProperty } from '@nestjs/swagger';
export class CreateVideogameDto {
  @ApiProperty({ 
    example: 'God of War Ragnarök',
  })
  readonly title: string; 

  @ApiProperty({ example: '40 dolares' })
  readonly price: string;

  @ApiProperty({
    example:
      'God of War Ragnarök es un juego de acción y aventuras desarrollado por Santa Monica Studio y publicado por Sony Interactive Entertainment. Se lanzó en todo el mundo el 9 de noviembre de 2022 para PlayStation 4 y PlayStation 5, lo que marcó el primer lanzamiento entre generaciones de la serie God of War.',
  })
  readonly description: string;

 @ApiProperty({
    example: 'https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png',
  })
  readonly image_url: string;

  @ApiProperty({ example: 4 }) 
  readonly keywords: number;
}