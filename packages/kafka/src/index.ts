import { Kafka } from "kafkajs";

 export const kafka = new Kafka({
  clientId: 'zapier-kafka-service',
  brokers: ['localhost:9092']
});

export * from "./producer";
export * from "./topics";