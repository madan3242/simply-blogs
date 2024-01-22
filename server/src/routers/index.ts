import { Router } from "express";
import userRouter from "./users.routers"

const router = Router();

router.use("/user", userRouter);

export default router