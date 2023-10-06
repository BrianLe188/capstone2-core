// Original file: core/file.proto

import type { Files as _file_Files, Files__Output as _file_Files__Output } from '../file/Files';

export interface FilesResponse {
  'files'?: (_file_Files | null);
  'error'?: (string);
  'response'?: "files"|"error";
}

export interface FilesResponse__Output {
  'files'?: (_file_Files__Output | null);
  'error'?: (string);
  'response': "files"|"error";
}
