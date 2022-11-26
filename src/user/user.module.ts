import { Module } from '@nestjs/common';
import { FireormModule } from 'nestjs-fireorm';

import { UserRepositoryService } from './repository/user-repository.service';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { User } from './entities/user.entity';
import { LoginModule } from 'src/login/login.module';

@Module({
  imports: [FireormModule.forFeature([User]), LoginModule],
  controllers: [UserController],
  providers: [UserService, UserRepositoryService],
})
export class UserModule {}
