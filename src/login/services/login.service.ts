import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { LoginRepositoryService } from '../repository/login-repository.service';
import { LoginRequest } from 'src/types/LoginRequest';

@Injectable()
export class LoginService {
  constructor(private loginRepository: LoginRepositoryService) {}

  findAll() {
    return this.loginRepository.findAll();
  }

  async findOne(login: LoginRequest) {
    const userLogin = await this.loginRepository.findOne(login.email);
    console.log();
    if (!userLogin)
      throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND);
    if (
      userLogin.password !== login.password ||
      userLogin.email !== login.email
    )
      throw new HttpException(
        'Usuário ou senha incorretos',
        HttpStatus.UNAUTHORIZED,
      );
    return true;
  }
}
