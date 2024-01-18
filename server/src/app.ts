import express, { Request, Response } from "express"
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";

const app = express();

/**
 * Middlewares
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
  return res.status(201).send("Tested Ok");
});

export default app;