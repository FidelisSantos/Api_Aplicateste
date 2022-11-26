import { IsEmail, IsString } from 'class-validator';

export class NewLogin {
  id: string;
  @IsEmail()
  email: string;
  @IsString()
  password: string;
  constructor(id: string, email: string, password: string) {
    this.id = id;
    this.email = email;
    this.password = password;
  }
}
