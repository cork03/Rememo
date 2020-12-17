import express from "express";
import "./src/passport/passport";
import bodyParser from "body-parser";
import passport from "passport";
import cors from "cors";
import { format } from "date-fns";
import auth from "./src/routers/auth";
import cards from "./src/routers/cards";
import links from "./src/routers/links";
import userCategories from "./src/routers/userCategories";
import users from "./src/routers/users";

const app = express();
const port = 8080;

const options = {
  origin: "http://localhost:3000",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(options));

app.use(express.json());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

const jwtAuthenticated = [
  { path: "/userCategories", router: userCategories },
  { path: "/cards", router: cards },
  { path: "/links", router: links },
  { path: "/users", router: users },
];

jwtAuthenticated.forEach((router) => {
  app.use(
    router.path,
    passport.authenticate("jwt", { session: false }),
    router.router
  );
});

app.use("/auth", auth);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

console.log(format(new Date(), "MM/dd/yyyy"));
