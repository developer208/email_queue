import { tryCatch } from "bullmq";
import { Request, Response, NextFunction } from "express";
import { Email } from "../utils/email";

export interface data {
  to: string;
  subject: string;
  body: string;
  user: string;
}

export const sendEmail = async (
  req: Request<{}, {}, data>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { to, subject, body, user } = req.body;
    await Email(to, subject, body, user);
    res.status(200).json({
      type: "Success",
      msg: "Email Inserted In Queue Successfully",
    });
  } catch (error: any) {
    res.status(500).json({
      type: "Error",
      msg: error.message,
    });
  }
};
