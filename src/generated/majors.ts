import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';


type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  certificate: {
    Certificate: MessageTypeDefinition
    CertificateResponse: MessageTypeDefinition
    Certificates: MessageTypeDefinition
    CertificatesResponse: MessageTypeDefinition
    UpdateCertificate: MessageTypeDefinition
  }
  majors: {
    MajorCodeAndSubjectBlockCode: MessageTypeDefinition
    MajorCodeAndSubjectBlockCodes: MessageTypeDefinition
    MajorWithSubjectBlocks: MessageTypeDefinition
    Majors: MessageTypeDefinition
    MajorsResponse: MessageTypeDefinition
    Majorss: MessageTypeDefinition
    MajorssResponse: MessageTypeDefinition
    UpdateMajors: MessageTypeDefinition
  }
  sub_major: {
    SubMajorWithMajorAndCertificates: MessageTypeDefinition
    SubMajors: MessageTypeDefinition
    SubMajorsResponse: MessageTypeDefinition
    SubMajorss: MessageTypeDefinition
    SubMajorssResponse: MessageTypeDefinition
    UpdateSubMajors: MessageTypeDefinition
  }
  subject: {
    Subject: MessageTypeDefinition
    SubjectResponse: MessageTypeDefinition
    Subjects: MessageTypeDefinition
    SubjectsResponse: MessageTypeDefinition
    UpdateSubject: MessageTypeDefinition
  }
  subject_block: {
    BlockCodeAndSubject: MessageTypeDefinition
    BlockCodeAndSubjects: MessageTypeDefinition
    SubjectBlock: MessageTypeDefinition
    SubjectBlockResponse: MessageTypeDefinition
    SubjectBlockWithSubjects: MessageTypeDefinition
    SubjectBlocks: MessageTypeDefinition
    SubjectBlocksResponse: MessageTypeDefinition
    UpdateSubjectBlock: MessageTypeDefinition
  }
}

