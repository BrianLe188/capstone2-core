// Original file: core/certificates.proto

import type { Certificate as _certificate_Certificate, Certificate__Output as _certificate_Certificate__Output } from '../certificate/Certificate';

export interface CertificateResponse {
  'certificate'?: (_certificate_Certificate | null);
  'error'?: (string);
  'response'?: "certificate"|"error";
}

export interface CertificateResponse__Output {
  'certificate'?: (_certificate_Certificate__Output | null);
  'error'?: (string);
  'response': "certificate"|"error";
}
