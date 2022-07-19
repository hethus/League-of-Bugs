import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ChampionsModule } from './champions/champions.module';
import { ClassesModule } from './classes/classes.module';
import { FavoritesModule } from './favorites/favorites.module';

@Module({
  imports: [UsersModule, ChampionsModule, ClassesModule, FavoritesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
