// Original file: core/rule.proto

import type { Rule as _rule_Rule, Rule__Output as _rule_Rule__Output } from '../rule/Rule';

export interface RuleResponse {
  'rule'?: (_rule_Rule | null);
  'error'?: (string);
  'response'?: "rule"|"error";
}

export interface RuleResponse__Output {
  'rule'?: (_rule_Rule__Output | null);
  'error'?: (string);
  'response': "rule"|"error";
}
