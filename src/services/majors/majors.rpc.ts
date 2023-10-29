import { In } from "typeorm";
import { CoreDB } from "../../data-source";
import { SubjectBlock } from "../subject-blocks/subject-blocks.entity";
import { Majors } from "./majors.entity";

const majorsRepo = CoreDB.getRepository(Majors);
const subjectBlockRepo = CoreDB.getRepository(SubjectBlock);

const ImportSubjectBlockIntoMajor = async (call: any, callback: any) => {
  try {
    const { data } = call.request;
    Promise.all(
      data.map(async (item: any) => {
        try {
          const major = await majorsRepo.findOne({
            where: {
              code: item?.code,
            },
          });
          const script = item.script.split(",");
          const result = item.result.split(",");
          const scripts = (
            await Promise.all(
              script.map(
                async (s: any) =>
                  await subjectBlockRepo.findOne({
                    where: {
                      name: s,
                    },
                  })
              )
            )
          ).filter((i) => i);
          const results = (
            await Promise.all(
              result.map(
                async (s: any) =>
                  await subjectBlockRepo.findOne({
                    where: {
                      name: s,
                    },
                  })
              )
            )
          ).filter((i) => i);
          if (major) {
            major.basedOnHighSchoolTranscripts = scripts;
            major.basedOnHighSchoolExamResults = results;
            await majorsRepo.save(major);
          }
        } catch (error) {
          return null;
        }
      })
    );
    callback(null, { mesasge: "Success" });
  } catch (error) {}
};

const ImportMajor = async (call: any, callback: any) => {
  try {
    const { data } = call.request;
    Promise.all(
      data.map(async (item: any) => {
        const major = new Majors();
        Object.keys(item).forEach((i) => {
          major[i as keyof Majors] = item[i];
        });
        majorsRepo.save(major);
      })
    );
    callback(null, { mesasge: "Success" });
  } catch (error) {}
};

const GetAllMajors = async (call: any, callback: any) => {
  try {
    const majors = await majorsRepo.find({
      relations: {
        basedOnHighSchoolExamResults: true,
        basedOnHighSchoolTranscripts: true,
        subMajors: true,
      },
    });
    callback(null, {
      majors: {
        data: majors,
      },
    });
  } catch (error) {}
};

const CreateMajor = async (call: any, callback: any) => {
  try {
    const major: any = new Majors();
    const {
      basedOnHighSchoolExamResults,
      basedOnHighSchoolTranscripts,
      ...rest
    } = call.request;
    Object.keys(rest).forEach((item) => {
      major[item] = call.request[item];
    });
    if (
      Array.isArray(basedOnHighSchoolExamResults) &&
      basedOnHighSchoolExamResults.length > 0
    ) {
      major.basedOnHighSchoolExamResults = await subjectBlockRepo.find({
        where: {
          id: In([...basedOnHighSchoolExamResults]),
        },
      });
    }
    if (
      Array.isArray(basedOnHighSchoolTranscripts) &&
      basedOnHighSchoolTranscripts.length > 0
    ) {
      major.basedOnHighSchoolTranscripts = await subjectBlockRepo.find({
        where: {
          id: In([...basedOnHighSchoolTranscripts]),
        },
      });
    }
    await majorsRepo.save(major);
    callback(null, { major });
  } catch (error) {}
};

const UpdateMajor = async (call: any, callback: any) => {
  try {
    const { id, body } = call.request;
    const {
      basedOnHighSchoolExamResults,
      basedOnHighSchoolTranscripts,
      ...rest
    } = body;
    const updatedMajor: any = await majorsRepo.findOneBy({
      id,
    });
    if (updatedMajor) {
      Object.keys(body).forEach((item) => {
        updatedMajor[item] = body[item];
      });
      if (
        Array.isArray(basedOnHighSchoolExamResults) &&
        basedOnHighSchoolExamResults.length > 0
      ) {
        updatedMajor.basedOnHighSchoolExamResults = await subjectBlockRepo.find(
          {
            where: {
              id: In([...basedOnHighSchoolExamResults]),
            },
          }
        );
      }
      if (
        Array.isArray(basedOnHighSchoolTranscripts) &&
        basedOnHighSchoolTranscripts.length > 0
      ) {
        updatedMajor.basedOnHighSchoolTranscripts = await subjectBlockRepo.find(
          {
            where: {
              id: In([...basedOnHighSchoolTranscripts]),
            },
          }
        );
      }
      await majorsRepo.save(updatedMajor);
      callback(null, { major: updatedMajor });
    } else {
    }
  } catch (error) {}
};

const DeleteMajor = async (call: any, callback: any) => {
  try {
    const { id } = call.request;
    const major = await majorsRepo.findOneBy({ id });
    if (major) {
      await majorsRepo.remove(major);
      callback(null, { message: "Success" });
    } else {
      callback(null, { message: "Not found" });
    }
  } catch (error) {}
};

const majorsRPC = {
  CreateMajor,
  UpdateMajor,
  DeleteMajor,
  GetAllMajors,
  ImportMajor,
  ImportSubjectBlockIntoMajor,
};

export default majorsRPC;
