// @ts-ignore
import db from "../../../shared/infrastructure/database/database";
import IHandler from "../../../shared/aplication/handlers/handler";
import Participant from "../../domain/entities/participant";
import ChangeParticipantPermissionEvent from "../../domain/events/changeParticipantPermissionEvent";
import Group from "../../domain/entities/group";

class ParticipantPermissionChangeHandler implements IHandler{
    constructor() {}

    static create(): ParticipantPermissionChangeHandler {
        return new ParticipantPermissionChangeHandler();
    }

    async handle(event: ChangeParticipantPermissionEvent): Promise<void> {
        const participant: Participant = event.participant;
        const group: Group = event.group;
        await db
            .select("*")
            .from("group-participant")
            .first()
            .where({
                participantId: participant.getId(),
                groupId: group.getId()
            })
            .del();

        if(group.isEditor(participant.getId())){
            await db('group-participant')
            .insert({
                participantId: participant.getId(),
                groupId: group.getId(),
                owner: false,
                editor: true,
                createdAt: group.getCreatedAt(),
                updatedAt: group.getUpdatedAt()
            });
        }

        if(group.isViewer(participant.getId())){
            await db('group-participant')
            .insert({
                participantId: participant.getId(),
                groupId: group.getId(),
                owner: false,
                editor: false,
                createdAt: group.getCreatedAt(),
                updatedAt: group.getUpdatedAt()
            });
        }

    }

}

export default ParticipantPermissionChangeHandler;