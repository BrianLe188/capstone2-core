import { CoreDB } from "../../data-source";
import { Majors } from "./majors.entity";

const majorsRepo = CoreDB.getRepository(Majors);

const GetAllMajors = async (call: any, callback: any) => {
  try {
    const majors = await majorsRepo.find();
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
    Object.keys(call.request).forEach((item) => {
      major[item] = call.request[item];
    });
    await majorsRepo.save(major);
    callback(null, { major });
  } catch (error) {}
};

const UpdateMajor = async (call: any, callback: any) => {
  try {
    const { id, body } = call.request;
    const updatedMajor: any = await majorsRepo.findOneBy({
      id,
    });
    if (updatedMajor) {
      Object.keys(body).forEach((item) => {
        updatedMajor[item] = body[item];
      });
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
};

export default majorsRPC;
