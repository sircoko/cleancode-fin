import {
  Column,
  Entity,
  EntitySchema,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.model';
import { Category } from './category.model';

@Entity()
export class Movement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  concept: string;

  @Column()
  date: Date;

  @Column()
  amount: number;

  @ManyToOne(() => User, (user) => user.movements)
  user: User;

  @ManyToOne(() => Category, (category) => category.movements)
  category: Category;
}

export const MovementSchema = new EntitySchema<Movement>({
  name: 'Movement',
  target: Movement,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    concept: {
      type: String,
    },
    date: {
      type: Date,
    },
    amount: {
      type: Number,
    },
  },
  relations: {
    user: {
      type: 'many-to-one',
      target: 'User',
    },
    category: {
      type: 'many-to-one',
      target: 'User',
    },
  },
});
