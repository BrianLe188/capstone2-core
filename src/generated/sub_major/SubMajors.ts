// Original file: core/sub-majors.proto


export interface SubMajors {
  'id'?: (string);
  'name'?: (string);
  'code'?: (string);
  'description'?: (string);
  'majorId'?: (string);
  'tuition'?: (number);
  'cutoffPoint'?: (number | string);
  'admissionCriteria'?: (number);
  '_id'?: "id";
  '_description'?: "description";
  '_majorId'?: "majorId";
  '_tuition'?: "tuition";
  '_cutoffPoint'?: "cutoffPoint";
  '_admissionCriteria'?: "admissionCriteria";
}

export interface SubMajors__Output {
  'id'?: (string);
  'name': (string);
  'code': (string);
  'description'?: (string);
  'majorId'?: (string);
  'tuition'?: (number);
  'cutoffPoint'?: (number);
  'admissionCriteria'?: (number);
  '_id': "id";
  '_description': "description";
  '_majorId': "majorId";
  '_tuition': "tuition";
  '_cutoffPoint': "cutoffPoint";
  '_admissionCriteria': "admissionCriteria";
}
