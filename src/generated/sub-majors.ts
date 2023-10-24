import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';


type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  sub_major: {
    SubMajorWithSubjectBlocks: MessageTypeDefinition
    SubMajors: MessageTypeDefinition
    SubMajorsResponse: MessageTypeDefinition
    SubMajorss: MessageTypeDefinition
    SubMajorssResponse: MessageTypeDefinition
    UpdateSubMajors: MessageTypeDefinition
  }
}

