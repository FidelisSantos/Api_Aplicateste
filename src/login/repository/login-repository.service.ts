import { Injectable } from '@nestjs/common';
import { InjectRepository } from 'nestjs-fireorm';
import { BaseFirestoreRepository } from 'fireorm';
import { Login } from '../entities/login.entity';
import { NewLogin } from 'src/user/models/new-login';

@Injectable()
export class LoginRepositoryService {
  constructor(
    @InjectRepository(Login)
    private login: BaseFirestoreRepository<Login>,
  ) {}
  async create(newUser: NewLogin) {
    return await this.login.create(newUser);
  }

  async findAll() {
    return await this.login.find();
  }

  async findOne(email: string) {
    return await this.login.whereEqualTo('email', email).findOne();
  }

  update(id: number, updateLoginDto) {
    return `This action updates a #${id} login`;
  }

  remove(id: string) {
    return this.login.delete(id);
  }

  async exits(email: string) {
    const result = await this.login.whereEqualTo('email', email).find();
    return result.length === 0;
  }
}
