import express, { Request, Response } from "express"
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";
import router from "./routers";
import { handleError, notFound } from "./middlewares/error";
import helmet from "helmet";
// import path from "path";

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

app.get("/", (req, res) => {
  return res.status(200).send("Tested Ok");
});

// app.use(express.static(path.join(__dirname, "../../client/dist")));
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../../client/dist/index.html"))
// })

/**
 * Error Middlewares
 */
app.use(handleError);
app.use(notFound);

export default app;