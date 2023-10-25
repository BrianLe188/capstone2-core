import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { EDUCATIONAL_LEVEL } from "../../utils/enums";
import { MemberSchool } from "../member-schools/member-schools.entity";
import { SubjectBlock } from "../subject-blocks/subject-blocks.entity";

@Entity({ name: "majors" })
export class Majors {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({
    type: "enum",
    enum: EDUCATIONAL_LEVEL,
    default: EDUCATIONAL_LEVEL.UNIVERSITY,
  })
  educationalLevel: EDUCATIONAL_LEVEL;

  @Column()
  code: string;

  @Column({ type: "text", nullable: true })
  description: string;

  @ManyToMany(() => MemberSchool, (member) => member.majors)
  @JoinTable()
  memberSchools: MemberSchool[];

  @ManyToMany(
    () => SubjectBlock,
    (subjectBlock) => subjectBlock.basedOnHighSchoolExamResults
  )
  @JoinTable()
  basedOnHighSchoolExamResults: SubjectBlock[];

  @ManyToMany(() => SubjectBlock, (subjectBlock) => subjectBlock)
  @JoinTable()
  basedOnHighSchoolTranscripts: SubjectBlock[];
}
