import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { SubMajors } from "../sub-majors/sub-majors.entity";

@Entity({ name: "certificates" })
export class Certificate {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => SubMajors, (sub) => sub.graduationRequirements)
  subMajors: SubMajors[];
}
