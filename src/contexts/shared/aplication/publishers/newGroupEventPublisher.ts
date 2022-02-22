import IPublisher from "../../domain/publisher/publisher";
import IHandler from "../handlers/handler";
import IEvent from "../../domain/domainEvents/event";
import NewGroupHandler from "../../../group/infrastructure/persistance/newGroupHandler";

class NewGroupEventPublisher implements IPublisher{

    eventHandlers: IHandler[];

    private constructor(eventHandlers: IHandler[]) {
        this.eventHandlers = eventHandlers;
    }

    static create(): IPublisher{
        const eventHandlers: IHandler[] = [];
        eventHandlers.push(NewGroupHandler.create());
        return new NewGroupEventPublisher(eventHandlers);
    }

    publish(event: IEvent): void {
        for (const handler of this.eventHandlers) {
            handler.handle(event);
        }
    }

}

export default NewGroupEventPublisher;