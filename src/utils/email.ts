import { notificationQueue } from "..";
export const Email = async (
  to: string,
  subject: string,
  body: string,
  user: string
) => {
  notificationQueue.add(`email to ${to}`, {
    to: to,
    subject: subject,
    body: body,
    user: user,
  });
  console.log("Job added to queue");
};
