import IPublisher from "../../domain/publisher/publisher";
import IHandler from "../handlers/handler";
import IEvent from "../../domain/domainEvents/event";

abstract class Publisher implements IPublisher{

    eventHandlers: IHandler[];

    protected constructor(eventHandlers: IHandler[]) {
        this.eventHandlers = eventHandlers;
    }

    publish(event: IEvent): void {
        for (const handler of this.eventHandlers) {
            handler.handle(event);
        }
    }


}

export default Publisher;