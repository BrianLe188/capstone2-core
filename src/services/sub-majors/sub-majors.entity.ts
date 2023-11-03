import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Majors } from "../majors/majors.entity";
import { Certificate } from "../certificates/certificates.entity";

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

  @ManyToOne(() => Majors, (majors) => majors.subMajors, { nullable: true })
  @JoinColumn()
  major: Majors;

  @Column({ type: "integer" })
  tuition: number;

  @Column({ type: "float" })
  cutoffPoint: number;

  @Column({ type: "integer" })
  admissionCriteria: number;

  @ManyToMany(() => Certificate, (certificate) => certificate.subMajors)
  @JoinTable()
  graduationRequirements: Certificate[];
}
