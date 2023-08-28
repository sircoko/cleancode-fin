import { Category } from './category.entity';
import { User } from './user.entity';

export class Movement {
  user: User;
  concept: string;
  date: Date;
  amount: number;
  category: Category;
}
