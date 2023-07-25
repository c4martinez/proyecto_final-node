import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RestaurantOneValidator {
  
  @IsString({ message: 'id must be a string' })
  @IsNotEmpty({ message: 'id must not be empty' })
  @MinLength(10, { message: 'id is too short' })
  id: string = ''; // inicializar con un valor por defecto
}
