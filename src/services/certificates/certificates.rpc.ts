import { CoreDB } from "../../data-source";
import { Certificate } from "./certificates.entity";

const certificateRepo = CoreDB.getRepository(Certificate);

const GetAllCertificate = async (call: any, callback: any) => {
  try {
    const certificates = await certificateRepo.find();
    callback(null, {
      certificates: {
        data: certificates,
      },
    });
  } catch (error) {}
};

const CreateCertificate = async (call: any, callback: any) => {
  try {
    const certificate: any = new Certificate();
    Object.keys(call.request).forEach((item) => {
      certificate[item] = call.request[item];
    });
    await certificateRepo.save(certificate);
    callback(null, { certificate });
  } catch (error) {}
};

const UpdateCertificate = async (call: any, callback: any) => {
  try {
    const { id, body } = call.request;
    const updatedCertificate: any = await certificateRepo.findOneBy({
      id,
    });
    if (updatedCertificate) {
      Object.keys(body).forEach((item) => {
        updatedCertificate[item] = body[item];
      });
      await certificateRepo.save(updatedCertificate);
      callback(null, { certificate: updatedCertificate });
    } else {
    }
  } catch (error) {}
};

const DeleteCertificate = async (call: any, callback: any) => {
  try {
    const { id } = call.request;
    const certificate = await certificateRepo.findOneBy({ id });
    if (certificate) {
      await certificateRepo.remove(certificate);
      callback(null, { message: "Success" });
    } else {
      callback(null, { message: "Not found" });
    }
  } catch (error) {}
};

const certificateRPC = {
  CreateCertificate,
  UpdateCertificate,
  DeleteCertificate,
  GetAllCertificate,
};

export default certificateRPC;
