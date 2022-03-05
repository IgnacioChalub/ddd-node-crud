import ParticipantPermissionChangeHandler from "../../../group/infrastructure/persistance/participantPermissionChangeHandler";
import IPublisher from "../../domain/publisher/publisher";
import IHandler from "../handlers/handler";
import AddLinkEventPublisher from "./addLinkEventPublisher";
import Publisher from "./publisher";

class ChangeParticipantPermissionPublisher extends Publisher{

    constructor(eventHandlers: IHandler[]) {
        super(eventHandlers);
    }

    static create(): IPublisher{
        const eventHandlers: IHandler[] = [];
        eventHandlers.push(ParticipantPermissionChangeHandler.create());
        return new ChangeParticipantPermissionPublisher(eventHandlers);
    }
}

export default ChangeParticipantPermissionPublisher;