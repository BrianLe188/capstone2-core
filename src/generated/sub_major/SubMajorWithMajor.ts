// Original file: core/sub-majors.proto

import type { Majors as _majors_Majors, Majors__Output as _majors_Majors__Output } from '../majors/Majors';

export interface SubMajorWithMajor {
  'id'?: (string);
  'name'?: (string);
  'code'?: (string);
  'description'?: (string);
  'majorId'?: (string);
  'major'?: (_majors_Majors | null);
  '_id'?: "id";
  '_description'?: "description";
  '_majorId'?: "majorId";
  '_major'?: "major";
}

export interface SubMajorWithMajor__Output {
  'id'?: (string);
  'name': (string);
  'code': (string);
  'description'?: (string);
  'majorId'?: (string);
  'major'?: (_majors_Majors__Output | null);
  '_id': "id";
  '_description': "description";
  '_majorId': "majorId";
  '_major': "major";
}
