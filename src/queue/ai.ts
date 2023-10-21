import { Channel, Message } from "amqplib";
import { CoreDB } from "../data-source";
import { Files } from "../services/files/files.entity";

const fileRepo = CoreDB.getRepository(Files);

const ai = async ({ channel }: { channel: Channel }) => {
  const getFileMessageQueue = "get_file";
  const returnFileMessageQueue = "return_file_object";

  await channel.assertQueue(getFileMessageQueue);
  await channel.assertQueue(returnFileMessageQueue);

  channel.consume(
    getFileMessageQueue,
    async (msg) => {
      try {
        const id = msg?.content.toString();
        if (id) {
          const file = await fileRepo.findOne({
            where: {
              id,
            },
          });
          if (file) {
            channel.sendToQueue(
              returnFileMessageQueue,
              Buffer.from(JSON.stringify(file))
            );
          }
        }
      } catch (error) {
      } finally {
        channel.ack(msg as Message);
      }
    },
    {
      noAck: false,
    }
  );
};

export default ai;
