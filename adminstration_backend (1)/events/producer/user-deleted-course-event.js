// this is the topic to which we want to write messages
const topic = "user-deleted-topic-course-srv"
const producer  = require("salahorg/events/producer/base-publisher") 

     // we define an async function that writes a new message each second
     const produce_course_srv = async (users) => {
        await producer.connect()
        console.log("User_deleted_producer is up and running");
         
        // after the produce has connected, we start an interval timer
     
        try {
        // send a message to the configured topic with
        // the key and value formed from the current value of `i`
        await producer.send({
        topic,
        acks: 1,
        messages: [{value : JSON.stringify(users) }]
                })
    
        console.log("producer is up now and running");
     }
        catch (err) 
        {console.error("could not write message " + err)}
            
         
    
    }
    
module.exports =  produce_course_srv