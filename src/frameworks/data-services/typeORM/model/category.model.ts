import {
  Column,
  Entity,
  EntitySchema,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Movement } from './movement.model';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => Movement, (movement) => movement.category)
  movements: Movement[];
}

export const CategorySchema = new EntitySchema<Category>({
  name: 'Category',
  target: Category,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    name: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  relations: {
    movements: {
      type: 'one-to-many',
      target: 'Movement',
    },
  },
});
