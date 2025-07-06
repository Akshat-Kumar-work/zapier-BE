import { Kafka } from "kafkajs";

 const kafka = new Kafka({
  clientId: 'zapier-kafka-service',
  brokers: ['localhost:9000']
});

export default kafka;
