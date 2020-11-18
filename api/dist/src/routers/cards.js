"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cardLinks_1 = __importDefault(require("../models/cardLinks"));
const cards_1 = __importDefault(require("../models/cards"));
const userCategories_1 = __importDefault(require("../models/userCategories"));
const route = express_1.default.Router();
route.get("/", async (req, res) => {
    const userId = req.user.id;
    try {
        const cards = await cards_1.default.findAll({
            where: { userId },
            include: [{ model: userCategories_1.default, as: 'userCategories' }, { model: cardLinks_1.default }]
        });
        res.status(200).json({ cards });
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
route.patch("/:id", async (req, res) => {
    const { id } = req.params;
    const { card: { links, ...reqBody }, } = req.body;
    const userId = req.user.id;
    const { categoryIds, ...cardElements } = reqBody;
    cardElements.userId = userId;
    try {
        await cards_1.default.patch(cardElements, links, categoryIds, id);
        res.status(200).json({});
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
        res.status(200).json({});
    }
    catch (e) {
        res.status(400).json({ e });
    }
});
route.patch("/check/:id", async (req, res) => {
});
exports.default = route;
//# sourceMappingURL=cards.js.map