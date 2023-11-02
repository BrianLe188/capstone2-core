// Original file: core/rule.proto

import type { Rule as _rule_Rule, Rule__Output as _rule_Rule__Output } from '../rule/Rule';

export interface UpdateRule {
  'id'?: (string);
  'body'?: (_rule_Rule | null);
}

export interface UpdateRule__Output {
  'id': (string);
  'body': (_rule_Rule__Output | null);
}
