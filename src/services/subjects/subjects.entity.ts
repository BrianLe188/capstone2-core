import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { SubjectBlock } from "../subject-blocks/subject-blocks.entity";

@Entity({ name: "subjects" })
export class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => SubjectBlock, (subject_block) => subject_block.subjects)
  subjectBlocks: SubjectBlock[];
}
