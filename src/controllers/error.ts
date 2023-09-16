import { Request, Response } from "express";

export const get404 = (req: Request, res: Response) => {
  res.status(404).send("404 Not Found");
};

export const errorHandler = (err: Error, req: Request, res: Response) => {
  console.error(err.stack);
  res.status(500).json({ error: `Something Went Wrong: ${err.message}` });
};
