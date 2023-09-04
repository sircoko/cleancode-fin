import { join } from 'path';
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
  Budget,
  Category,
  Movement,
  User,
} from './frameworks/data-services/typeORM/model';
import { MovementUseCasesModule } from './use-cases/movement/movement-use-cases.module';
import { CategoryUseCasesModule } from './use-cases/category';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { HelloWorldModule } from './hello-world/hello-world.module';
import { BudgetUseCasesModule } from './use-cases/budget/budget-use-cases.module';
import { BudgetController } from './controllers/budget.controller';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
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
      entities: [User, Movement, Category, Budget],
      synchronize: true,
    }),
    DataServicesModule,
    UserUseCasesModule,
    MovementUseCasesModule,
    CategoryUseCasesModule,
    BudgetUseCasesModule,
    HelloWorldModule,
  ],
  controllers: [
    AppController,
    UserController,
    MovementController,
    CategoryController,
    BudgetController,
  ],
  providers: [],
})
export class AppModule {}
