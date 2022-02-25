import {Response} from "express";
import Express from "../../../shared/types/express/types";
import AccountRequest = Express.AccountRequest;
import aplicationServices from "../services";
import Group from "../../domain/entities/group";

const getALlParticipantsGroupsController = async (req: AccountRequest, res: Response) => {
    const userId = req.userId;
    try {
        const groups: Group[] = await aplicationServices.getAllParticipantsGroupAplicationService.getAll(userId);
        res.status(200).json(groups).send();
    }catch (e: any) {
        res.status(400).json({error: e.message}).send();
    }
};

export default getALlParticipantsGroupsController;