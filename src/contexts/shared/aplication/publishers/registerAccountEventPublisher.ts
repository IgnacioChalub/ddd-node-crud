import IPublisher from "../../domain/publisher/publisher";
import IEvent from "../../domain/domainEvents/event";
import IHandler from "../handlers/handler";
import RegisterAccountHandler from "../../../account/infrastructure/persistance/registerAccountHandler";

class RegisterAccountEventPublisher implements IPublisher {

    private eventHandlers: IHandler[];

    private constructor(eventHandlers: IHandler[]) {
        this.eventHandlers = eventHandlers;
    }

    static create(): IPublisher{
        const eventHandlers: IHandler[] = [];
        eventHandlers.push(RegisterAccountHandler.create());
        return new RegisterAccountEventPublisher(eventHandlers);
    }

    publish(event: IEvent): void {
        for (const handler of this.eventHandlers) {
            handler.handle(event);
        }
    }
}

export default RegisterAccountEventPublisher;