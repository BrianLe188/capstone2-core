// Original file: core/core.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { File as _file_File, File__Output as _file_File__Output } from '../file/File';
import type { FileResponse as _file_FileResponse, FileResponse__Output as _file_FileResponse__Output } from '../file/FileResponse';
import type { FilesResponse as _file_FilesResponse, FilesResponse__Output as _file_FilesResponse__Output } from '../file/FilesResponse';
import type { GreetRequest as _core_GreetRequest, GreetRequest__Output as _core_GreetRequest__Output } from '../core/GreetRequest';
import type { GreetResponse as _core_GreetResponse, GreetResponse__Output as _core_GreetResponse__Output } from '../core/GreetResponse';
import type { MajorCodeAndSubjectBlockCodes as _majors_MajorCodeAndSubjectBlockCodes, MajorCodeAndSubjectBlockCodes__Output as _majors_MajorCodeAndSubjectBlockCodes__Output } from '../majors/MajorCodeAndSubjectBlockCodes';
import type { Majors as _majors_Majors, Majors__Output as _majors_Majors__Output } from '../majors/Majors';
import type { MajorsResponse as _majors_MajorsResponse, MajorsResponse__Output as _majors_MajorsResponse__Output } from '../majors/MajorsResponse';
import type { Majorss as _majors_Majorss, Majorss__Output as _majors_Majorss__Output } from '../majors/Majorss';
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
import type { SubMajors as _sub_major_SubMajors, SubMajors__Output as _sub_major_SubMajors__Output } from '../sub_major/SubMajors';
import type { SubMajorsResponse as _sub_major_SubMajorsResponse, SubMajorsResponse__Output as _sub_major_SubMajorsResponse__Output } from '../sub_major/SubMajorsResponse';
import type { SubMajorss as _sub_major_SubMajorss, SubMajorss__Output as _sub_major_SubMajorss__Output } from '../sub_major/SubMajorss';
import type { SubMajorssResponse as _sub_major_SubMajorssResponse, SubMajorssResponse__Output as _sub_major_SubMajorssResponse__Output } from '../sub_major/SubMajorssResponse';
import type { Subject as _subject_Subject, Subject__Output as _subject_Subject__Output } from '../subject/Subject';
import type { SubjectBlock as _subject_block_SubjectBlock, SubjectBlock__Output as _subject_block_SubjectBlock__Output } from '../subject_block/SubjectBlock';
import type { SubjectBlockResponse as _subject_block_SubjectBlockResponse, SubjectBlockResponse__Output as _subject_block_SubjectBlockResponse__Output } from '../subject_block/SubjectBlockResponse';
import type { SubjectBlocksResponse as _subject_block_SubjectBlocksResponse, SubjectBlocksResponse__Output as _subject_block_SubjectBlocksResponse__Output } from '../subject_block/SubjectBlocksResponse';
import type { SubjectResponse as _subject_SubjectResponse, SubjectResponse__Output as _subject_SubjectResponse__Output } from '../subject/SubjectResponse';
import type { SubjectsResponse as _subject_SubjectsResponse, SubjectsResponse__Output as _subject_SubjectsResponse__Output } from '../subject/SubjectsResponse';
import type { Target as _core_Target, Target__Output as _core_Target__Output } from '../core/Target';
import type { UpdateFile as _file_UpdateFile, UpdateFile__Output as _file_UpdateFile__Output } from '../file/UpdateFile';
import type { UpdateMajors as _majors_UpdateMajors, UpdateMajors__Output as _majors_UpdateMajors__Output } from '../majors/UpdateMajors';
import type { UpdateMemberSchool as _member_school_UpdateMemberSchool, UpdateMemberSchool__Output as _member_school_UpdateMemberSchool__Output } from '../member_school/UpdateMemberSchool';
import type { UpdateModule as _module_UpdateModule, UpdateModule__Output as _module_UpdateModule__Output } from '../module/UpdateModule';
import type { UpdateSubMajors as _sub_major_UpdateSubMajors, UpdateSubMajors__Output as _sub_major_UpdateSubMajors__Output } from '../sub_major/UpdateSubMajors';
import type { UpdateSubject as _subject_UpdateSubject, UpdateSubject__Output as _subject_UpdateSubject__Output } from '../subject/UpdateSubject';
import type { UpdateSubjectBlock as _subject_block_UpdateSubjectBlock, UpdateSubjectBlock__Output as _subject_block_UpdateSubjectBlock__Output } from '../subject_block/UpdateSubjectBlock';

