import { Module } from '@nestjs/common';
import { PurchaseChampionsService } from './purchase-champions.service';
import { PurchaseChampionsController } from './purchase-champions.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from 'src/auth/jwt.strategy';

@Module({
  imports: [PrismaModule, PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [PurchaseChampionsController],
  providers: [PurchaseChampionsService, JwtStrategy],
})
export class PurchaseChampionsModule {}
