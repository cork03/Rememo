import express, { Response } from "express";

import UserSetting from "../models/userSetting";

const route = express.Router();

// userSettingの取得

route.get("/", async (req: any, res: Response) => {
  const userId = req.user.id;
  try {
    const userSettings = await UserSetting.findByPk(userId);
    res.status(200).json({ userSettings });
   } catch (e) {
    res.json({ e });
  }
});

// userSettingの編集


route.patch("/:id", async (req: any, res: Response) => {
  const body = req.body;
  const { id } = req.params;
  try {
    await UserSetting.update(body,{where: {id}});
    res.status(200).json({});
  } catch (e) {
    res.status(400).json({ e });
  }
});

export default route;
