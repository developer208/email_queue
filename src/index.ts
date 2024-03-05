import express from "express";
import dotenv from "dotenv";
import { Queue, Worker } from "bullmq";
import emailRouter from "./routes/email.routes";
import main from "./utils/transportEmail";
import { data } from "./controllers/sendEmail";
import cors from "cors";
const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());

export const notificationQueue = new Queue("new_email", {
  connection: {
    host: process.env.URL,
    port: Number(process.env.REDIS_PORT),
  },
});

app.use("/backend-email-service", emailRouter);

const sendEmail = () =>
  new Promise((res: any, rej: any) => setTimeout(() => res(), 5 * 1000));

const worker = new Worker(
  "new_email",
  async (job) => {
    await sendEmail();
    const data: data = job.data;
    console.log(job.id);
    main({ ...data }).catch((err) => {
      console.log(`mail sending error ${err} `);
    });
  },
  {
    connection: {
      host: process.env.URL,
      port: Number(process.env.REDIS_PORT),
    },
  }
);

app.listen(process.env.PORT, () => {
  console.log(`server is on port ${process.env.PORT}`);
});

export default app;
