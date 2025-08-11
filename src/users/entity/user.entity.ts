import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Exclude } from "class-transformer";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column({ nullable: true })
    name: string;
    @Column({ unique: true })
    email: string;
    @Column()
    // @Exclude()
    password: string;
    @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date; // Internal field
}
