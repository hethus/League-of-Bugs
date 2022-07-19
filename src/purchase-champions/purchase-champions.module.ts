import { Module } from '@nestjs/common';
import { PurchaseChampionsService } from './purchase-champions.service';
import { PurchaseChampionsController } from './purchase-champions.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PurchaseChampionsController],
  providers: [PurchaseChampionsService],
})
export class PurchaseChampionsModule {}
