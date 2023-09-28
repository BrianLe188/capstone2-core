// Original file: core/core.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GreetRequest as _core_GreetRequest, GreetRequest__Output as _core_GreetRequest__Output } from '../core/GreetRequest';
import type { GreetResponse as _core_GreetResponse, GreetResponse__Output as _core_GreetResponse__Output } from '../core/GreetResponse';
import type { Majors as _majors_Majors, Majors__Output as _majors_Majors__Output } from '../majors/Majors';
import type { MajorsResponse as _majors_MajorsResponse, MajorsResponse__Output as _majors_MajorsResponse__Output } from '../majors/MajorsResponse';
import type { MajorssResponse as _majors_MajorssResponse, MajorssResponse__Output as _majors_MajorssResponse__Output } from '../majors/MajorssResponse';
import type { MemberSchool as _member_school_MemberSchool, MemberSchool__Output as _member_school_MemberSchool__Output } from '../member_school/MemberSchool';
import type { MemberSchoolResponse as _member_school_MemberSchoolResponse, MemberSchoolResponse__Output as _member_school_MemberSchoolResponse__Output } from '../member_school/MemberSchoolResponse';
import type { MemberSchoolsResponse as _member_school_MemberSchoolsResponse, MemberSchoolsResponse__Output as _member_school_MemberSchoolsResponse__Output } from '../member_school/MemberSchoolsResponse';
import type { Message as _core_Message, Message__Output as _core_Message__Output } from '../core/Message';
import type { Module as _module_Module, Module__Output as _module_Module__Output } from '../module/Module';
import type { ModuleResponse as _module_ModuleResponse, ModuleResponse__Output as _module_ModuleResponse__Output } from '../module/ModuleResponse';
import type { ModulesResponse as _module_ModulesResponse, ModulesResponse__Output as _module_ModulesResponse__Output } from '../module/ModulesResponse';
import type { RequestEmpty as _core_RequestEmpty, RequestEmpty__Output as _core_RequestEmpty__Output } from '../core/RequestEmpty';
import type { Strings as _core_Strings, Strings__Output as _core_Strings__Output } from '../core/Strings';
import type { Subject as _subject_Subject, Subject__Output as _subject_Subject__Output } from '../subject/Subject';
import type { SubjectBlock as _subject_block_SubjectBlock, SubjectBlock__Output as _subject_block_SubjectBlock__Output } from '../subject_block/SubjectBlock';
import type { SubjectBlockResponse as _subject_block_SubjectBlockResponse, SubjectBlockResponse__Output as _subject_block_SubjectBlockResponse__Output } from '../subject_block/SubjectBlockResponse';
import type { SubjectBlocksResponse as _subject_block_SubjectBlocksResponse, SubjectBlocksResponse__Output as _subject_block_SubjectBlocksResponse__Output } from '../subject_block/SubjectBlocksResponse';
import type { SubjectResponse as _subject_SubjectResponse, SubjectResponse__Output as _subject_SubjectResponse__Output } from '../subject/SubjectResponse';
import type { SubjectsResponse as _subject_SubjectsResponse, SubjectsResponse__Output as _subject_SubjectsResponse__Output } from '../subject/SubjectsResponse';
import type { Target as _core_Target, Target__Output as _core_Target__Output } from '../core/Target';
import type { UpdateMajors as _majors_UpdateMajors, UpdateMajors__Output as _majors_UpdateMajors__Output } from '../majors/UpdateMajors';
import type { UpdateMemberSchool as _member_school_UpdateMemberSchool, UpdateMemberSchool__Output as _member_school_UpdateMemberSchool__Output } from '../member_school/UpdateMemberSchool';
import type { UpdateModule as _module_UpdateModule, UpdateModule__Output as _module_UpdateModule__Output } from '../module/UpdateModule';
import type { UpdateSubject as _subject_UpdateSubject, UpdateSubject__Output as _subject_UpdateSubject__Output } from '../subject/UpdateSubject';
import type { UpdateSubjectBlock as _subject_block_UpdateSubjectBlock, UpdateSubjectBlock__Output as _subject_block_UpdateSubjectBlock__Output } from '../subject_block/UpdateSubjectBlock';

