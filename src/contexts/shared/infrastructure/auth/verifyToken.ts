import {Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken";

interface Payload{
    _id: string;
    iat: number;
    exp: number;
    admin: boolean;
}

export const UserTokenValidation = (req: Request, res: Response, next: NextFunction) => {
    try{
        const token = req.header('auth-token');
        if(!token) return res.status(401).json("Access denied");
        const payload = jwt.verify(token, 'secretiveness') as Payload;
        if(payload.admin === true) return res.status(401).json("Access denied. Not user");
        req.userId = payload._id;
        next();
    }catch (e) {
        res.status(400).send('Invalid Token');
    }
}
