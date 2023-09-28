import { CoreDB } from "../../data-source";
import { Subject } from "./subjects.entity";

const subjectRepo = CoreDB.getRepository(Subject);

const ImportSubject = async (call: any, callback: any) => {
  try {
    const { data } = call.request;
    if (data.length === 0) {
      return callback(null, { message: "Invalid data" });
    }
    Promise.all(
      data.map((item: string) => {
        const subject_block = new Subject();
        subject_block.name = item;
        subjectRepo.save(subject_block);
      })
    );
    callback(null, { mesasge: "Success" });
  } catch (error) {}
};

const GetAllSubject = async (call: any, callback: any) => {
  try {
    const subjects = await subjectRepo.find();
    callback(null, {
      subjects: {
        data: subjects,
      },
    });
  } catch (error) {}
};

const CreateSubject = async (call: any, callback: any) => {
  try {
    const subject: any = new Subject();
    Object.keys(call.request).forEach((item) => {
      subject[item] = call.request[item];
    });
    await subjectRepo.save(subject);
    callback(null, { subject });
  } catch (error) {}
};

const UpdateSubject = async (call: any, callback: any) => {
  try {
    const { id, body } = call.request;
    const updatedSubject: any = await subjectRepo.findOneBy({
      id,
    });
    if (updatedSubject) {
      Object.keys(body).forEach((item) => {
        updatedSubject[item] = body[item];
      });
      await subjectRepo.save(updatedSubject);
      callback(null, { subject: updatedSubject });
    } else {
    }
  } catch (error) {}
};

const DeleteSubject = async (call: any, callback: any) => {
  try {
    const { id } = call.request;
    const subject = await subjectRepo.findOneBy({ id });
    if (subject) {
      await subjectRepo.remove(subject);
      callback(null, { message: "Success" });
    } else {
      callback(null, { message: "Not found" });
    }
  } catch (error) {}
};

const subjectRPC = {
  CreateSubject,
  UpdateSubject,
  DeleteSubject,
  GetAllSubject,
  ImportSubject,
};

export default subjectRPC;
