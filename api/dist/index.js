"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("./src/passport/passport");
const userCategories_1 = __importDefault(require("./src/routers/userCategories"));
const cards_1 = __importDefault(require("./src/routers/cards"));
const auth_1 = __importDefault(require("./src/routers/auth"));
const body_parser_1 = __importDefault(require("body-parser"));
const passport_1 = __importDefault(require("passport"));
const app = express_1.default();
const port = 8080;
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.get("/", (req, res) => {
    res.json({ message: "ok" });
});
const jwtAuthenticated = [
    { path: "/userCategories", router: userCategories_1.default },
    { path: "/cards", router: cards_1.default },
];
jwtAuthenticated.forEach((router) => {
    app.use(router.path, passport_1.default.authenticate("jwt", { session: false }), router.router);
});
app.use("/auth", auth_1.default);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map