import express, { Request, Response, NextFunction } from "express";
import Card from "../models/cards";

const route = express.Router();

// cardの取得

route.get("/", async (req: any, res: Response) => {
  const userId = req.user.id;
  try {
    const cards = await Card.get(userId);
    res.json({ cards });
  } catch (e) {
    res.json({ e });
  }
});

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

// cardの編集

route.put("/:id", async (req: any, res: Response) => {
  const {id} = req.params;
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

// cardの削除

route.delete("/:id", async (req: any, res: Response) => {
  const {id} = req.params
  try {
    const card =  await Card.findByPk(id);
    await card!.destroy()
    res.status(201).json({});
  } catch (e) {
    res.status(400).json({ e });
  }
});

export default route;
