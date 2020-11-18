"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cards_1 = __importDefault(require("../models/cards"));
const route = express_1.default.Router();
route.get("/", async (req, res) => {
    const userId = req.user.id;
    try {
        const cards = await cards_1.default.get(userId);
        res.json({ cards });
    }
    catch (e) {
        res.json({ e });
    }
});
route.post("/", async (req, res) => {
    const { card: { links, ...reqBody }, } = req.body;
    const userId = req.user.id;
    const { categoryIds, ...cardElements } = reqBody;
    cardElements.userId = userId;
    try {
        await cards_1.default.add(cardElements, links, categoryIds);
        res.status(201).json({});
    }
    catch (e) {
        res.status(400).json({ e });
    }
});
route.put("/:id", async (req, res) => {
    const { card: { links, ...reqBody }, } = req.body;
    const userId = req.user.id;
    const { categoryIds, ...cardElements } = reqBody;
    cardElements.userId = userId;
    try {
        await cards_1.default.add(cardElements, links, categoryIds);
        res.status(201).json({});
    }
    catch (e) {
        res.status(400).json({ e });
    }
});
route.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const card = await cards_1.default.findByPk(id);
        await card.destroy();
        res.status(201).json({});
    }
    catch (e) {
        res.status(400).json({ e });
    }
});
exports.default = route;
//# sourceMappingURL=cards.js.map