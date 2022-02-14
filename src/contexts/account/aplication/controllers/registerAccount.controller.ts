import {Request, Response} from "express";
import aplicationServices from "../services";

const RegisterAccountController = async (req: Request, res: Response) => {
    const { username, email, password , firstName, lastName, birthday } = req.body;
    try{
        const registerAccountService = aplicationServices.registerAccountService;
        const id: string = await registerAccountService.registerAccount(username, email, password, firstName, lastName, birthday);
        res.status(201).json(id).send();
    }catch (e: any) {
        res.status(400).json({error: e.message}).send();
    }
};

export default RegisterAccountController;