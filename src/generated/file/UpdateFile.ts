// Original file: core/file.proto

import type { File as _file_File, File__Output as _file_File__Output } from '../file/File';

export interface UpdateFile {
  'id'?: (string);
  'body'?: (_file_File | null);
}

export interface UpdateFile__Output {
  'id': (string);
  'body': (_file_File__Output | null);
}
