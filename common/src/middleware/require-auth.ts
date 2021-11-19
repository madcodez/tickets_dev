import { NextFunction, Request, Response } from "express";
import { NotAuthorizedError } from "../error/not-authorized-error";

export const requireAuth = function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!req.currentUser) throw new NotAuthorizedError();

  next();
};
