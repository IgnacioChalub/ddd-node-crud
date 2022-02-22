import Event from "../../domain/domainEvents/event";
import IHandler from "../handlers/handler";

abstract class MessageBus {

    private eventHandlers: IHandler[];

     protected constructor(eventHandlers: IHandler[]) {
        this.eventHandlers = eventHandlers;
    }

    notify(event: Event): void{
        for (const handler of this.eventHandlers) {
            handler.handle(event);
        }
    }

}

export default MessageBus;