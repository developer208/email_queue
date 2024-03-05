import { Queue } from "bullmq";

const notificationQueue = new Queue('new_email', {
    connection: {
        host: '127.0.0.1',
        port: 6379
    }
});

async function init() {
    notificationQueue.add('email to vedang', {
        email: "vedangmule208@gmail.com",
        subject: "Welcome",
        body: "hello how are you ?"
    })
    console.log("Job added to queue")
}

init(); 