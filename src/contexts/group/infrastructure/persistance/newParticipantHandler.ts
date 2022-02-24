import IHandler from "../../../shared/aplication/handlers/handler";
// @ts-ignore
import db from "../../../shared/infrastructure/database/database";
import NewParticipantDomainEvent from "../../domain/events/newParticipantDomainEvent";
import Participant from "../../domain/entities/participant";

class NewParticipantHandler implements IHandler{
    constructor() {}

    static create(): NewParticipantHandler {
        return new NewParticipantHandler();
    }

    async handle(event: NewParticipantDomainEvent): Promise<void> {
        const participant: Participant = event.participant;
        return await db('participant')
            .insert({
                id: participant.getId(),
                username: participant.getUsername()
            });
    }
}

export default NewParticipantHandler;