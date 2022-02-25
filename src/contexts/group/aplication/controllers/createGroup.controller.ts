import {Response} from "express";
import CreateGroupAplicationService from "../services/createGroup.aplicationService";
import aplicationServices from "../services";
import Group from "../../domain/entities/group";
import Express from "../../../shared/types/express/types";
import AccountRequest = Express.AccountRequest;

const createGroupController = async (req: AccountRequest, res: Response) => {
    const { name, description } = req.body;
    const userId = req.userId;
    try {
        const createGroupAplicationService: CreateGroupAplicationService = aplicationServices.createGroupAplicationService;
        const group: Group = await createGroupAplicationService.createGroup(name, description, userId);
        res.status(200).json(group).send();
    }catch (e: any) {
        res.status(400).json({error: e.message}).send();
    }
};

export default createGroupController;