// Original file: core/subject-block.proto

import type { SubjectBlocks as _subject_block_SubjectBlocks, SubjectBlocks__Output as _subject_block_SubjectBlocks__Output } from '../subject_block/SubjectBlocks';

export interface SubjectBlocksResponse {
  'blocks'?: (_subject_block_SubjectBlocks | null);
  'error'?: (string);
  'response'?: "blocks"|"error";
}

export interface SubjectBlocksResponse__Output {
  'blocks'?: (_subject_block_SubjectBlocks__Output | null);
  'error'?: (string);
  'response': "blocks"|"error";
}
