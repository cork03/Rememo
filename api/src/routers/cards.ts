import express, { Request, Response, NextFunction } from "express";
import Card from "../models/cards";

const route = express.Router();

// cardの取得

route.get("/", async (req: Request, res: Response) => {});

// cardの投稿

route.post("/", async (req: any, res: Response) => {
  const {
    card: { link, ...cardElements },
  } = req.body;
  const userId = req.user.id;
  cardElements.userId = userId;
  const { categoryIds } = cardElements;
  console.log(categoryIds);
  try {
    await Card.add(cardElements, link, categoryIds);
    res.status(201).json({});
  } catch (e) {
    res.status(400).json({ e });
  }
});

export default route;
