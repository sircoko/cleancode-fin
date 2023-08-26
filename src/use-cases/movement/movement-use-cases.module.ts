import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/services';
import { MovementFactoryService } from './movement.factory.service';
import { MovementUseCases } from './movement.use-case';

@Module({
  imports: [DataServicesModule],
  providers: [MovementFactoryService, MovementUseCases],
  exports: [MovementFactoryService, MovementUseCases],
})
export class MovementUseCasesModule {}
