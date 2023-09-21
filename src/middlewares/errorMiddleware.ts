import { Request, Response } from "express";

export const errorMiddleware = (err: Error, req: Request, res: Response) => {
  console.error(err.stack);
  res.status(500).json({ error: `Something Went Wrong: ${err.message}` });
};
