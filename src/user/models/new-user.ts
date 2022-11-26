import { IsInt, IsString } from 'class-validator';
import { UserRole } from 'src/enum/user-role';

export class NewUser {
  @IsInt()
  rgm: number;
  @IsString()
  name: string;
  @IsString()
  cursor: string;
  role: UserRole[];
  constructor(rgm: number, name: string, cursor: string, role: UserRole[]) {
    this.rgm = rgm;
    this.name = name;
    this.cursor = cursor;
    this.role = role;
  }
}
