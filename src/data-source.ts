import { DataSource, DataSourceOptions } from "typeorm";
import { Module } from "./services/modules/module.entity";
import { MemberSchool } from "./services/member-schools/member-schools.entity";
import { Majors } from "./services/majors/majors.entity";
import { Subject } from "./services/subjects/subjects.entity";
import { SubjectBlock } from "./services/subject-blocks/subject-blocks.entity";

export const CoreDB = new DataSource({
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: [Module, MemberSchool, Majors, Subject, SubjectBlock],
  subscribers: [],
  migrations: [],
} as DataSourceOptions);
