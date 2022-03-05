import {Response} from "express";
import Express from "../../../shared/types/express/types";
import aplicationServices from "../services";
import ChangeParticipantPermissionAplicationService from "../services/changeParticipantPermission.aplicationService";
import AccountRequest = Express.AccountRequest;


const changeParticipantPermissionController = async (req: AccountRequest, res: Response) => {
    const userId = req.userId;
    const groupId = req.params.groupId;
    const participantUsername = req.params.participantUsername;
    const { viewer, editor } = req.body;
    try {
        const changeParticipantPermissionAplicationService: ChangeParticipantPermissionAplicationService = aplicationServices.changeParticipantPermissionAplicationService;
        await changeParticipantPermissionAplicationService.changeParticipantPermission(userId, participantUsername, groupId, viewer, editor);
        res.status(200).send();
    }catch (e: any) {
        res.status(400).json({error: e.message}).send();
    }
};

export default changeParticipantPermissionController;