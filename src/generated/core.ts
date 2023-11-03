import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { CoreClient as _core_CoreClient, CoreDefinition as _core_CoreDefinition } from './core/Core';

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
  core: {
    Core: SubtypeConstructor<typeof grpc.Client, _core_CoreClient> & { service: _core_CoreDefinition }
    GreetRequest: MessageTypeDefinition
    GreetResponse: MessageTypeDefinition
    Message: MessageTypeDefinition
    RequestEmpty: MessageTypeDefinition
    Strings: MessageTypeDefinition
    Target: MessageTypeDefinition
  }
  file: {
    File: MessageTypeDefinition
    FileResponse: MessageTypeDefinition
    Files: MessageTypeDefinition
    FilesResponse: MessageTypeDefinition
    UpdateFile: MessageTypeDefinition
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
  member_school: {
    MemberSchool: MessageTypeDefinition
    MemberSchoolResponse: MessageTypeDefinition
    MemberSchoolWithMajor: MessageTypeDefinition
    MemberSchools: MessageTypeDefinition
    MemberSchoolsResponse: MessageTypeDefinition
    UpdateMemberSchool: MessageTypeDefinition
  }
  module: {
    Module: MessageTypeDefinition
    ModuleResponse: MessageTypeDefinition
    Modules: MessageTypeDefinition
    ModulesResponse: MessageTypeDefinition
    UpdateModule: MessageTypeDefinition
  }
  rule: {
    Rule: MessageTypeDefinition
    RuleResponse: MessageTypeDefinition
    Rules: MessageTypeDefinition
    RulesResponse: MessageTypeDefinition
    UpdateRule: MessageTypeDefinition
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

