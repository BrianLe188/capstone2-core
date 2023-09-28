import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Majors } from "../majors/majors.entity";

@Entity({ name: "member_schools" })
export class MemberSchool {
  @PrimaryGeneratedColumn()
  id: number;

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

  @OneToMany(() => Majors, (major) => major.memberSchool)
  majors: Majors[];
}
