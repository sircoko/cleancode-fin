import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DataServicesModule } from './services';
import { UserUseCasesModule } from './use-cases/user/user-use-cases.module';
import {
  AppController,
  CategoryController,
  MovementController,
  UserController,
} from './controllers';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  Category,
  Movement,
  User,
} from './frameworks/data-services/typeORM/model';
import { MovementUseCasesModule } from './use-cases/movement/movement-use-cases.module';
import { CategoryUseCasesModule } from './use-cases/category';

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
      entities: [User, Movement, Category],
      synchronize: true,
    }),
    DataServicesModule,
    UserUseCasesModule,
    MovementUseCasesModule,
    CategoryUseCasesModule,
  ],
  controllers: [
    AppController,
    UserController,
    MovementController,
    CategoryController,
  ],
  providers: [],
})
export class AppModule {}
