import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { FILE_EXTENSION } from "../../utils/enums";

@Entity({ name: "files" })
export class Files {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ type: "text" })
  path: string;

  @Column({ type: "enum", enum: FILE_EXTENSION, default: FILE_EXTENSION.TXT })
  extension: string;
}
