import Event from "../domainEvents/event";
import MessageBus from "../../aplication/messenger/messageBus";

abstract class Suscribable{

    private messageBuses: MessageBus[];

    protected constructor() {
        this.messageBuses = [];
    }

    public addMessageBus(messageBus: MessageBus): void {
        this.messageBuses.push(messageBus);
    }

    public notify(event: Event): void{
        for (const messageBus of this.messageBuses) {
            messageBus.notify(event);
        }
    }
}

export default Suscribable;