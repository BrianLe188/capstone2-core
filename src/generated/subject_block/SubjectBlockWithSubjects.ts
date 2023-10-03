// Original file: core/subject-block.proto

import type { Subject as _subject_Subject, Subject__Output as _subject_Subject__Output } from '../subject/Subject';

export interface SubjectBlockWithSubjects {
  'id'?: (string);
  'name'?: (string);
  'subjects'?: (_subject_Subject)[];
  '_id'?: "id";
}

export interface SubjectBlockWithSubjects__Output {
  'id'?: (string);
  'name': (string);
  'subjects': (_subject_Subject__Output)[];
  '_id': "id";
}
