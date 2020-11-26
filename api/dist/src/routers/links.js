"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cardLinks_1 = __importDefault(require("../models/cardLinks"));
const route = express_1.default.Router();
route.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const link = await cardLinks_1.default.findByPk(id);
        await link.destroy();
        res.status(200).json({});
    }
    catch (e) {
        res.status(400).json({ e });
    }
});
exports.default = route;
//# sourceMappingURL=links.js.map