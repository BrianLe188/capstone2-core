import { CoreDB } from "../../data-source";
import { Subject } from "../subjects/subjects.entity";
import { SubjectBlock } from "./subject-blocks.entity";
import { In } from "typeorm";

const subjectBlockRepo = CoreDB.getRepository(SubjectBlock);
const subjectRepo = CoreDB.getRepository(Subject);

const ImportSubjectBlock = async (call: any, callback: any) => {
  try {
    const { data } = call.request;
    if (data.length === 0) {
      return callback(null, { message: "Invalid data" });
    }
    Promise.all(
      data.map(async (item: string) => {
        const subject_block = new SubjectBlock();
        subject_block.name = item;
        await subjectBlockRepo.save(subject_block);
      })
    );
    callback(null, { mesasge: "Success" });
  } catch (error) {}
};

const GetAllSubjectBlock = async (call: any, callback: any) => {
  try {
    const subject_blocks = await subjectBlockRepo.find({
      relations: {
        subjects: true,
      },
    });
    callback(null, {
      blocks: {
        data: subject_blocks,
      },
    });
  } catch (error) {}
};

const CreateSubjectBlock = async (call: any, callback: any) => {
  try {
    const subject_block: any = new SubjectBlock();
    const { subjects, ...rest } = call.request;
    Object.keys(rest).forEach((item) => {
      subject_block[item] = call.request[item];
    });
    if (Array.isArray(subjects) && subjects.length > 0) {
      subject_block.subjects = await subjectRepo.find({
        where: {
          id: In(subjects),
        },
      });
    }
    await subjectBlockRepo.save(subject_block);
    callback(null, { block: subject_block });
  } catch (error) {}
};

const UpdateSubjectBlock = async (call: any, callback: any) => {
  try {
    const { id, body } = call.request;
    const { subjects, ...rest } = body;
    const updatedSubjectBlock: any = await subjectBlockRepo.findOne({
      where: {
        id,
      },
    });
    if (updatedSubjectBlock) {
      Object.keys(rest).forEach((item) => {
        updatedSubjectBlock[item] = body[item];
      });
      if (Array.isArray(subjects) && subjects.length > 0) {
        updatedSubjectBlock.subjects = await subjectRepo.find({
          where: {
            id: In([...subjects]),
          },
        });
      }
      await subjectBlockRepo.save(updatedSubjectBlock);
      callback(null, { block: updatedSubjectBlock });
    } else {
    }
  } catch (error) {}
};

const DeleteSubjectBlock = async (call: any, callback: any) => {
  try {
    const { id } = call.request;
    const subject_block = await subjectBlockRepo.findOneBy({ id });
    if (subject_block) {
      await subjectBlockRepo.remove(subject_block);
      callback(null, { message: "Success" });
    } else {
      callback(null, { message: "Not found" });
    }
  } catch (error) {}
};

const subjectBlockRPC = {
  CreateSubjectBlock,
  UpdateSubjectBlock,
  DeleteSubjectBlock,
  GetAllSubjectBlock,
  ImportSubjectBlock,
};

export default subjectBlockRPC;