export interface CoreClient extends grpc.Client {
  CreateMajor(argument: _majors_Majors, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_majors_MajorsResponse__Output>): grpc.ClientUnaryCall;
  CreateMajor(argument: _majors_Majors, metadata: grpc.Metadata, callback: grpc.requestCallback<_majors_MajorsResponse__Output>): grpc.ClientUnaryCall;
  CreateMajor(argument: _majors_Majors, options: grpc.CallOptions, callback: grpc.requestCallback<_majors_MajorsResponse__Output>): grpc.ClientUnaryCall;
  CreateMajor(argument: _majors_Majors, callback: grpc.requestCallback<_majors_MajorsResponse__Output>): grpc.ClientUnaryCall;
  createMajor(argument: _majors_Majors, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_majors_MajorsResponse__Output>): grpc.ClientUnaryCall;
  createMajor(argument: _majors_Majors, metadata: grpc.Metadata, callback: grpc.requestCallback<_majors_MajorsResponse__Output>): grpc.ClientUnaryCall;
  createMajor(argument: _majors_Majors, options: grpc.CallOptions, callback: grpc.requestCallback<_majors_MajorsResponse__Output>): grpc.ClientUnaryCall;
  createMajor(argument: _majors_Majors, callback: grpc.requestCallback<_majors_MajorsResponse__Output>): grpc.ClientUnaryCall;
  
  CreateMemberSchool(argument: _member_school_MemberSchool, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_member_school_MemberSchoolResponse__Output>): grpc.ClientUnaryCall;
  CreateMemberSchool(argument: _member_school_MemberSchool, metadata: grpc.Metadata, callback: grpc.requestCallback<_member_school_MemberSchoolResponse__Output>): grpc.ClientUnaryCall;
  CreateMemberSchool(argument: _member_school_MemberSchool, options: grpc.CallOptions, callback: grpc.requestCallback<_member_school_MemberSchoolResponse__Output>): grpc.ClientUnaryCall;
  CreateMemberSchool(argument: _member_school_MemberSchool, callback: grpc.requestCallback<_member_school_MemberSchoolResponse__Output>): grpc.ClientUnaryCall;
  createMemberSchool(argument: _member_school_MemberSchool, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_member_school_MemberSchoolResponse__Output>): grpc.ClientUnaryCall;
  createMemberSchool(argument: _member_school_MemberSchool, metadata: grpc.Metadata, callback: grpc.requestCallback<_member_school_MemberSchoolResponse__Output>): grpc.ClientUnaryCall;
  createMemberSchool(argument: _member_school_MemberSchool, options: grpc.CallOptions, callback: grpc.requestCallback<_member_school_MemberSchoolResponse__Output>): grpc.ClientUnaryCall;
  createMemberSchool(argument: _member_school_MemberSchool, callback: grpc.requestCallback<_member_school_MemberSchoolResponse__Output>): grpc.ClientUnaryCall;
  
  CreateModule(argument: _module_Module, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_module_ModuleResponse__Output>): grpc.ClientUnaryCall;
  CreateModule(argument: _module_Module, metadata: grpc.Metadata, callback: grpc.requestCallback<_module_ModuleResponse__Output>): grpc.ClientUnaryCall;
  CreateModule(argument: _module_Module, options: grpc.CallOptions, callback: grpc.requestCallback<_module_ModuleResponse__Output>): grpc.ClientUnaryCall;
  CreateModule(argument: _module_Module, callback: grpc.requestCallback<_module_ModuleResponse__Output>): grpc.ClientUnaryCall;
  createModule(argument: _module_Module, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_module_ModuleResponse__Output>): grpc.ClientUnaryCall;
  createModule(argument: _module_Module, metadata: grpc.Metadata, callback: grpc.requestCallback<_module_ModuleResponse__Output>): grpc.ClientUnaryCall;
  createModule(argument: _module_Module, options: grpc.CallOptions, callback: grpc.requestCallback<_module_ModuleResponse__Output>): grpc.ClientUnaryCall;
  createModule(argument: _module_Module, callback: grpc.requestCallback<_module_ModuleResponse__Output>): grpc.ClientUnaryCall;
  
  CreateSubject(argument: _subject_Subject, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_subject_SubjectResponse__Output>): grpc.ClientUnaryCall;
  CreateSubject(argument: _subject_Subject, metadata: grpc.Metadata, callback: grpc.requestCallback<_subject_SubjectResponse__Output>): grpc.ClientUnaryCall;
  CreateSubject(argument: _subject_Subject, options: grpc.CallOptions, callback: grpc.requestCallback<_subject_SubjectResponse__Output>): grpc.ClientUnaryCall;
  CreateSubject(argument: _subject_Subject, callback: grpc.requestCallback<_subject_SubjectResponse__Output>): grpc.ClientUnaryCall;
  createSubject(argument: _subject_Subject, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_subject_SubjectResponse__Output>): grpc.ClientUnaryCall;
  createSubject(argument: _subject_Subject, metadata: grpc.Metadata, callback: grpc.requestCallback<_subject_SubjectResponse__Output>): grpc.ClientUnaryCall;
  createSubject(argument: _subject_Subject, options: grpc.CallOptions, callback: grpc.requestCallback<_subject_SubjectResponse__Output>): grpc.ClientUnaryCall;
  createSubject(argument: _subject_Subject, callback: grpc.requestCallback<_subject_SubjectResponse__Output>): grpc.ClientUnaryCall;
  
