import { IsEmail, IsInt, IsString } from 'class-validator';
import * as d from 'dotenv';
import { Collection } from 'fireorm';

d.config();

@Collection(process.env.FIRESTORE_COLLECTION_LOGIN)
export class Login {
  @IsInt()
  id: string;
  @IsEmail()
  email: string;
  @IsString()
  password: string;
}
