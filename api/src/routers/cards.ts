import express, { Request, Response, NextFunction } from "express";
import Card from "../models/cards";

const route = express.Router();

// cardの取得

route.get("/", async (req: Request, res: Response) => {});

// cardの投稿

route.post("/", async (req: any, res: Response) => {
  const {
    card: { links, ...reqBody },
  } = req.body;
  const userId = req.user.id;
  const { categoryIds, ...cardElements } = reqBody;
  cardElements.userId = userId;
  try {
    await Card.add(cardElements, links, categoryIds);
    res.status(201).json({});
  } catch (e) {
    res.status(400).json({ e });
  }
});

export default route;
