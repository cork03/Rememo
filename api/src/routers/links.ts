import express, { Response } from "express";
import CardLinks from "../models/cardLinks";

const route = express.Router();

route.delete("/:id", async (req: any, res: Response) => {
  const { id } = req.params;
  try {
    const link = await CardLinks.findByPk(id);
    await link!.destroy();
    res.status(200).json({});
  } catch (e) {
    res.status(400).json({ e });
  }
});

export default route;
