import { Module } from '@nestjs/common';
import { BugpointsService } from './bugpoints.service';
import { BugpointsController } from './bugpoints.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [BugpointsController],
  providers: [BugpointsService],
})
export class BugpointsModule {}
