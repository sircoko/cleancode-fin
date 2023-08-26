import { Column, Entity, EntitySchema, PrimaryGeneratedColumn } from 'typeorm';

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
});
