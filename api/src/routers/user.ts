import express, { Request, Response, NextFunction } from "express";
import User from "../models/user";

const route = express.Router();

route.get("/test", async (req: any, res: Response) => {
  try {
    const post = await User.findAll();
    res.json({ post });
  } catch (e) {
    res.json({ e });
  }
});

export default route;
