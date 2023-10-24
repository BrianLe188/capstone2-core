// Original file: core/majors.proto

import type { SubjectBlock as _subject_block_SubjectBlock, SubjectBlock__Output as _subject_block_SubjectBlock__Output } from '../subject_block/SubjectBlock';

export interface MajorWithSubjectBlocks {
  'id'?: (string);
  'name'?: (string);
  'educationalLevel'?: (string);
  'code'?: (string);
  'description'?: (string);
  'basedOnHighSchoolExamResults'?: (_subject_block_SubjectBlock)[];
  'basedOnHighSchoolTranscripts'?: (_subject_block_SubjectBlock)[];
  '_id'?: "id";
  '_description'?: "description";
}

export interface MajorWithSubjectBlocks__Output {
  'id'?: (string);
  'name': (string);
  'educationalLevel': (string);
  'code': (string);
  'description'?: (string);
  'basedOnHighSchoolExamResults': (_subject_block_SubjectBlock__Output)[];
  'basedOnHighSchoolTranscripts': (_subject_block_SubjectBlock__Output)[];
  '_id': "id";
  '_description': "description";
}