export interface CoreClient extends grpc.Client {
  CreateFile(argument: _file_File, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_file_FileResponse__Output>): grpc.ClientUnaryCall;
  CreateFile(argument: _file_File, metadata: grpc.Metadata, callback: grpc.requestCallback<_file_FileResponse__Output>): grpc.ClientUnaryCall;
  CreateFile(argument: _file_File, options: grpc.CallOptions, callback: grpc.requestCallback<_file_FileResponse__Output>): grpc.ClientUnaryCall;
  CreateFile(argument: _file_File, callback: grpc.requestCallback<_file_FileResponse__Output>): grpc.ClientUnaryCall;
  createFile(argument: _file_File, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_file_FileResponse__Output>): grpc.ClientUnaryCall;
  createFile(argument: _file_File, metadata: grpc.Metadata, callback: grpc.requestCallback<_file_FileResponse__Output>): grpc.ClientUnaryCall;
  createFile(argument: _file_File, options: grpc.CallOptions, callback: grpc.requestCallback<_file_FileResponse__Output>): grpc.ClientUnaryCall;
  createFile(argument: _file_File, callback: grpc.requestCallback<_file_FileResponse__Output>): grpc.ClientUnaryCall;
  
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
  
  CreateSubMajor(argument: _sub_major_SubMajors, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_sub_major_SubMajorsResponse__Output>): grpc.ClientUnaryCall;
  CreateSubMajor(argument: _sub_major_SubMajors, metadata: grpc.Metadata, callback: grpc.requestCallback<_sub_major_SubMajorsResponse__Output>): grpc.ClientUnaryCall;
  CreateSubMajor(argument: _sub_major_SubMajors, options: grpc.CallOptions, callback: grpc.requestCallback<_sub_major_SubMajorsResponse__Output>): grpc.ClientUnaryCall;
  CreateSubMajor(argument: _sub_major_SubMajors, callback: grpc.requestCallback<_sub_major_SubMajorsResponse__Output>): grpc.ClientUnaryCall;
  createSubMajor(argument: _sub_major_SubMajors, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_sub_major_SubMajorsResponse__Output>): grpc.ClientUnaryCall;
  createSubMajor(argument: _sub_major_SubMajors, metadata: grpc.Metadata, callback: grpc.requestCallback<_sub_major_SubMajorsResponse__Output>): grpc.ClientUnaryCall;
  createSubMajor(argument: _sub_major_SubMajors, options: grpc.CallOptions, callback: grpc.requestCallback<_sub_major_SubMajorsResponse__Output>): grpc.ClientUnaryCall;
  createSubMajor(argument: _sub_major_SubMajors, callback: grpc.requestCallback<_sub_major_SubMajorsResponse__Output>): grpc.ClientUnaryCall;
  
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
  
