import IPublisher from "../../domain/publisher/publisher";
import IHandler from "../handlers/handler";
import Publisher from "./publisher";
import SaveLinkHandler from "../../../group/infrastructure/persistance/saveLinkHandler";

class AddLinkEventPublisher extends Publisher{

    constructor(eventHandlers: IHandler[]) {
        super(eventHandlers);
    }

    static create(): IPublisher{
        const eventHandlers: IHandler[] = [];
        eventHandlers.push(SaveLinkHandler.create());
        return new AddLinkEventPublisher(eventHandlers);
    }
}

export default AddLinkEventPublisher;