import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ChampionsModule } from './champions/champions.module';

@Module({
  imports: [UsersModule, ChampionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