  CreateSubjectBlock(argument: _subject_block_SubjectBlock, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_subject_block_SubjectBlockResponse__Output>): grpc.ClientUnaryCall;
  CreateSubjectBlock(argument: _subject_block_SubjectBlock, metadata: grpc.Metadata, callback: grpc.requestCallback<_subject_block_SubjectBlockResponse__Output>): grpc.ClientUnaryCall;
  CreateSubjectBlock(argument: _subject_block_SubjectBlock, options: grpc.CallOptions, callback: grpc.requestCallback<_subject_block_SubjectBlockResponse__Output>): grpc.ClientUnaryCall;
  CreateSubjectBlock(argument: _subject_block_SubjectBlock, callback: grpc.requestCallback<_subject_block_SubjectBlockResponse__Output>): grpc.ClientUnaryCall;
  createSubjectBlock(argument: _subject_block_SubjectBlock, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_subject_block_SubjectBlockResponse__Output>): grpc.ClientUnaryCall;
  createSubjectBlock(argument: _subject_block_SubjectBlock, metadata: grpc.Metadata, callback: grpc.requestCallback<_subject_block_SubjectBlockResponse__Output>): grpc.ClientUnaryCall;
  createSubjectBlock(argument: _subject_block_SubjectBlock, options: grpc.CallOptions, callback: grpc.requestCallback<_subject_block_SubjectBlockResponse__Output>): grpc.ClientUnaryCall;
  createSubjectBlock(argument: _subject_block_SubjectBlock, callback: grpc.requestCallback<_subject_block_SubjectBlockResponse__Output>): grpc.ClientUnaryCall;
  
  Default(argument: _core_GreetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_GreetResponse__Output>): grpc.ClientUnaryCall;
  Default(argument: _core_GreetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_GreetResponse__Output>): grpc.ClientUnaryCall;
  Default(argument: _core_GreetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_core_GreetResponse__Output>): grpc.ClientUnaryCall;
  Default(argument: _core_GreetRequest, callback: grpc.requestCallback<_core_GreetResponse__Output>): grpc.ClientUnaryCall;
  default(argument: _core_GreetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_GreetResponse__Output>): grpc.ClientUnaryCall;
  default(argument: _core_GreetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_GreetResponse__Output>): grpc.ClientUnaryCall;
  default(argument: _core_GreetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_core_GreetResponse__Output>): grpc.ClientUnaryCall;
  default(argument: _core_GreetRequest, callback: grpc.requestCallback<_core_GreetResponse__Output>): grpc.ClientUnaryCall;
  
