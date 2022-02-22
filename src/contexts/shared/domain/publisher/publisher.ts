import IEvent from "../domainEvents/event";
import IHandler from "../../aplication/handlers/handler";

interface IPublisher{
    eventHandlers: IHandler[];
    publish(event: IEvent): void;
}

export default IPublisher;