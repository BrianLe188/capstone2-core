// Original file: core/sub-majors.proto

import type { SubMajors as _sub_major_SubMajors, SubMajors__Output as _sub_major_SubMajors__Output } from '../sub_major/SubMajors';

export interface SubMajorsResponse {
  'submajor'?: (_sub_major_SubMajors | null);
  'error'?: (string);
  'response'?: "submajor"|"error";
}

export interface SubMajorsResponse__Output {
  'submajor'?: (_sub_major_SubMajors__Output | null);
  'error'?: (string);
  'response': "submajor"|"error";
}
