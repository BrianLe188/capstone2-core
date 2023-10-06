import dotenv from "dotenv";
dotenv.config();
import {
  Server,
  ServerCredentials,
  loadPackageDefinition,
} from "@grpc/grpc-js";
import { loadSync } from "@grpc/proto-loader";
import { PROTO_PATH } from "./protos";
import { ProtoGrpcType } from "./generated/core";
import defaultService from "./services/default";
import "reflect-metadata";
import { CoreDB } from "./data-source";
import moduleRPC from "./services/modules/module.rpc";
import memberSchoolRPC from "./services/member-schools/member-schools.rpc";
import majorsRPC from "./services/majors/majors.rpc";
import subjectRPC from "./services/subjects/subjects.rpc";
import subjectBlockRPC from "./services/subject-blocks/subject-blocks.rpc";
import fileRPC from "./services/files/files.rpc";

const packageDefinition = loadSync(PROTO_PATH);

const service = loadPackageDefinition(
  packageDefinition
) as unknown as ProtoGrpcType;

function main() {
  const server = new Server();
  server.addService(service.core.Core.service, {
    ...defaultService,
    ...moduleRPC,
    ...memberSchoolRPC,
    ...majorsRPC,
    ...subjectRPC,
    ...subjectBlockRPC,
    ...fileRPC,
  });
  if (process.env.CORE_GRPC) {
    server.bindAsync(
      process.env.CORE_GRPC,
      ServerCredentials.createInsecure(),
      () => {
        server.start();
        console.log(`Core is running on ${process.env.CORE_GRPC}`);
        CoreDB.initialize()
          .then(() => {
            console.log(`Core database available`);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    );
  }
}

main();
