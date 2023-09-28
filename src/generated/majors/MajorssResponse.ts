// Original file: core/majors.proto

import type { Majorss as _majors_Majorss, Majorss__Output as _majors_Majorss__Output } from '../majors/Majorss';

export interface MajorssResponse {
  'majors'?: (_majors_Majorss | null);
  'error'?: (string);
  'response'?: "majors"|"error";
}

export interface MajorssResponse__Output {
  'majors'?: (_majors_Majorss__Output | null);
  'error'?: (string);
  'response': "majors"|"error";
}
