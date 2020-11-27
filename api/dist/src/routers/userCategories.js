"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userCategories_1 = __importDefault(require("../models/userCategories"));
const route = express_1.default.Router();
route.get("/:id", async (req, res) => {
    const userId = req.user.id;
    try {
        const userCategories = await userCategories_1.default.findAll({ where: { userId } });
        res.status(201).json({ userCategories });
    }
    catch (e) {
        res.status(400).json({ e });
    }
});
route.post("/", async (req, res) => {
    const userId = req.user.id;
    const { userCategories: { name }, } = req.body;
    try {
        await userCategories_1.default.create({ userId, name });
        res.status(201).json({});
    }
    catch (e) {
        res.status(400).json({ e });
    }
});
exports.default = route;
//# sourceMappingURL=userCategories.js.map