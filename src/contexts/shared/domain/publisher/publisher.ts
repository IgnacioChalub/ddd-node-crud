import IEvent from "../domainEvents/event";

interface IPublisher{
    publish(event: IEvent): void
}

export default IPublisher;