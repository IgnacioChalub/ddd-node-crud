import {Request, Response} from "express";
import aplicationServices from "../services";
import LoginAccountService from "../services/loginAccount.service";


const loginAccountController = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    try {
        const loginAccountService: LoginAccountService = aplicationServices.loginAccountService;
        const token: string = await loginAccountService.logIn(username, password);
        res.status(200).header('account-token', token).send();
    }catch (e: any) {
        res.status(400).json({error: e.message}).send();
    }
};

export default loginAccountController;