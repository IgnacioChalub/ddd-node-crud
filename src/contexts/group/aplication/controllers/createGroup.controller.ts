import {Request, Response} from "express";
import CreateGroupAplicationService from "../services/createGroup.aplicationService";
import aplicationServices from "../services";
import Group from "../../domain/entities/group";

const createGroupController = async (req: Request, res: Response) => {
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