// Original file: core/majors.proto


export interface Majors {
  'id'?: (string);
  'name'?: (string);
  'educationalLevel'?: (string);
  'industryCode'?: (string);
  'specializedCode'?: (string);
  'description'?: (string);
  'basedOnHighSchoolExamResults'?: (string)[];
  'basedOnHighSchoolTranscripts'?: (string)[];
  '_id'?: "id";
  '_description'?: "description";
}

export interface Majors__Output {
  'id'?: (string);
  'name': (string);
  'educationalLevel': (string);
  'industryCode': (string);
  'specializedCode': (string);
  'description'?: (string);
  'basedOnHighSchoolExamResults': (string)[];
  'basedOnHighSchoolTranscripts': (string)[];
  '_id': "id";
  '_description': "description";
}
