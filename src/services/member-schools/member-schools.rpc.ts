import { CoreDB } from "../../data-source";
import { MemberSchool } from "./member-schools.entity";

const memberSchoolRepo = CoreDB.getRepository(MemberSchool);

const GetAllMemberSchool = async (call: any, callback: any) => {
  try {
    const memberSchools = await memberSchoolRepo.find();
    callback(null, { schools: { data: memberSchools } });
  } catch (error) {}
};

const CreateMemberSchool = async (call: any, callback: any) => {
  try {
    const school: any = new MemberSchool();
    Object.keys(call.request).forEach((item) => {
      school[item] = call.request[item];
    });
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
      Object.keys(body).forEach((item) => {
        updatedSchool[item] = body[item];
      });
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
