import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserService } from '../services/user.service';
import { UserRole } from 'src/enum/user-role';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto, [UserRole.USER]);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':rgm')
  findOne(@Param('rgm') rgm: string) {
    return this.userService.findOne(+rgm);
  }

  @Delete(':rgm')
  remove(@Param('rgm') rgm: string) {
    return this.userService.remove(+rgm);
  }
}
