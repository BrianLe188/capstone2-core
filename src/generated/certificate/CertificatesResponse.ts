// Original file: core/certificates.proto

import type { Certificates as _certificate_Certificates, Certificates__Output as _certificate_Certificates__Output } from '../certificate/Certificates';

export interface CertificatesResponse {
  'certificates'?: (_certificate_Certificates | null);
  'error'?: (string);
  'response'?: "certificates"|"error";
}

export interface CertificatesResponse__Output {
  'certificates'?: (_certificate_Certificates__Output | null);
  'error'?: (string);
  'response': "certificates"|"error";
}
