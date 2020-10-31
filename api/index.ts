import express from "express";
import "./src/passport/passport";
import userCategories from "./src/routers/userCategories";
import cards from "./src/routers/cards";
import auth from "./src/routers/auth";
import bodyParser from "body-parser";
import passport from "passport";

const app = express();
const port = 8080;

app.use(express.json());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

const jwtAuthenticated = [
  { path: "/userCategories", router: userCategories },
  { path: "/cards", router: cards },
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
