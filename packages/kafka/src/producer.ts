
import {kafka} from './index';
import {Topics} from "./topics";
const producer = kafka.producer();

export const sendEvent = async ( topic: (typeof Topics)[keyof typeof Topics], message: string) => {
  await producer.connect();
  await producer.send({
    topic,
    messages: [{ value: message }],
  });
  await producer.disconnect();
};
