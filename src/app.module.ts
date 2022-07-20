import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ChampionsModule } from './champions/champions.module';
import { ClassesModule } from './classes/classes.module';
import { FavoritesModule } from './favorites/favorites.module';
import { BugpointsModule } from './bugpoints/bugpoints.module';
import { PurchaseBpsModule } from './purchase-bps/purchase-bps.module';
import { PurchaseChampionsModule } from './purchase-champions/purchase-champions.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsersModule,
    ChampionsModule,
    ClassesModule,
    FavoritesModule,
    BugpointsModule,
    PurchaseBpsModule,
    PurchaseChampionsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
