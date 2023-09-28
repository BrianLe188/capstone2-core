import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "modules" })
export class Module {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 20,
  })
  key: string;

  @Column({
    length: 30,
  })
  name: string;

  @Column({
    nullable: true,
  })
  path: string;

  @Column({
    type: "text",
    nullable: true,
  })
  icon: string;
}
