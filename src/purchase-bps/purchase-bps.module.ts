import { Module } from '@nestjs/common';
import { PurchaseBpsService } from './purchase-bps.service';
import { PurchaseBpsController } from './purchase-bps.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PurchaseBpsController],
  providers: [PurchaseBpsService],
})
export class PurchaseBpsModule {}
