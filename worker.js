import { Worker } from "bullmq";

const sendEmail = () => new Promise((res, rej) => setTimeout(() => res(), 5 * 1000));

const worker = new Worker("new_email", async (job) => {
    console.log(`Message rec id: ${job.id}`);
    console.log("Processing message");
    await sendEmail();
    console.log(job.data.email);
}, {
    connection: {
        host: '127.0.0.1',
        port: 6379
    }
});