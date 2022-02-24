import {NextFunction, Request, Response} from "express";
import jwt from "jsonwebtoken";
import Express from "../../types/express/types";
import AccountRequest = Express.AccountRequest;

interface Payload{
    _id: string;
    iat: number;
    exp: number;
}

export const UserTokenValidation = (req: AccountRequest, res: Response, next: NextFunction) => {
    try{
        const token = req.header('auth-token');
        if(!token) return res.status(401).json("Access denied");
        const payload = jwt.verify(token, 'secretiveness') as Payload;
        req.userId = payload._id;
        next();
    }catch (e) {
        res.status(400).send('Invalid Token');
    }
}
