"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("../models/user"));
const route = express_1.default.Router();
route.get("/test", async (req, res) => {
    try {
        const post = await user_1.default.findAll();
        res.json({ post });
    }
    catch (e) {
        res.json({ e });
    }
});
exports.default = route;
//# sourceMappingURL=user.js.map