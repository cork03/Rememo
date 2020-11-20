import express, { Response } from "express";
import UserCategory from "../models/userCategories";

const route = express.Router();

// カテゴリの新規登録

route.post("/", async (req: any, res: Response) => {
  const userId = req.user.id;
  const {
    userCategories: { name },
  } = req.body;
  try {
    await UserCategory.create({ userId, name });
    res.status(201).json({});
  } catch (e) {
    res.status(400).json({ e });
  }
});

export default route;
