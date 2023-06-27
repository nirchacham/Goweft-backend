import { Request, Response, NextFunction } from "express";

export const validateUserQueries = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId, page, limit } = req.query;
  if (!userId) return res.status(400).send("userId is required");
  if (!page) return res.status(400).send("page is required");
  if (!limit) return res.status(400).send("limit is required");
  if (userId && isNaN(+userId))
    return res.status(400).send("userId param must be a number");
  if (page && isNaN(+page))
    return res.status(400).send("page param must be a number");
  if (limit && isNaN(+limit))
    return res.status(400).send("limit param must be a number");    
  next();
};
