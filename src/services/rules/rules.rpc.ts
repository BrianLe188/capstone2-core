import { CoreDB } from "../../data-source";
import { Rule } from "./rules.entity";

const ruleRepo = CoreDB.getRepository(Rule);

const GetAllRule = async (call: any, callback: any) => {
  try {
    const rules = await ruleRepo.find();
    callback(null, {
      rules: {
        data: rules,
      },
    });
  } catch (error) {
    callback(null, { error: "Not found" });
  }
};

const CreateRule = async (call: any, callback: any) => {
  try {
    const rule: any = new Rule();
    Object.keys(call.request).forEach((item) => {
      rule[item] = call.request[item];
    });
    await ruleRepo.save(rule);
    callback(null, { rule });
  } catch (error) {}
};

const UpdateRule = async (call: any, callback: any) => {
  try {
    const { id, body } = call.request;
    const updatedModule: any = await ruleRepo.findOneBy({
      id,
    });
    if (updatedModule) {
      Object.keys(body).forEach((item) => {
        updatedModule[item] = body[item];
      });
      await ruleRepo.save(updatedModule);
      callback(null, { rule: updatedModule });
    } else {
    }
  } catch (error) {}
};

const DeleteRule = async (call: any, callback: any) => {
  try {
    const { id } = call.request;
    const rule = await ruleRepo.findOneBy({ id });
    if (rule) {
      await ruleRepo.remove(rule);
      callback(null, { message: "Success" });
    } else {
      callback(null, { message: "Not found" });
    }
  } catch (error) {}
};

const ruleRPC = {
  CreateRule,
  UpdateRule,
  DeleteRule,
  GetAllRule,
};

export default ruleRPC;
