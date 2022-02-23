import IPublisher from "../../domain/publisher/publisher";
import IHandler from "../handlers/handler";
import RegisterAccountHandler from "../../../account/infrastructure/persistance/registerAccountHandler";
import Publisher from "./publisher";

class RegisterAccountEventPublisher extends Publisher{

    constructor(eventHandlers: IHandler[]) {
        super(eventHandlers);
    }

    static create(): IPublisher{
        const eventHandlers: IHandler[] = [];
        eventHandlers.push(RegisterAccountHandler.create());
        return new RegisterAccountEventPublisher(eventHandlers);
    }

}

export default RegisterAccountEventPublisher;