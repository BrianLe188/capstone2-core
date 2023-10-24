import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "sub_majors" })
export class SubMajors {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  code: string;

  @Column({ type: "text", nullable: true })
  description: string;
}
