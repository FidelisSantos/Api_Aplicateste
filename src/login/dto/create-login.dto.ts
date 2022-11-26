import { IsEmail, IsString } from 'class-validator';

export class CreateLoginDto {
  @IsEmail()
  email: string;
  @IsString()
  password: string;
}
