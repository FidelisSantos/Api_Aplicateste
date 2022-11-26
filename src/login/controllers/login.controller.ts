import { Controller, Get, Body, Post } from '@nestjs/common';
import { LoginRequest } from 'src/types/LoginRequest';
import { LoginService } from '../services/login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Get()
  findAll() {
    return this.loginService.findAll();
  }

  @Post()
  findOne(@Body() login: LoginRequest) {
    return this.loginService.findOne(login);
  }
}
