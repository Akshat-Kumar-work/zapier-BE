import { kafka, sendEvent, Topics } from "@repo/kafka";


async function consumer(groupId:string, onConsume : (zapRunId:string)=>Promise<void>) {
    const consumer = kafka.consumer({groupId:groupId});
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
        
        if (message.value){
            // call onConsume function
            await onConsume(message.value?.toString())
        }
        
        await new Promise(r=>setTimeout(r,5000))
        
        //commiting here means telling kakfa i have successfully processed up to this point
        // we are commiting +1 because the offset we will commit kakfa will processed it again on re-start
        //basically which latest offset will be committed is processed again by kafka on-restart
        await consumer.commitOffsets([
        {topic:Topics.ZAP_EVENTS,partition:partition,offset: (Number(message.offset) + 1).toString() }
        ]);
        }
    });
   
}

export default consumer;
