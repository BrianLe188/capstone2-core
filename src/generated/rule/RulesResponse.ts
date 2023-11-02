// Original file: core/rule.proto

import type { Rules as _rule_Rules, Rules__Output as _rule_Rules__Output } from '../rule/Rules';

export interface RulesResponse {
  'rules'?: (_rule_Rules | null);
  'error'?: (string);
  'response'?: "rules"|"error";
}

export interface RulesResponse__Output {
  'rules'?: (_rule_Rules__Output | null);
  'error'?: (string);
  'response': "rules"|"error";
}
