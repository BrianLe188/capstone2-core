import { CoreDB } from "../../data-source";
import { Files } from "./files.entity";

const fileRepo = CoreDB.getRepository(Files);

const GetAllFiles = async (call: any, callback: any) => {
  try {
    const files = await fileRepo.find();
    callback(null, {
      files: {
        data: files,
      },
    });
  } catch (error) {}
};

const CreateFile = async (call: any, callback: any) => {
  try {
    const file: any = new Files();
    Object.keys(call.request).forEach((item) => {
      file[item] = call.request[item];
    });
    await fileRepo.save(file);
    callback(null, { file });
  } catch (error) {}
};

const UpdateFile = async (call: any, callback: any) => {
  try {
    const { id, body } = call.request;
    const updatedFile: any = await fileRepo.findOneBy({
      id,
    });
    if (updatedFile) {
      Object.keys(body).forEach((item) => {
        updatedFile[item] = body[item];
      });
      await fileRepo.save(updatedFile);
      callback(null, { file: updatedFile });
    } else {
    }
  } catch (error) {}
};

const DeleteFile = async (call: any, callback: any) => {
  try {
    const { id } = call.request;
    const file = await fileRepo.findOneBy({ id });
    if (file) {
      await fileRepo.remove(file);
      callback(null, { message: "Success" });
    } else {
      callback(null, { message: "Not found" });
    }
  } catch (error) {}
};

const fileRPC = {
  CreateFile,
  UpdateFile,
  DeleteFile,
  GetAllFiles,
};

export default fileRPC;