  DeleteFile(argument: _core_Target, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  DeleteFile(argument: _core_Target, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  DeleteFile(argument: _core_Target, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  DeleteFile(argument: _core_Target, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  deleteFile(argument: _core_Target, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  deleteFile(argument: _core_Target, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  deleteFile(argument: _core_Target, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  deleteFile(argument: _core_Target, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  
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
  
  DeleteSubMajor(argument: _core_Target, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  DeleteSubMajor(argument: _core_Target, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  DeleteSubMajor(argument: _core_Target, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  DeleteSubMajor(argument: _core_Target, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  deleteSubMajor(argument: _core_Target, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  deleteSubMajor(argument: _core_Target, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  deleteSubMajor(argument: _core_Target, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  deleteSubMajor(argument: _core_Target, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  
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
  
  GetAllFiles(argument: _core_RequestEmpty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_file_FilesResponse__Output>): grpc.ClientUnaryCall;
  GetAllFiles(argument: _core_RequestEmpty, metadata: grpc.Metadata, callback: grpc.requestCallback<_file_FilesResponse__Output>): grpc.ClientUnaryCall;
  GetAllFiles(argument: _core_RequestEmpty, options: grpc.CallOptions, callback: grpc.requestCallback<_file_FilesResponse__Output>): grpc.ClientUnaryCall;
  GetAllFiles(argument: _core_RequestEmpty, callback: grpc.requestCallback<_file_FilesResponse__Output>): grpc.ClientUnaryCall;
  getAllFiles(argument: _core_RequestEmpty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_file_FilesResponse__Output>): grpc.ClientUnaryCall;
  getAllFiles(argument: _core_RequestEmpty, metadata: grpc.Metadata, callback: grpc.requestCallback<_file_FilesResponse__Output>): grpc.ClientUnaryCall;
  getAllFiles(argument: _core_RequestEmpty, options: grpc.CallOptions, callback: grpc.requestCallback<_file_FilesResponse__Output>): grpc.ClientUnaryCall;
  getAllFiles(argument: _core_RequestEmpty, callback: grpc.requestCallback<_file_FilesResponse__Output>): grpc.ClientUnaryCall;
  
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
  
  GetAllSubMajors(argument: _core_RequestEmpty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_sub_major_SubMajorssResponse__Output>): grpc.ClientUnaryCall;
  GetAllSubMajors(argument: _core_RequestEmpty, metadata: grpc.Metadata, callback: grpc.requestCallback<_sub_major_SubMajorssResponse__Output>): grpc.ClientUnaryCall;
  GetAllSubMajors(argument: _core_RequestEmpty, options: grpc.CallOptions, callback: grpc.requestCallback<_sub_major_SubMajorssResponse__Output>): grpc.ClientUnaryCall;
  GetAllSubMajors(argument: _core_RequestEmpty, callback: grpc.requestCallback<_sub_major_SubMajorssResponse__Output>): grpc.ClientUnaryCall;
  getAllSubMajors(argument: _core_RequestEmpty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_sub_major_SubMajorssResponse__Output>): grpc.ClientUnaryCall;
  getAllSubMajors(argument: _core_RequestEmpty, metadata: grpc.Metadata, callback: grpc.requestCallback<_sub_major_SubMajorssResponse__Output>): grpc.ClientUnaryCall;
  getAllSubMajors(argument: _core_RequestEmpty, options: grpc.CallOptions, callback: grpc.requestCallback<_sub_major_SubMajorssResponse__Output>): grpc.ClientUnaryCall;
  getAllSubMajors(argument: _core_RequestEmpty, callback: grpc.requestCallback<_sub_major_SubMajorssResponse__Output>): grpc.ClientUnaryCall;
  
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
  
  ImportMajor(argument: _majors_Majorss, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  ImportMajor(argument: _majors_Majorss, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  ImportMajor(argument: _majors_Majorss, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  ImportMajor(argument: _majors_Majorss, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  importMajor(argument: _majors_Majorss, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  importMajor(argument: _majors_Majorss, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  importMajor(argument: _majors_Majorss, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  importMajor(argument: _majors_Majorss, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  
  ImportSubMajor(argument: _sub_major_SubMajorss, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  ImportSubMajor(argument: _sub_major_SubMajorss, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  ImportSubMajor(argument: _sub_major_SubMajorss, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  ImportSubMajor(argument: _sub_major_SubMajorss, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  importSubMajor(argument: _sub_major_SubMajorss, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  importSubMajor(argument: _sub_major_SubMajorss, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  importSubMajor(argument: _sub_major_SubMajorss, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  importSubMajor(argument: _sub_major_SubMajorss, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  
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
  
  ImportSubjectBlockIntoMajor(argument: _majors_MajorCodeAndSubjectBlockCodes, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  ImportSubjectBlockIntoMajor(argument: _majors_MajorCodeAndSubjectBlockCodes, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  ImportSubjectBlockIntoMajor(argument: _majors_MajorCodeAndSubjectBlockCodes, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  ImportSubjectBlockIntoMajor(argument: _majors_MajorCodeAndSubjectBlockCodes, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  importSubjectBlockIntoMajor(argument: _majors_MajorCodeAndSubjectBlockCodes, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  importSubjectBlockIntoMajor(argument: _majors_MajorCodeAndSubjectBlockCodes, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  importSubjectBlockIntoMajor(argument: _majors_MajorCodeAndSubjectBlockCodes, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  importSubjectBlockIntoMajor(argument: _majors_MajorCodeAndSubjectBlockCodes, callback: grpc.requestCallback<_core_Message__Output>): grpc.ClientUnaryCall;
  
  UpdateFile(argument: _file_UpdateFile, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_file_FileResponse__Output>): grpc.ClientUnaryCall;
  UpdateFile(argument: _file_UpdateFile, metadata: grpc.Metadata, callback: grpc.requestCallback<_file_FileResponse__Output>): grpc.ClientUnaryCall;
  UpdateFile(argument: _file_UpdateFile, options: grpc.CallOptions, callback: grpc.requestCallback<_file_FileResponse__Output>): grpc.ClientUnaryCall;
  UpdateFile(argument: _file_UpdateFile, callback: grpc.requestCallback<_file_FileResponse__Output>): grpc.ClientUnaryCall;
  updateFile(argument: _file_UpdateFile, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_file_FileResponse__Output>): grpc.ClientUnaryCall;
  updateFile(argument: _file_UpdateFile, metadata: grpc.Metadata, callback: grpc.requestCallback<_file_FileResponse__Output>): grpc.ClientUnaryCall;
  updateFile(argument: _file_UpdateFile, options: grpc.CallOptions, callback: grpc.requestCallback<_file_FileResponse__Output>): grpc.ClientUnaryCall;
  updateFile(argument: _file_UpdateFile, callback: grpc.requestCallback<_file_FileResponse__Output>): grpc.ClientUnaryCall;
  
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
  
  UpdateSubMajor(argument: _sub_major_UpdateSubMajors, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_sub_major_SubMajorsResponse__Output>): grpc.ClientUnaryCall;
  UpdateSubMajor(argument: _sub_major_UpdateSubMajors, metadata: grpc.Metadata, callback: grpc.requestCallback<_sub_major_SubMajorsResponse__Output>): grpc.ClientUnaryCall;
  UpdateSubMajor(argument: _sub_major_UpdateSubMajors, options: grpc.CallOptions, callback: grpc.requestCallback<_sub_major_SubMajorsResponse__Output>): grpc.ClientUnaryCall;
  UpdateSubMajor(argument: _sub_major_UpdateSubMajors, callback: grpc.requestCallback<_sub_major_SubMajorsResponse__Output>): grpc.ClientUnaryCall;
  updateSubMajor(argument: _sub_major_UpdateSubMajors, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_sub_major_SubMajorsResponse__Output>): grpc.ClientUnaryCall;
  updateSubMajor(argument: _sub_major_UpdateSubMajors, metadata: grpc.Metadata, callback: grpc.requestCallback<_sub_major_SubMajorsResponse__Output>): grpc.ClientUnaryCall;
  updateSubMajor(argument: _sub_major_UpdateSubMajors, options: grpc.CallOptions, callback: grpc.requestCallback<_sub_major_SubMajorsResponse__Output>): grpc.ClientUnaryCall;
  updateSubMajor(argument: _sub_major_UpdateSubMajors, callback: grpc.requestCallback<_sub_major_SubMajorsResponse__Output>): grpc.ClientUnaryCall;
  
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
  CreateFile: grpc.handleUnaryCall<_file_File__Output, _file_FileResponse>;
  
  CreateMajor: grpc.handleUnaryCall<_majors_Majors__Output, _majors_MajorsResponse>;
  
  CreateMemberSchool: grpc.handleUnaryCall<_member_school_MemberSchool__Output, _member_school_MemberSchoolResponse>;
  
  CreateModule: grpc.handleUnaryCall<_module_Module__Output, _module_ModuleResponse>;
  
  CreateSubMajor: grpc.handleUnaryCall<_sub_major_SubMajors__Output, _sub_major_SubMajorsResponse>;
  
  CreateSubject: grpc.handleUnaryCall<_subject_Subject__Output, _subject_SubjectResponse>;
  
  CreateSubjectBlock: grpc.handleUnaryCall<_subject_block_SubjectBlock__Output, _subject_block_SubjectBlockResponse>;
  
  Default: grpc.handleUnaryCall<_core_GreetRequest__Output, _core_GreetResponse>;
  
  DeleteFile: grpc.handleUnaryCall<_core_Target__Output, _core_Message>;
  
  DeleteMajor: grpc.handleUnaryCall<_core_Target__Output, _core_Message>;
  
  DeleteMemberSchool: grpc.handleUnaryCall<_core_Target__Output, _core_Message>;
  
  DeleteModule: grpc.handleUnaryCall<_core_Target__Output, _core_Message>;
  
  DeleteSubMajor: grpc.handleUnaryCall<_core_Target__Output, _core_Message>;
  
  DeleteSubject: grpc.handleUnaryCall<_core_Target__Output, _core_Message>;
  
  DeleteSubjectBlock: grpc.handleUnaryCall<_core_Target__Output, _core_Message>;
  
  GetAllFiles: grpc.handleUnaryCall<_core_RequestEmpty__Output, _file_FilesResponse>;
  
  GetAllMajors: grpc.handleUnaryCall<_core_RequestEmpty__Output, _majors_MajorssResponse>;
  
  GetAllMemberSchool: grpc.handleUnaryCall<_core_RequestEmpty__Output, _member_school_MemberSchoolsResponse>;
  
  GetAllModule: grpc.handleUnaryCall<_core_RequestEmpty__Output, _module_ModulesResponse>;
  
  GetAllSubMajors: grpc.handleUnaryCall<_core_RequestEmpty__Output, _sub_major_SubMajorssResponse>;
  
  GetAllSubject: grpc.handleUnaryCall<_core_RequestEmpty__Output, _subject_SubjectsResponse>;
  
  GetAllSubjectBlock: grpc.handleUnaryCall<_core_RequestEmpty__Output, _subject_block_SubjectBlocksResponse>;
  
  ImportMajor: grpc.handleUnaryCall<_majors_Majorss__Output, _core_Message>;
  
  ImportSubMajor: grpc.handleUnaryCall<_sub_major_SubMajorss__Output, _core_Message>;
  
  ImportSubject: grpc.handleUnaryCall<_core_Strings__Output, _core_Message>;
  
  ImportSubjectBlock: grpc.handleUnaryCall<_core_Strings__Output, _core_Message>;
  
  ImportSubjectBlockIntoMajor: grpc.handleUnaryCall<_majors_MajorCodeAndSubjectBlockCodes__Output, _core_Message>;
  
  UpdateFile: grpc.handleUnaryCall<_file_UpdateFile__Output, _file_FileResponse>;
  
  UpdateMajor: grpc.handleUnaryCall<_majors_UpdateMajors__Output, _majors_MajorsResponse>;
  
  UpdateMemberSchool: grpc.handleUnaryCall<_member_school_UpdateMemberSchool__Output, _member_school_MemberSchoolResponse>;
  
  UpdateModule: grpc.handleUnaryCall<_module_UpdateModule__Output, _module_ModuleResponse>;
  
  UpdateSubMajor: grpc.handleUnaryCall<_sub_major_UpdateSubMajors__Output, _sub_major_SubMajorsResponse>;
  
  UpdateSubject: grpc.handleUnaryCall<_subject_UpdateSubject__Output, _subject_SubjectResponse>;
  
  UpdateSubjectBlock: grpc.handleUnaryCall<_subject_block_UpdateSubjectBlock__Output, _subject_block_SubjectBlockResponse>;
  
}

export interface CoreDefinition extends grpc.ServiceDefinition {
  CreateFile: MethodDefinition<_file_File, _file_FileResponse, _file_File__Output, _file_FileResponse__Output>
  CreateMajor: MethodDefinition<_majors_Majors, _majors_MajorsResponse, _majors_Majors__Output, _majors_MajorsResponse__Output>
  CreateMemberSchool: MethodDefinition<_member_school_MemberSchool, _member_school_MemberSchoolResponse, _member_school_MemberSchool__Output, _member_school_MemberSchoolResponse__Output>
  CreateModule: MethodDefinition<_module_Module, _module_ModuleResponse, _module_Module__Output, _module_ModuleResponse__Output>
  CreateSubMajor: MethodDefinition<_sub_major_SubMajors, _sub_major_SubMajorsResponse, _sub_major_SubMajors__Output, _sub_major_SubMajorsResponse__Output>
  CreateSubject: MethodDefinition<_subject_Subject, _subject_SubjectResponse, _subject_Subject__Output, _subject_SubjectResponse__Output>
  CreateSubjectBlock: MethodDefinition<_subject_block_SubjectBlock, _subject_block_SubjectBlockResponse, _subject_block_SubjectBlock__Output, _subject_block_SubjectBlockResponse__Output>
  Default: MethodDefinition<_core_GreetRequest, _core_GreetResponse, _core_GreetRequest__Output, _core_GreetResponse__Output>
  DeleteFile: MethodDefinition<_core_Target, _core_Message, _core_Target__Output, _core_Message__Output>
  DeleteMajor: MethodDefinition<_core_Target, _core_Message, _core_Target__Output, _core_Message__Output>
  DeleteMemberSchool: MethodDefinition<_core_Target, _core_Message, _core_Target__Output, _core_Message__Output>
  DeleteModule: MethodDefinition<_core_Target, _core_Message, _core_Target__Output, _core_Message__Output>
  DeleteSubMajor: MethodDefinition<_core_Target, _core_Message, _core_Target__Output, _core_Message__Output>
  DeleteSubject: MethodDefinition<_core_Target, _core_Message, _core_Target__Output, _core_Message__Output>
  DeleteSubjectBlock: MethodDefinition<_core_Target, _core_Message, _core_Target__Output, _core_Message__Output>
  GetAllFiles: MethodDefinition<_core_RequestEmpty, _file_FilesResponse, _core_RequestEmpty__Output, _file_FilesResponse__Output>
  GetAllMajors: MethodDefinition<_core_RequestEmpty, _majors_MajorssResponse, _core_RequestEmpty__Output, _majors_MajorssResponse__Output>
  GetAllMemberSchool: MethodDefinition<_core_RequestEmpty, _member_school_MemberSchoolsResponse, _core_RequestEmpty__Output, _member_school_MemberSchoolsResponse__Output>
  GetAllModule: MethodDefinition<_core_RequestEmpty, _module_ModulesResponse, _core_RequestEmpty__Output, _module_ModulesResponse__Output>
  GetAllSubMajors: MethodDefinition<_core_RequestEmpty, _sub_major_SubMajorssResponse, _core_RequestEmpty__Output, _sub_major_SubMajorssResponse__Output>
  GetAllSubject: MethodDefinition<_core_RequestEmpty, _subject_SubjectsResponse, _core_RequestEmpty__Output, _subject_SubjectsResponse__Output>
  GetAllSubjectBlock: MethodDefinition<_core_RequestEmpty, _subject_block_SubjectBlocksResponse, _core_RequestEmpty__Output, _subject_block_SubjectBlocksResponse__Output>
  ImportMajor: MethodDefinition<_majors_Majorss, _core_Message, _majors_Majorss__Output, _core_Message__Output>
  ImportSubMajor: MethodDefinition<_sub_major_SubMajorss, _core_Message, _sub_major_SubMajorss__Output, _core_Message__Output>
  ImportSubject: MethodDefinition<_core_Strings, _core_Message, _core_Strings__Output, _core_Message__Output>
  ImportSubjectBlock: MethodDefinition<_core_Strings, _core_Message, _core_Strings__Output, _core_Message__Output>
  ImportSubjectBlockIntoMajor: MethodDefinition<_majors_MajorCodeAndSubjectBlockCodes, _core_Message, _majors_MajorCodeAndSubjectBlockCodes__Output, _core_Message__Output>
  UpdateFile: MethodDefinition<_file_UpdateFile, _file_FileResponse, _file_UpdateFile__Output, _file_FileResponse__Output>
  UpdateMajor: MethodDefinition<_majors_UpdateMajors, _majors_MajorsResponse, _majors_UpdateMajors__Output, _majors_MajorsResponse__Output>
  UpdateMemberSchool: MethodDefinition<_member_school_UpdateMemberSchool, _member_school_MemberSchoolResponse, _member_school_UpdateMemberSchool__Output, _member_school_MemberSchoolResponse__Output>
  UpdateModule: MethodDefinition<_module_UpdateModule, _module_ModuleResponse, _module_UpdateModule__Output, _module_ModuleResponse__Output>
  UpdateSubMajor: MethodDefinition<_sub_major_UpdateSubMajors, _sub_major_SubMajorsResponse, _sub_major_UpdateSubMajors__Output, _sub_major_SubMajorsResponse__Output>
  UpdateSubject: MethodDefinition<_subject_UpdateSubject, _subject_SubjectResponse, _subject_UpdateSubject__Output, _subject_SubjectResponse__Output>
  UpdateSubjectBlock: MethodDefinition<_subject_block_UpdateSubjectBlock, _subject_block_SubjectBlockResponse, _subject_block_UpdateSubjectBlock__Output, _subject_block_SubjectBlockResponse__Output>
}
