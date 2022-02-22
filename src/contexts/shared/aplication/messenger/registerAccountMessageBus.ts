import MessageBus from "./messageBus";
import IHandler from "../handlers/handler";
import RegisterAccountHandler from "../../../account/infrastructure/persistance/registerAccountHandler";

class RegisterAccountMessageBus extends MessageBus{

    private constructor(eventHandlers: IHandler[]) {
        super(eventHandlers);
    }

    static create(): RegisterAccountMessageBus{
        const eventHandlers: IHandler[] = [];
        eventHandlers.push(RegisterAccountHandler.create());
        return new RegisterAccountMessageBus(eventHandlers);
    }

}

export default RegisterAccountMessageBus;