import { Request, Response } from "express";

export const get404 = (req: Request, res: Response) => {
  const requestedUrl = req.url;
  console.log(`${requestedUrl} returned 404 (Not Found)!`);
  res.status(404).send("404 Not Found");
};
