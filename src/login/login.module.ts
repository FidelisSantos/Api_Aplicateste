import { Module } from '@nestjs/common';
import { FireormModule } from 'nestjs-fireorm';

import { LoginController } from './controllers/login.controller';
import { LoginService } from './services/login.service';
import { LoginRepositoryService } from './repository/login-repository.service';

import { Login } from './entities/login.entity';

@Module({
  imports: [FireormModule.forFeature([Login])],
  controllers: [LoginController],
  providers: [LoginService, LoginRepositoryService],
  exports: [LoginRepositoryService],
})
export class LoginModule {}
