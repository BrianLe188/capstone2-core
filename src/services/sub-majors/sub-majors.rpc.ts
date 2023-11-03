import { In } from "typeorm";
import { CoreDB } from "../../data-source";
import { Certificate } from "../certificates/certificates.entity";
import { Majors } from "../majors/majors.entity";
import { SubMajors } from "./sub-majors.entity";

const subMajorsRepo = CoreDB.getRepository(SubMajors);
const majorRepo = CoreDB.getRepository(Majors);
const certificateRepo = CoreDB.getRepository(Certificate);

const ImportSubMajor = async (call: any, callback: any) => {
  try {
    const { data } = call.request;
    Promise.all(
      data.map(async (item: any) => {
        const submajor: any = new SubMajors();
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
    const submajors = await subMajorsRepo.find({
      relations: {
        major: true,
        graduationRequirements: true,
      },
    });
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
    const { majorId, graduationRequirements, ...rest } = call.request;
    Object.keys(rest).forEach((item) => {
      submajor[item] = rest[item];
    });
    const major = await majorRepo.findOne({
      where: {
        id: majorId,
      },
    });
    if (major) {
      submajor.major = major;
    }
    if (
      Array.isArray(graduationRequirements) &&
      graduationRequirements.length > 0
    ) {
      submajor.graduationRequirements = await certificateRepo.find({
        where: {
          id: In([...graduationRequirements]),
        },
      });
    }
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
      const { majorId, graduationRequirements, ...rest } = body;
      Object.keys(rest).forEach((item) => {
        updatedSubMajor[item] = rest[item];
      });
      const major = await majorRepo.findOne({
        where: {
          id: majorId,
        },
      });
      if (major) {
        updatedSubMajor.major = major;
      }
      if (
        Array.isArray(graduationRequirements) &&
        graduationRequirements.length > 0
      ) {
        updatedSubMajor.graduationRequirements = await certificateRepo.find({
          where: {
            id: In([...graduationRequirements]),
          },
        });
      }
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