  DeleteMajor(argument: _core_Target, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  DeleteMajor(argument: _core_Target, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  DeleteMajor(argument: _core_Target, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  DeleteMajor(argument: _core_Target, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  deleteMajor(argument: _core_Target, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  deleteMajor(argument: _core_Target, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  deleteMajor(argument: _core_Target, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  deleteMajor(argument: _core_Target, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  
  DeleteMemberSchool(argument: _core_Target, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  DeleteMemberSchool(argument: _core_Target, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  DeleteMemberSchool(argument: _core_Target, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  DeleteMemberSchool(argument: _core_Target, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  deleteMemberSchool(argument: _core_Target, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  deleteMemberSchool(argument: _core_Target, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  deleteMemberSchool(argument: _core_Target, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  deleteMemberSchool(argument: _core_Target, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  
  DeleteModule(argument: _core_Target, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  DeleteModule(argument: _core_Target, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  DeleteModule(argument: _core_Target, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  DeleteModule(argument: _core_Target, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  deleteModule(argument: _core_Target, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  deleteModule(argument: _core_Target, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  deleteModule(argument: _core_Target, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  deleteModule(argument: _core_Target, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  
  DeleteSubject(argument: _core_Target, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  DeleteSubject(argument: _core_Target, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  DeleteSubject(argument: _core_Target, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  DeleteSubject(argument: _core_Target, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  deleteSubject(argument: _core_Target, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  deleteSubject(argument: _core_Target, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  deleteSubject(argument: _core_Target, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  deleteSubject(argument: _core_Target, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  
  DeleteSubjectBlock(argument: _core_Target, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  DeleteSubjectBlock(argument: _core_Target, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  DeleteSubjectBlock(argument: _core_Target, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  DeleteSubjectBlock(argument: _core_Target, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  deleteSubjectBlock(argument: _core_Target, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  deleteSubjectBlock(argument: _core_Target, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  deleteSubjectBlock(argument: _core_Target, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  deleteSubjectBlock(argument: _core_Target, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  
  GetAllMajors(argument: _core_RequestEmpty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_majors_MajorssResponse__Output>): grpc.ClientUnaryCall;
  GetAllMajors(argument: _core_RequestEmpty, metadata: grpc.Metadata, callback: grpc.requestCallback<_majors_MajorssResponse__Output>): grpc.ClientUnaryCall;
  GetAllMajors(argument: _core_RequestEmpty, options: grpc.CallOptions, callback: grpc.requestCallback<_majors_MajorssResponse__Output>): grpc.ClientUnaryCall;
  GetAllMajors(argument: _core_RequestEmpty, callback: grpc.requestCallback<_majors_MajorssResponse__Output>): grpc.ClientUnaryCall;
  getAllMajors(argument: _core_RequestEmpty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_majors_MajorssResponse__Output>): grpc.ClientUnaryCall;
  getAllMajors(argument: _core_RequestEmpty, metadata: grpc.Metadata, callback: grpc.requestCallback<_majors_MajorssResponse__Output>): grpc.ClientUnaryCall;
  getAllMajors(argument: _core_RequestEmpty, options: grpc.CallOptions, callback: grpc.requestCallback<_majors_MajorssResponse__Output>): grpc.ClientUnaryCall;
  getAllMajors(argument: _core_RequestEmpty, callback: grpc.requestCallback<_majors_MajorssResponse__Output>): grpc.ClientUnaryCall;
  
  GetAllMemberSchool(argument: _core_RequestEmpty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_member_school_MemberSchoolsResponse__Output>): grpc.ClientUnaryCall;
  GetAllMemberSchool(argument: _core_RequestEmpty, metadata: grpc.Metadata, callback: grpc.requestCallback<_member_school_MemberSchoolsResponse__Output>): grpc.ClientUnaryCall;
  GetAllMemberSchool(argument: _core_RequestEmpty, options: grpc.CallOptions, callback: grpc.requestCallback<_member_school_MemberSchoolsResponse__Output>): grpc.ClientUnaryCall;
  GetAllMemberSchool(argument: _core_RequestEmpty, callback: grpc.requestCallback<_member_school_MemberSchoolsResponse__Output>): grpc.ClientUnaryCall;
  getAllMemberSchool(argument: _core_RequestEmpty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_member_school_MemberSchoolsResponse__Output>): grpc.ClientUnaryCall;
  getAllMemberSchool(argument: _core_RequestEmpty, metadata: grpc.Metadata, callback: grpc.requestCallback<_member_school_MemberSchoolsResponse__Output>): grpc.ClientUnaryCall;
  getAllMemberSchool(argument: _core_RequestEmpty, options: grpc.CallOptions, callback: grpc.requestCallback<_member_school_MemberSchoolsResponse__Output>): grpc.ClientUnaryCall;
  getAllMemberSchool(argument: _core_RequestEmpty, callback: grpc.requestCallback<_member_school_MemberSchoolsResponse__Output>): grpc.ClientUnaryCall;
  
  GetAllModule(argument: _core_RequestEmpty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_module_ModulesResponse__Output>): grpc.ClientUnaryCall;
  GetAllModule(argument: _core_RequestEmpty, metadata: grpc.Metadata, callback: grpc.requestCallback<_module_ModulesResponse__Output>): grpc.ClientUnaryCall;
  GetAllModule(argument: _core_RequestEmpty, options: grpc.CallOptions, callback: grpc.requestCallback<_module_ModulesResponse__Output>): grpc.ClientUnaryCall;
  GetAllModule(argument: _core_RequestEmpty, callback: grpc.requestCallback<_module_ModulesResponse__Output>): grpc.ClientUnaryCall;
  getAllModule(argument: _core_RequestEmpty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_module_ModulesResponse__Output>): grpc.ClientUnaryCall;
  getAllModule(argument: _core_RequestEmpty, metadata: grpc.Metadata, callback: grpc.requestCallback<_module_ModulesResponse__Output>): grpc.ClientUnaryCall;
  getAllModule(argument: _core_RequestEmpty, options: grpc.CallOptions, callback: grpc.requestCallback<_module_ModulesResponse__Output>): grpc.ClientUnaryCall;
  getAllModule(argument: _core_RequestEmpty, callback: grpc.requestCallback<_module_ModulesResponse__Output>): grpc.ClientUnaryCall;
  
  GetAllSubject(argument: _core_RequestEmpty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_subject_SubjectsResponse__Output>): grpc.ClientUnaryCall;
  GetAllSubject(argument: _core_RequestEmpty, metadata: grpc.Metadata, callback: grpc.requestCallback<_subject_SubjectsResponse__Output>): grpc.ClientUnaryCall;
  GetAllSubject(argument: _core_RequestEmpty, options: grpc.CallOptions, callback: grpc.requestCallback<_subject_SubjectsResponse__Output>): grpc.ClientUnaryCall;
  GetAllSubject(argument: _core_RequestEmpty, callback: grpc.requestCallback<_subject_SubjectsResponse__Output>): grpc.ClientUnaryCall;
  getAllSubject(argument: _core_RequestEmpty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_subject_SubjectsResponse__Output>): grpc.ClientUnaryCall;
  getAllSubject(argument: _core_RequestEmpty, metadata: grpc.Metadata, callback: grpc.requestCallback<_subject_SubjectsResponse__Output>): grpc.ClientUnaryCall;
  getAllSubject(argument: _core_RequestEmpty, options: grpc.CallOptions, callback: grpc.requestCallback<_subject_SubjectsResponse__Output>): grpc.ClientUnaryCall;
  getAllSubject(argument: _core_RequestEmpty, callback: grpc.requestCallback<_subject_SubjectsResponse__Output>): grpc.ClientUnaryCall;
  
  GetAllSubjectBlock(argument: _core_RequestEmpty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_subject_block_SubjectBlocksResponse__Output>): grpc.ClientUnaryCall;
  GetAllSubjectBlock(argument: _core_RequestEmpty, metadata: grpc.Metadata, callback: grpc.requestCallback<_subject_block_SubjectBlocksResponse__Output>): grpc.ClientUnaryCall;
  GetAllSubjectBlock(argument: _core_RequestEmpty, options: grpc.CallOptions, callback: grpc.requestCallback<_subject_block_SubjectBlocksResponse__Output>): grpc.ClientUnaryCall;
  GetAllSubjectBlock(argument: _core_RequestEmpty, callback: grpc.requestCallback<_subject_block_SubjectBlocksResponse__Output>): grpc.ClientUnaryCall;
  getAllSubjectBlock(argument: _core_RequestEmpty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_subject_block_SubjectBlocksResponse__Output>): grpc.ClientUnaryCall;
  getAllSubjectBlock(argument: _core_RequestEmpty, metadata: grpc.Metadata, callback: grpc.requestCallback<_subject_block_SubjectBlocksResponse__Output>): grpc.ClientUnaryCall;
  getAllSubjectBlock(argument: _core_RequestEmpty, options: grpc.CallOptions, callback: grpc.requestCallback<_subject_block_SubjectBlocksResponse__Output>): grpc.ClientUnaryCall;
  getAllSubjectBlock(argument: _core_RequestEmpty, callback: grpc.requestCallback<_subject_block_SubjectBlocksResponse__Output>): grpc.ClientUnaryCall;
  
  ImportSubject(argument: _core_Strings, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  ImportSubject(argument: _core_Strings, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  ImportSubject(argument: _core_Strings, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  ImportSubject(argument: _core_Strings, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  importSubject(argument: _core_Strings, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  importSubject(argument: _core_Strings, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  importSubject(argument: _core_Strings, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  importSubject(argument: _core_Strings, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  
  ImportSubjectBlock(argument: _core_Strings, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  ImportSubjectBlock(argument: _core_Strings, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  ImportSubjectBlock(argument: _core_Strings, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  ImportSubjectBlock(argument: _core_Strings, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  importSubjectBlock(argument: _core_Strings, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  importSubjectBlock(argument: _core_Strings, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  importSubjectBlock(argument: _core_Strings, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  importSubjectBlock(argument: _core_Strings, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  
  UpdateMajor(argument: _majors_UpdateMajors, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_majors_MajorsResponse__Output>): grpc.ClientUnaryCall;
  UpdateMajor(argument: _majors_UpdateMajors, metadata: grpc.Metadata, callback: grpc.requestCallback<_majors_MajorsResponse__Output>): grpc.ClientUnaryCall;
  UpdateMajor(argument: _majors_UpdateMajors, options: grpc.CallOptions, callback: grpc.requestCallback<_majors_MajorsResponse__Output>): grpc.ClientUnaryCall;
  UpdateMajor(argument: _majors_UpdateMajors, callback: grpc.requestCallback<_majors_MajorsResponse__Output>): grpc.ClientUnaryCall;
  updateMajor(argument: _majors_UpdateMajors, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_majors_MajorsResponse__Output>): grpc.ClientUnaryCall;
  updateMajor(argument: _majors_UpdateMajors, metadata: grpc.Metadata, callback: grpc.requestCallback<_majors_MajorsResponse__Output>): grpc.ClientUnaryCall;
  updateMajor(argument: _majors_UpdateMajors, options: grpc.CallOptions, callback: grpc.requestCallback<_majors_MajorsResponse__Output>): grpc.ClientUnaryCall;
  updateMajor(argument: _majors_UpdateMajors, callback: grpc.requestCallback<_majors_MajorsResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateMemberSchool(argument: _member_school_UpdateMemberSchool, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_member_school_MemberSchoolResponse__Output>): grpc.ClientUnaryCall;
  UpdateMemberSchool(argument: _member_school_UpdateMemberSchool, metadata: grpc.Metadata, callback: grpc.requestCallback<_member_school_MemberSchoolResponse__Output>): grpc.ClientUnaryCall;
  UpdateMemberSchool(argument: _member_school_UpdateMemberSchool, options: grpc.CallOptions, callback: grpc.requestCallback<_member_school_MemberSchoolResponse__Output>): grpc.ClientUnaryCall;
  UpdateMemberSchool(argument: _member_school_UpdateMemberSchool, callback: grpc.requestCallback<_member_school_MemberSchoolResponse__Output>): grpc.ClientUnaryCall;
  updateMemberSchool(argument: _member_school_UpdateMemberSchool, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_member_school_MemberSchoolResponse__Output>): grpc.ClientUnaryCall;
  updateMemberSchool(argument: _member_school_UpdateMemberSchool, metadata: grpc.Metadata, callback: grpc.requestCallback<_member_school_MemberSchoolResponse__Output>): grpc.ClientUnaryCall;
  updateMemberSchool(argument: _member_school_UpdateMemberSchool, options: grpc.CallOptions, callback: grpc.requestCallback<_member_school_MemberSchoolResponse__Output>): grpc.ClientUnaryCall;
  updateMemberSchool(argument: _member_school_UpdateMemberSchool, callback: grpc.requestCallback<_member_school_MemberSchoolResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateModule(argument: _module_UpdateModule, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_module_ModuleResponse__Output>): grpc.ClientUnaryCall;
  UpdateModule(argument: _module_UpdateModule, metadata: grpc.Metadata, callback: grpc.requestCallback<_module_ModuleResponse__Output>): grpc.ClientUnaryCall;
  UpdateModule(argument: _module_UpdateModule, options: grpc.CallOptions, callback: grpc.requestCallback<_module_ModuleResponse__Output>): grpc.ClientUnaryCall;
  UpdateModule(argument: _module_UpdateModule, callback: grpc.requestCallback<_module_ModuleResponse__Output>): grpc.ClientUnaryCall;
  updateModule(argument: _module_UpdateModule, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_module_ModuleResponse__Output>): grpc.ClientUnaryCall;
  updateModule(argument: _module_UpdateModule, metadata: grpc.Metadata, callback: grpc.requestCallback<_module_ModuleResponse__Output>): grpc.ClientUnaryCall;
  updateModule(argument: _module_UpdateModule, options: grpc.CallOptions, callback: grpc.requestCallback<_module_ModuleResponse__Output>): grpc.ClientUnaryCall;
  updateModule(argument: _module_UpdateModule, callback: grpc.requestCallback<_module_ModuleResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateSubject(argument: _subject_UpdateSubject, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_subject_SubjectResponse__Output>): grpc.ClientUnaryCall;
  UpdateSubject(argument: _subject_UpdateSubject, metadata: grpc.Metadata, callback: grpc.requestCallback<_subject_SubjectResponse__Output>): grpc.ClientUnaryCall;
  UpdateSubject(argument: _subject_UpdateSubject, options: grpc.CallOptions, callback: grpc.requestCallback<_subject_SubjectResponse__Output>): grpc.ClientUnaryCall;
  UpdateSubject(argument: _subject_UpdateSubject, callback: grpc.requestCallback<_subject_SubjectResponse__Output>): grpc.ClientUnaryCall;
  updateSubject(argument: _subject_UpdateSubject, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_subject_SubjectResponse__Output>): grpc.ClientUnaryCall;
  updateSubject(argument: _subject_UpdateSubject, metadata: grpc.Metadata, callback: grpc.requestCallback<_subject_SubjectResponse__Output>): grpc.ClientUnaryCall;
  updateSubject(argument: _subject_UpdateSubject, options: grpc.CallOptions, callback: grpc.requestCallback<_subject_SubjectResponse__Output>): grpc.ClientUnaryCall;
  updateSubject(argument: _subject_UpdateSubject, callback: grpc.requestCallback<_subject_SubjectResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateSubjectBlock(argument: _subject_block_UpdateSubjectBlock, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_subject_block_SubjectBlockResponse__Output>): grpc.ClientUnaryCall;
  UpdateSubjectBlock(argument: _subject_block_UpdateSubjectBlock, metadata: grpc.Metadata, callback: grpc.requestCallback<_subject_block_SubjectBlockResponse__Output>): grpc.ClientUnaryCall;
  UpdateSubjectBlock(argument: _subject_block_UpdateSubjectBlock, options: grpc.CallOptions, callback: grpc.requestCallback<_subject_block_SubjectBlockResponse__Output>): grpc.ClientUnaryCall;
  UpdateSubjectBlock(argument: _subject_block_UpdateSubjectBlock, callback: grpc.requestCallback<_subject_block_SubjectBlockResponse__Output>): grpc.ClientUnaryCall;
  updateSubjectBlock(argument: _subject_block_UpdateSubjectBlock, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_subject_block_SubjectBlockResponse__Output>): grpc.ClientUnaryCall;
  updateSubjectBlock(argument: _subject_block_UpdateSubjectBlock, metadata: grpc.Metadata, callback: grpc.requestCallback<_subject_block_SubjectBlockResponse__Output>): grpc.ClientUnaryCall;
  updateSubjectBlock(argument: _subject_block_UpdateSubjectBlock, options: grpc.CallOptions, callback: grpc.requestCallback<_subject_block_SubjectBlockResponse__Output>): grpc.ClientUnaryCall;
  updateSubjectBlock(argument: _subject_block_UpdateSubjectBlock, callback: grpc.requestCallback<_subject_block_SubjectBlockResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface CoreHandlers extends grpc.UntypedServiceImplementation {
  CreateMajor: grpc.handleUnaryCall<_majors_Majors__Output, _majors_MajorsResponse>;
  
  CreateMemberSchool: grpc.handleUnaryCall<_member_school_MemberSchool__Output, _member_school_MemberSchoolResponse>;
  
  CreateModule: grpc.handleUnaryCall<_module_Module__Output, _module_ModuleResponse>;
  
  CreateSubject: grpc.handleUnaryCall<_subject_Subject__Output, _subject_SubjectResponse>;
  
  CreateSubjectBlock: grpc.handleUnaryCall<_subject_block_SubjectBlock__Output, _subject_block_SubjectBlockResponse>;
  
  Default: grpc.handleUnaryCall<_core_GreetRequest__Output, _core_GreetResponse>;
  
  DeleteMajor: grpc.handleUnaryCall<_core_Target__Output, _core_Message>;
  
  DeleteMemberSchool: grpc.handleUnaryCall<_core_Target__Output, _core_Message>;
  
  DeleteModule: grpc.handleUnaryCall<_core_Target__Output, _core_Message>;
  
  DeleteSubject: grpc.handleUnaryCall<_core_Target__Output, _core_Message>;
  
  DeleteSubjectBlock: grpc.handleUnaryCall<_core_Target__Output, _core_Message>;
  
  GetAllMajors: grpc.handleUnaryCall<_core_RequestEmpty__Output, _majors_MajorssResponse>;
  
  GetAllMemberSchool: grpc.handleUnaryCall<_core_RequestEmpty__Output, _member_school_MemberSchoolsResponse>;
  
  GetAllModule: grpc.handleUnaryCall<_core_RequestEmpty__Output, _module_ModulesResponse>;
  
  GetAllSubject: grpc.handleUnaryCall<_core_RequestEmpty__Output, _subject_SubjectsResponse>;
  
  GetAllSubjectBlock: grpc.handleUnaryCall<_core_RequestEmpty__Output, _subject_block_SubjectBlocksResponse>;
  
  ImportSubject: grpc.handleUnaryCall<_core_Strings__Output, _core_Message>;
  
  ImportSubjectBlock: grpc.handleUnaryCall<_core_Strings__Output, _core_Message>;
  
  UpdateMajor: grpc.handleUnaryCall<_majors_UpdateMajors__Output, _majors_MajorsResponse>;
  
  UpdateMemberSchool: grpc.handleUnaryCall<_member_school_UpdateMemberSchool__Output, _member_school_MemberSchoolResponse>;
  
  UpdateModule: grpc.handleUnaryCall<_module_UpdateModule__Output, _module_ModuleResponse>;
  
  UpdateSubject: grpc.handleUnaryCall<_subject_UpdateSubject__Output, _subject_SubjectResponse>;
  
  UpdateSubjectBlock: grpc.handleUnaryCall<_subject_block_UpdateSubjectBlock__Output, _subject_block_SubjectBlockResponse>;
  
}

export interface CoreDefinition extends grpc.ServiceDefinition {
  CreateMajor: MethodDefinition<_majors_Majors, _majors_MajorsResponse, _majors_Majors__Output, _majors_MajorsResponse__Output>
  CreateMemberSchool: MethodDefinition<_member_school_MemberSchool, _member_school_MemberSchoolResponse, _member_school_MemberSchool__Output, _member_school_MemberSchoolResponse__Output>
  CreateModule: MethodDefinition<_module_Module, _module_ModuleResponse, _module_Module__Output, _module_ModuleResponse__Output>
  CreateSubject: MethodDefinition<_subject_Subject, _subject_SubjectResponse, _subject_Subject__Output, _subject_SubjectResponse__Output>
  CreateSubjectBlock: MethodDefinition<_subject_block_SubjectBlock, _subject_block_SubjectBlockResponse, _subject_block_SubjectBlock__Output, _subject_block_SubjectBlockResponse__Output>
  Default: MethodDefinition<_core_GreetRequest, _core_GreetResponse, _core_GreetRequest__Output, _core_GreetResponse__Output>
  DeleteMajor: MethodDefinition<_core_Target, _core_Message, _core_Target__Output, _core_Message__Output>
  DeleteMemberSchool: MethodDefinition<_core_Target, _core_Message, _core_Target__Output, _core_Message__Output>
  DeleteModule: MethodDefinition<_core_Target, _core_Message, _core_Target__Output, _core_Message__Output>
  DeleteSubject: MethodDefinition<_core_Target, _core_Message, _core_Target__Output, _core_Message__Output>
  DeleteSubjectBlock: MethodDefinition<_core_Target, _core_Message, _core_Target__Output, _core_Message__Output>
  GetAllMajors: MethodDefinition<_core_RequestEmpty, _majors_MajorssResponse, _core_RequestEmpty__Output, _majors_MajorssResponse__Output>
  GetAllMemberSchool: MethodDefinition<_core_RequestEmpty, _member_school_MemberSchoolsResponse, _core_RequestEmpty__Output, _member_school_MemberSchoolsResponse__Output>
  GetAllModule: MethodDefinition<_core_RequestEmpty, _module_ModulesResponse, _core_RequestEmpty__Output, _module_ModulesResponse__Output>
  GetAllSubject: MethodDefinition<_core_RequestEmpty, _subject_SubjectsResponse, _core_RequestEmpty__Output, _subject_SubjectsResponse__Output>
  GetAllSubjectBlock: MethodDefinition<_core_RequestEmpty, _subject_block_SubjectBlocksResponse, _core_RequestEmpty__Output, _subject_block_SubjectBlocksResponse__Output>
  ImportSubject: MethodDefinition<_core_Strings, _core_Message, _core_Strings__Output, _core_Message__Output>
  ImportSubjectBlock: MethodDefinition<_core_Strings, _core_Message, _core_Strings__Output, _core_Message__Output>
  UpdateMajor: MethodDefinition<_majors_UpdateMajors, _majors_MajorsResponse, _majors_UpdateMajors__Output, _majors_MajorsResponse__Output>
  UpdateMemberSchool: MethodDefinition<_member_school_UpdateMemberSchool, _member_school_MemberSchoolResponse, _member_school_UpdateMemberSchool__Output, _member_school_MemberSchoolResponse__Output>
  UpdateModule: MethodDefinition<_module_UpdateModule, _module_ModuleResponse, _module_UpdateModule__Output, _module_ModuleResponse__Output>
  UpdateSubject: MethodDefinition<_subject_UpdateSubject, _subject_SubjectResponse, _subject_UpdateSubject__Output, _subject_SubjectResponse__Output>
  UpdateSubjectBlock: MethodDefinition<_subject_block_UpdateSubjectBlock, _subject_block_SubjectBlockResponse, _subject_block_UpdateSubjectBlock__Output, _subject_block_SubjectBlockResponse__Output>
}
