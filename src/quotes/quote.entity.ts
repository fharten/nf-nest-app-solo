import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Quote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text", nullable: false })
  quote: string;

  @Column({ length: 100, nullable: false })
  author: string;

  @Column({ type: "int", nullable: true })
  year?: number;
}
