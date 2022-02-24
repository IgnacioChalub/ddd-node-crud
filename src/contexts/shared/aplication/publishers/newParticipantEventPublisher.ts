import Publisher from "./publisher";
import IHandler from "../handlers/handler";
import IPublisher from "../../domain/publisher/publisher";
import NewParticipantHandler from "../../../group/infrastructure/persistance/newParticipantHandler";

class NewParticipantEventPublisher extends Publisher{
    constructor(eventHandlers: IHandler[]) {
        super(eventHandlers);
    }

    static create(): IPublisher{
        const eventHandlers: IHandler[] = [];
        eventHandlers.push(NewParticipantHandler.create());
        return new NewParticipantEventPublisher(eventHandlers);
    }
}

export default NewParticipantEventPublisher;