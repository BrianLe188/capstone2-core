// Original file: core/certificates.proto

import type { Certificate as _certificate_Certificate, Certificate__Output as _certificate_Certificate__Output } from '../certificate/Certificate';

export interface UpdateCertificate {
  'id'?: (string);
  'body'?: (_certificate_Certificate | null);
}

export interface UpdateCertificate__Output {
  'id': (string);
  'body': (_certificate_Certificate__Output | null);
}
