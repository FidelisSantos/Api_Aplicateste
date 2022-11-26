import { Collection } from 'fireorm';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import * as d from 'dotenv';
import { UserRole } from 'src/enum/user-role';

d.config();
@Collection(process.env.FIRESTORE_COLLECTION_USERS)
export class User {
  id: string;

  @IsInt()
  rgm: number;
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  cursor: string;
  role: UserRole[];
}
