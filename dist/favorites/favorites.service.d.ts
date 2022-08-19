import { PrismaService } from 'src/prisma/prisma.service';
import { FavoriteChampionDto } from './dto/favorite-champion.dto';
import { Favorite } from './entities/favorite.entity';
export declare class FavoritesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    favoriteChampion(dto: FavoriteChampionDto): Promise<Favorite | void>;
    unfavoriteChampion(id: string): Promise<import(".prisma/client").Favorite>;
    getUserFavorites(id: string): Promise<Favorite[]>;
    getUsersWhoFavoritedChampion(id: string): Promise<Favorite[]>;
    verifyId(id: string): Promise<void | never>;
}
