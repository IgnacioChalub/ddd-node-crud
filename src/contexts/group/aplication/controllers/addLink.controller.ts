import {Response} from "express";
import AddLinkAplicationService from "../services/addLink.aplicationService";
import aplicationServices from "../services";
import Group from "../../domain/entities/group";
import Express from "../../../shared/types/express/types";
import AccountRequest = Express.AccountRequest;

const addLinkController = async (req: AccountRequest, res: Response) => {
    const { title, description, url } = req.body;
    const userId = req.userId;
    const groupId = req.params.groupId;
    try {
        const addLinkAplicationService: AddLinkAplicationService = aplicationServices.addLinkAplicationService;
        const group: Group = await addLinkAplicationService.addLink(title, description, url, userId, groupId);
        res.status(200).json(group).send();
    }catch (e: any) {
        res.status(400).json({error: e.message}).send();
    }
};

export default addLinkController;