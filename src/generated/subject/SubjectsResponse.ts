// Original file: core/subject.proto

import type { Subjects as _subject_Subjects, Subjects__Output as _subject_Subjects__Output } from '../subject/Subjects';

export interface SubjectsResponse {
  'subjects'?: (_subject_Subjects | null);
  'error'?: (string);
  'response'?: "subjects"|"error";
}

export interface SubjectsResponse__Output {
  'subjects'?: (_subject_Subjects__Output | null);
  'error'?: (string);
  'response': "subjects"|"error";
}
