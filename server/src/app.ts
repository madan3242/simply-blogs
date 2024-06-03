import express, { Request, Response } from "express"
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";
import router from "./routers";
import { handleError, notFound } from "./middlewares/error";
import helmet from "helmet";

const app = express();

/**
 * Middlewares
 */
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

/**
 * Api Routes
 */
app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  return res.status(200).send("Tested Ok");
});

/**
 * Error Middlewares
 */
app.use(handleError);
app.use(notFound);

export default app;