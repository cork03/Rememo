"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("./src/passport/passport");
const body_parser_1 = __importDefault(require("body-parser"));
const passport_1 = __importDefault(require("passport"));
const cors_1 = __importDefault(require("cors"));
const date_fns_1 = require("date-fns");
const auth_1 = __importDefault(require("./src/routers/auth"));
const cards_1 = __importDefault(require("./src/routers/cards"));
const links_1 = __importDefault(require("./src/routers/links"));
const userCategories_1 = __importDefault(require("./src/routers/userCategories"));
const app = express_1.default();
const port = 8080;
const options = {
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 200,
};
app.use(cors_1.default(options));
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.get("/", (req, res) => {
    res.json({ message: "ok" });
});
const jwtAuthenticated = [
    { path: "/userCategories", router: userCategories_1.default },
    { path: "/cards", router: cards_1.default },
    { path: "/links", router: links_1.default },
];
jwtAuthenticated.forEach((router) => {
    app.use(router.path, passport_1.default.authenticate("jwt", { session: false }), router.router);
});
app.use("/auth", auth_1.default);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
console.log(date_fns_1.format(new Date(), "MM/dd/yyyy"));
//# sourceMappingURL=index.js.map