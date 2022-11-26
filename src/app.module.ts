import { Module } from '@nestjs/common';
import { FireormModule } from 'nestjs-fireorm';
import { UserModule } from './user/user.module';
import { LoginModule } from './login/login.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as d from 'dotenv';

d.config();

@Module({
  imports: [
    UserModule,
    FireormModule.forRoot({
      firestoreSettings: {
        projectId: process.env.PROJECTID,
        credentials: {
          client_email: process.env.CLIENT_EMAIL,
          private_key: process.env.PRIVATY_KEY,
        },
      },
      fireormSettings: { validateModels: false },
    }),
    LoginModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
