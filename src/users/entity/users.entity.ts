import { BugPoint } from '@prisma/client';
import { Favorite } from 'src/favorites/entities/favorite.entity';

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
  purchasedBPs?: BugPoint[];
}
