import { FavoriteChampionDto } from './dto/favorite-champion.dto';
import { Favorite } from './entities/favorite.entity';
import { FavoritesService } from './favorites.service';
export declare class FavoritesController {
    private readonly favoritesService;
    constructor(favoritesService: FavoritesService);
    favoriteChampion(dto: FavoriteChampionDto): Promise<Favorite | void>;
    unfavoriteChampion(id: string): Promise<import(".prisma/client").Favorite>;
    getUserFavorites(id: string): Promise<Favorite[]>;
    getUsersWhoFavoritedChampion(id: string): Promise<Favorite[]>;
}
