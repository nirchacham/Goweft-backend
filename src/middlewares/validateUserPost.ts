import { Request, Response, NextFunction } from "express";

export const validateUserPost = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { postId } = req.query;
  if (!postId) return res.status(400).send("userId is required");
  if (postId && isNaN(+postId))
    return res.status(400).send("postId param must be a number");    
  next();
};
