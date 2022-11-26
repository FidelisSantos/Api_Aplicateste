import { Injectable } from '@nestjs/common';
import { InjectRepository } from 'nestjs-fireorm';
import { BaseFirestoreRepository } from 'fireorm';
import { User } from '../entities/user.entity';
import { NewUser } from '../models/new-user';

@Injectable()
export class UserRepositoryService {
  constructor(
    @InjectRepository(User)
    private user: BaseFirestoreRepository<User>,
  ) {}

  async create(user: NewUser) {
    return await this.user.create(user);
  }

  findAll() {
    return this.user.find();
  }

  async findOne(rgm: number) {
    return await this.user.whereEqualTo('rgm', rgm).findOne();
  }

  async remove(id: string) {
    return await this.user.delete(id);
  }

  async exits(rgm: number) {
    const result = await this.user.whereEqualTo('rgm', rgm).find();
    return result.length === 0;
  }
}
