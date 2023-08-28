import {
  Column,
  Entity,
  EntitySchema,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Movement } from './movement.model';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany((type) => Movement, (movement) => movement.user)
  movements: Movement[];
}

export const UserSchema = new EntitySchema<User>({
  name: 'User',
  target: User,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    username: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  relations: {
    movements: {
      type: 'one-to-many',
      target: 'Movement',
      eager: true,
    },
  },
});
