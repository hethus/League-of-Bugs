import { Favorite } from 'src/favorites/entities/favorite.entity';
import { PurchaseBp } from 'src/purchase-bps/entities/purchase-bugpoints.entity';
import { PurchaseChampion } from 'src/purchase-champions/entities/purchase-champions.entity';

export class User {
  id: string;
  name: string;
  email: string;
  password?: string;
  cpf: string;
  isAdmin: boolean;
  bugPoint: number;
  createdAt: Date;
  updatedAt: Date;
  favorites?: Favorite[];
  purchasedBPs?: PurchaseBp[];
  purchasedChampions?: PurchaseChampion[];
}
