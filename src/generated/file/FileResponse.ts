// Original file: core/file.proto

import type { File as _file_File, File__Output as _file_File__Output } from '../file/File';

export interface FileResponse {
  'file'?: (_file_File | null);
  'error'?: (string);
  'response'?: "file"|"error";
}

export interface FileResponse__Output {
  'file'?: (_file_File__Output | null);
  'error'?: (string);
  'response': "file"|"error";
}
