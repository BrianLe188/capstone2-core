import { CoreDB } from "../../data-source";
import { Module } from "./module.entity";

const moduleRepo = CoreDB.getRepository(Module);

const GetAllModule = async (call: any, callback: any) => {
  try {
    const modules = await moduleRepo.find();
    callback(null, {
      modules: {
        data: modules,
      },
    });
  } catch (error) {
    callback(null, { error: "Not found" });
  }
};

const CreateModule = async (call: any, callback: any) => {
  try {
    const module: any = new Module();
    Object.keys(call.request).forEach((item) => {
      module[item] = call.request[item];
    });
    await moduleRepo.save(module);
    callback(null, { module });
  } catch (error) {}
};

const UpdateModule = async (call: any, callback: any) => {
  try {
    const { id, body } = call.request;
    const updatedModule: any = await moduleRepo.findOneBy({
      id,
    });
    if (updatedModule) {
      Object.keys(body).forEach((item) => {
        updatedModule[item] = body[item];
      });
      await moduleRepo.save(updatedModule);
      callback(null, { module: updatedModule });
    } else {
    }
  } catch (error) {}
};

const DeleteModule = async (call: any, callback: any) => {
  try {
    const { id } = call.request;
    const module = await moduleRepo.findOneBy({ id });
    if (module) {
      await moduleRepo.remove(module);
      callback(null, { message: "Success" });
    } else {
      callback(null, { message: "Not found" });
    }
  } catch (error) {}
};

const moduleRPC = {
  CreateModule,
  UpdateModule,
  DeleteModule,
  GetAllModule,
};

export default moduleRPC;
