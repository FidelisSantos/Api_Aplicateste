import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserRepositoryService } from '../repository/user-repository.service';
import { LoginRepositoryService } from '../../login/repository/login-repository.service';
import { NewUser } from '../models/new-user';
import { NewLogin } from '../models/new-login';
import { UserRole } from 'src/enum/user-role';

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepositoryService,
    private loginRepository: LoginRepositoryService,
  ) {}
  async create(createUserDto: CreateUserDto, role: UserRole[]) {
    if (!(await this.userRepository.exits(createUserDto.rgm)))
      throw new HttpException(
        'Rgm Informado já possui cadastro',
        HttpStatus.BAD_REQUEST,
      );
    if (!(await this.loginRepository.exits(createUserDto.login.email)))
      throw new HttpException(
        'Email Informado já possui cadastro',
        HttpStatus.BAD_REQUEST,
      );

    const newUser = new NewUser(
      createUserDto.rgm,
      createUserDto.name,
      createUserDto.cursor,
      role,
    );
    const newLogin = new NewLogin(
      createUserDto.rgm.toString(),
      createUserDto.login.email,
      createUserDto.login.password,
    );

    const result = await this.userRepository.create(newUser);
    await this.loginRepository.create(newLogin);
    return result;
  }

  findAll() {
    return this.userRepository.findAll();
  }

  async findOne(rgm: number) {
    const user = await this.userRepository.findOne(rgm);
    console.log(user);
    if (!user)
      throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND);
    return user;
  }

  async remove(rgm: number) {
    const deleteUser = await this.userRepository.findOne(rgm);
    if (!deleteUser)
      throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND);
    await this.loginRepository.remove(rgm.toString());
    await this.userRepository.remove(deleteUser.id);
    return 'Deletado';
  }
}
