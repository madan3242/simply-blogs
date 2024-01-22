import { NextFunction, Request, Response } from "express";
import { AsyncHandler } from "../utils/AsyncHandler";
import { ErrorHandler } from "../utils/ErrorHandler";

export const signup = AsyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return next(new ErrorHandler(401, 'Username or Email or Password is missing'));
    }
})

export const login = AsyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return next(new ErrorHandler(401, 'Username or Password is missing'));
    }
})