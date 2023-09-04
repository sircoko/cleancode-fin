import { Column, Entity, EntitySchema, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Budget {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  amount: number;

  @Column()
  percentage: number;
}

export const BudgetSchema = new EntitySchema<Budget>({
  name: 'Budget',
  target: Budget,
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
    amount: {
      type: Number,
    },
    percentage: {
      type: Number,
    },
  },
});
