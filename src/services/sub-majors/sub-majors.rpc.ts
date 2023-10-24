import { CoreDB } from "../../data-source";
import { SubMajors } from "./sub-majors.entity";

const subMajorsRepo = CoreDB.getRepository(SubMajors);

const ImportSubMajor = async (call: any, callback: any) => {
  try {
    const { data } = call.request;
    Promise.all(
      data.map(async (item: any) => {
        const submajor = new SubMajors();
        Object.keys(item).forEach((i) => {
          submajor[i as keyof SubMajors] = item[i];
        });
        subMajorsRepo.save(submajor);
      })
    );
    callback(null, { mesasge: "Success" });
  } catch (error) {}
};

const GetAllSubMajors = async (call: any, callback: any) => {
  try {
    const submajors = await subMajorsRepo.find();
    callback(null, {
      submajors: {
        data: submajors,
      },
    });
  } catch (error) {}
};

const CreateSubMajor = async (call: any, callback: any) => {
  try {
    const submajor: any = new SubMajors();
    Object.keys(call.request).forEach((item) => {
      submajor[item] = call.request[item];
    });
    await subMajorsRepo.save(submajor);
    callback(null, { submajor });
  } catch (error) {}
};

const UpdateSubMajor = async (call: any, callback: any) => {
  try {
    const { id, body } = call.request;
    const updatedSubMajor: any = await subMajorsRepo.findOneBy({
      id,
    });
    if (updatedSubMajor) {
      Object.keys(body).forEach((item) => {
        updatedSubMajor[item] = body[item];
      });
      await subMajorsRepo.save(updatedSubMajor);
      callback(null, { submajor: updatedSubMajor });
    } else {
    }
  } catch (error) {}
};

const DeleteSubMajor = async (call: any, callback: any) => {
  try {
    const { id } = call.request;
    const submajor = await subMajorsRepo.findOneBy({ id });
    if (submajor) {
      await subMajorsRepo.remove(submajor);
      callback(null, { message: "Success" });
    } else {
      callback(null, { message: "Not found" });
    }
  } catch (error) {}
};

const submajorsRPC = {
  CreateSubMajor,
  UpdateSubMajor,
  DeleteSubMajor,
  GetAllSubMajors,
  ImportSubMajor,
};

export default submajorsRPC;
