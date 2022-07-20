import { Module } from '@nestjs/common';
import { BugpointsService } from './bugpoints.service';
import { BugpointsController } from './bugpoints.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';
import { JwtAdmStrategy } from 'src/auth/jwt.strategy';

@Module({
  imports: [PrismaModule, PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [BugpointsController],
  providers: [BugpointsService, JwtAdmStrategy],
})
export class BugpointsModule {}
