import IPublisher from "../../domain/publisher/publisher";
import IHandler from "../handlers/handler";
import NewGroupHandler from "../../../group/infrastructure/persistance/newGroupHandler";
import Publisher from "./publisher";

class NewGroupEventPublisher extends Publisher{

    constructor(eventHandlers: IHandler[]) {
        super(eventHandlers);
    }

    static create(): IPublisher{
        const eventHandlers: IHandler[] = [];
        eventHandlers.push(NewGroupHandler.create());
        return new NewGroupEventPublisher(eventHandlers);
    }

}

export default NewGroupEventPublisher;