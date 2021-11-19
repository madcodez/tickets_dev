import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

interface UserSession {
  id: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserSession;
    }
  }
}

export const currentUser = function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!req.session?.jwt) {
    return next();
  }
  try {
    const payload = jwt.verify(
      req.session?.jwt,
      process.env.JWT_KEY!
    ) as UserSession;
    req.currentUser = payload;
  } catch (err) {}
  next();
};
