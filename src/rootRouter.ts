import { Request, Response, Router } from "express";
import { Test } from "./sequelize";

const rootRouter = Router();

rootRouter.get("/", (req: Request, res: Response) =>
  res.send("김선규엘123123123리asdasddasasdadads스")
);

rootRouter.get("/content", async (req: Request, res: Response) => {
  const tests = await Test.findAll({});
  const result = tests.map(({ content }) => ({
    text: content,
  }));

  return res.json(result);
});

rootRouter.post("/content", async (req: Request, res: Response) => {
  await Test.create({ content: req.body.text });

  return res.json({ content: req.body.text });
});

export default rootRouter;
