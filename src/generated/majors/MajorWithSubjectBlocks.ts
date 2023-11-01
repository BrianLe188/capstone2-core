// Original file: core/majors.proto

import type { SubjectBlock as _subject_block_SubjectBlock, SubjectBlock__Output as _subject_block_SubjectBlock__Output } from '../subject_block/SubjectBlock';
import type { SubMajors as _sub_major_SubMajors, SubMajors__Output as _sub_major_SubMajors__Output } from '../sub_major/SubMajors';

export interface MajorWithSubjectBlocks {
  'id'?: (string);
  'name'?: (string);
  'educationalLevel'?: (string);
  'code'?: (string);
  'description'?: (string);
  'basedOnHighSchoolExamResults'?: (_subject_block_SubjectBlock)[];
  'basedOnHighSchoolTranscripts'?: (_subject_block_SubjectBlock)[];
  'subMajors'?: (_sub_major_SubMajors)[];
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
  'subMajors': (_sub_major_SubMajors__Output)[];
  '_id': "id";
  '_description': "description";
}
