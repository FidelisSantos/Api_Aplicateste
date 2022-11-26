import { IsInt, IsString } from 'class-validator';
import { UserRole } from 'src/enum/user-role';
import { LoginRequest } from 'src/types/LoginRequest';
export class CreateUserDto {
  @IsInt()
  rgm: number;
  @IsString()
  name: string;
  @IsString()
  cursor: string;
  login: LoginRequest;
}
