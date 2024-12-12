import express from "express";
import path from "path";
import logger from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import rootRouter from "./rootRouter";

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(logger("dev"));

app.use("/", rootRouter);

export default app;
