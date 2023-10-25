// Original file: core/member-school.proto

import type { Majors as _majors_Majors, Majors__Output as _majors_Majors__Output } from '../majors/Majors';

export interface MemberSchoolWithMajor {
  'id'?: (string);
  'name'?: (string);
  'link'?: (string);
  'university'?: (boolean);
  'afterUniversity'?: (boolean);
  'thumbnail'?: (string);
  'logo'?: (string);
  'majors'?: (_majors_Majors)[];
  '_id'?: "id";
}

export interface MemberSchoolWithMajor__Output {
  'id'?: (string);
  'name': (string);
  'link': (string);
  'university': (boolean);
  'afterUniversity': (boolean);
  'thumbnail': (string);
  'logo': (string);
  'majors': (_majors_Majors__Output)[];
  '_id': "id";
}
