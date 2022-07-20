import { Module } from '@nestjs/common';
import { ChampionsService } from './champions.service';
import { ChampionsController } from './champions.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from 'src/auth/jwt.strategy';

@Module({
  imports: [PrismaModule, PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [ChampionsController],
  providers: [ChampionsService, JwtStrategy],
})
export class ChampionsModule {}
