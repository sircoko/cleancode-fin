import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DataServicesModule } from './services';
import { UserUseCasesModule } from './use-cases/user/user-use-cases.module';
import {
  AppController,
  MovementController,
  UserController,
} from './controllers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movement, User } from './frameworks/data-services/typeORM/model';
import { MovementUseCasesModule } from './use-cases/movement/movement-use-cases.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [User, Movement],
      synchronize: true,
    }),
    DataServicesModule,
    UserUseCasesModule,
    MovementUseCasesModule,
  ],
  controllers: [AppController, UserController, MovementController],
  providers: [],
})
export class AppModule {}
