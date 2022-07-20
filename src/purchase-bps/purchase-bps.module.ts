import { Module } from '@nestjs/common';
import { PurchaseBpsService } from './purchase-bps.service';
import { PurchaseBpsController } from './purchase-bps.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from 'src/auth/jwt.strategy';

@Module({
  imports: [PrismaModule, PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [PurchaseBpsController],
  providers: [PurchaseBpsService, JwtStrategy],
})
export class PurchaseBpsModule {}
