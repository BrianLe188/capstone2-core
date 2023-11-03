// Original file: core/sub-majors.proto

import type { Majors as _majors_Majors, Majors__Output as _majors_Majors__Output } from '../majors/Majors';
import type { Certificate as _certificate_Certificate, Certificate__Output as _certificate_Certificate__Output } from '../certificate/Certificate';

export interface SubMajorWithMajorAndCertificates {
  'id'?: (string);
  'name'?: (string);
  'code'?: (string);
  'description'?: (string);
  'majorId'?: (string);
  'major'?: (_majors_Majors | null);
  'tuition'?: (number);
  'cutoffPoint'?: (number | string);
  'admissionCriteria'?: (number);
  'graduationRequirements'?: (_certificate_Certificate)[];
  '_id'?: "id";
  '_description'?: "description";
  '_majorId'?: "majorId";
  '_major'?: "major";
  '_tuition'?: "tuition";
  '_cutoffPoint'?: "cutoffPoint";
  '_admissionCriteria'?: "admissionCriteria";
}

export interface SubMajorWithMajorAndCertificates__Output {
  'id'?: (string);
  'name': (string);
  'code': (string);
  'description'?: (string);
  'majorId'?: (string);
  'major'?: (_majors_Majors__Output | null);
  'tuition'?: (number);
  'cutoffPoint'?: (number);
  'admissionCriteria'?: (number);
  'graduationRequirements': (_certificate_Certificate__Output)[];
  '_id': "id";
  '_description': "description";
  '_majorId': "majorId";
  '_major': "major";
  '_tuition': "tuition";
  '_cutoffPoint': "cutoffPoint";
  '_admissionCriteria': "admissionCriteria";
}
