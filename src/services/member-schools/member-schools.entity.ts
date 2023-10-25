import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Majors } from "../majors/majors.entity";

@Entity({ name: "member_schools" })
export class MemberSchool {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  link: string;

  @Column({ default: true })
  university: boolean;

  @Column({ default: false })
  afterUniversity: boolean;

  @Column({ type: "text", nullable: true })
  thumbnail: string;

  @Column({ type: "text", nullable: true })
  logo: string;

  @ManyToMany(() => Majors, (major) => major.memberSchools)
  majors: Majors[];
}
