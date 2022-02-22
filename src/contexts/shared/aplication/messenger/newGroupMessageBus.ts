import MessageBus from "./messageBus";
import IHandler from "../handlers/handler";
import NewGroupHandler from "../../../group/infrastructure/persistance/newGroupHandler";

class NewGroupMessageBus extends MessageBus{
    private constructor(eventHandlers: IHandler[]) {
        super(eventHandlers);
    }

    static create(): NewGroupMessageBus{
        const eventHandlers: IHandler[] = [];
        eventHandlers.push(NewGroupHandler.create());
        return new NewGroupMessageBus(eventHandlers);
    }
}

export default NewGroupMessageBus;