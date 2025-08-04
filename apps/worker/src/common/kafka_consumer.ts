import { kafka, sendEvent, Topics } from "@repo/kafka";


async function consumer() {
    const consumer = kafka.consumer({groupId:'outbox-worker'});
    await consumer.connect();
    await consumer.subscribe({topic:Topics.ZAP_EVENTS,fromBeginning:true});
    await consumer.run({
        autoCommit:false,
        eachMessage:async({topic,partition,message})=>{
            console.log({
                partition,
                offset:message.offset,
                value:message.value?.toString()
            });

        await new Promise(r=>setTimeout(r,5000))
        
        await consumer.commitOffsets([
        {topic:Topics.ZAP_EVENTS,partition:partition,offset:message.offset}
        ]);
        }
    });
   
}

export default consumer;
