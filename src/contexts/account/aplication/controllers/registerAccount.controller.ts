import {Request, Response} from "express";
import aplicationServices from "../services";

function isValidDate(dateString: string) {
    const regEx = /^\d{4}-\d{2}-\d{2}$/;
    return dateString.match(regEx) != null;
}

const RegisterAccountController = async (req: Request, res: Response) => {
    const { username, email, password , firstName, lastName, birthdate } = req.body;
    try{
        if(!isValidDate(birthdate)) throw Error("Invalid date");
        const registerAccountService = aplicationServices.registerAccountService;
        const date: Date = new Date(birthdate);
        const id: string = await registerAccountService.registerAccount(username, email, password, firstName, lastName, date);
        res.status(201).json(id).send();
    }catch (e: any) {
        res.status(400).json({error: e.message}).send();
    }
};



export default RegisterAccountController;