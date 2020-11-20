import express, { Response } from "express";

import Card from "../models/cards";

const route = express.Router();

// cardの取得

route.get("/", async (req: any, res: Response) => {
  const userId = req.user.id;
  try {
    const cards = await Card.get(userId);
    res.status(200).json({ cards });
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

route.patch("/:id", async (req: any, res: Response) => {
  const { id } = req.params;
  const {
    card: { links, ...reqBody },
  } = req.body;
  const userId = req.user.id;
  const { categoryIds, ...cardElements } = reqBody;
  cardElements.userId = userId;
  try {
    await Card.patch(cardElements, links, categoryIds, id);
    res.status(200).json({});
  } catch (e) {
    res.status(400).json({ e });
  }
});

// cardの削除

route.delete("/:id", async (req: any, res: Response) => {
  const { id } = req.params;
  try {
    const card = await Card.findByPk(id);
    await card!.destroy();
    res.status(200).json({});
  } catch (e) {
    res.status(400).json({ e });
  }
});

// cardのチェック

route.patch("/check/:id", async (req: any, res: Response) => {
  const { id } = req.params;
  try {
    await Card.check(id);
    res.status(200).json({});
  } catch (e) {
    res.status(400).json({ e });
  }
});
export default route;
