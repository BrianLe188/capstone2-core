// Original file: core/sub-majors.proto

import type { SubMajorss as _sub_major_SubMajorss, SubMajorss__Output as _sub_major_SubMajorss__Output } from '../sub_major/SubMajorss';

export interface SubMajorssResponse {
  'submajors'?: (_sub_major_SubMajorss | null);
  'error'?: (string);
  'response'?: "submajors"|"error";
}

export interface SubMajorssResponse__Output {
  'submajors'?: (_sub_major_SubMajorss__Output | null);
  'error'?: (string);
  'response': "submajors"|"error";
}
