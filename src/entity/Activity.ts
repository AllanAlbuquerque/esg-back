import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class Activity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  ecocoins: number;

  // Relationship with User entity
  @ManyToOne(() => User, user => user.activities)
  user: User;
}

export default Activity;
