import { CoreDB } from "../../data-source";
import { MemberSchool } from "./member-schools.entity";
import { Majors } from "../majors/majors.entity";
import { In } from "typeorm";

const memberSchoolRepo = CoreDB.getRepository(MemberSchool);
const majorRepo = CoreDB.getRepository(Majors);

const GetAllMemberSchool = async (call: any, callback: any) => {
  try {
    const memberSchools = await memberSchoolRepo.find({
      relations: {
        majors: true,
      },
    });
    callback(null, { schools: { data: memberSchools } });
  } catch (error) {}
};

const CreateMemberSchool = async (call: any, callback: any) => {
  try {
    const school: any = new MemberSchool();
    const { majors, ...rest } = call.request;
    Object.keys(rest).forEach((item) => {
      school[item] = call.request[item];
    });
    if (Array.isArray(majors) && majors?.length > 0) {
      school.majors = await majorRepo.find({
        where: {
          id: In([...majors]),
        },
      });
    }
    await memberSchoolRepo.save(school);
    callback(null, { school });
  } catch (error) {}
};

const UpdateMemberSchool = async (call: any, callback: any) => {
  try {
    const { id, body } = call.request;
    const updatedSchool: any = await memberSchoolRepo.findOneBy({
      id,
    });
    if (updatedSchool) {
      const { majors, ...rest } = body;
      Object.keys(rest).forEach((item) => {
        updatedSchool[item] = body[item];
      });
      if (Array.isArray(majors)) {
        updatedSchool.majors = await majorRepo.find({
          where: {
            id: In([...majors]),
          },
        });
      }
      await memberSchoolRepo.save(updatedSchool);
      callback(null, { school: updatedSchool });
    } else {
    }
  } catch (error) {}
};

const DeleteMemberSchool = async (call: any, callback: any) => {
  try {
    const { id } = call.request;
    const school = await memberSchoolRepo.findOneBy({ id });
    if (school) {
      await memberSchoolRepo.remove(school);
      callback(null, { message: "Success" });
    } else {
      callback(null, { message: "Not found" });
    }
  } catch (error) {}
};

const memberSchoolRPC = {
  CreateMemberSchool,
  UpdateMemberSchool,
  DeleteMemberSchool,
  GetAllMemberSchool,
};

export default memberSchoolRPC;
