import { Module } from '@nestjs/common';
import { UserFactoryService } from './user.factory.service';
import { DataServicesModule } from 'src/services';
import { UserUseCases } from './user.use-case';

@Module({
  imports: [DataServicesModule],
  providers: [UserFactoryService, UserUseCases],
  exports: [UserFactoryService, UserUseCases],
})
export class UserUseCasesModule {}
