import express, { Response } from "express";

import User from "../models/user";

const route = express.Router();

// userの取得

route.get("/", async (req: any, res: Response) => {
  const userId = req.user.id;
  try {
    const user = await User.findByPk(userId);
    res.status(200).json({ user });
  } catch (e) {
    res.json({ e });
  }
});

// userの削除

route.delete("/:id", async (req: any, res: Response) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    await user!.destroy();
    res.status(200).json({});
  } catch (e) {
    res.status(400).json({ e });
  }
});

export default route;
