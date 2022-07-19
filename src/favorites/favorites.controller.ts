import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { FavoriteChampionDto } from './dto/favorite-champion.dto';
import { Favorite } from './entities/favorite.entity';
import { FavoritesService } from './favorites.service';

@ApiTags('favorites')
@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Post()
  @ApiOperation({
    summary: 'Favorite a champion for a user',
  })
  favoriteChampion(@Body() dto: FavoriteChampionDto): Promise<Favorite | void> {
    return this.favoritesService.favoriteChampion(dto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Unfavorite a champion for a user',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  unfavoriteChampion(@Param('id') id: string) {
    return this.favoritesService.unfavoriteChampion(id);
  }

  @Get('user/:id')
  @ApiOperation({
    summary: 'Get all favorites for a user',
  })
  getUserFavorites(@Param('id') id: string): Promise<Favorite[]> {
    return this.favoritesService.getUserFavorites(id);
  }

  @Get('champion/:id')
  @ApiOperation({
    summary: 'Get all users who have favorited a champion',
  })
  getUsersWhoFavoritedChampion(@Param('id') id: string): Promise<Favorite[]> {
    return this.favoritesService.getUsersWhoFavoritedChampion(id);
  }
}
