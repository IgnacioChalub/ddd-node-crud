import Event from "../../domain/domainEvents/event";

interface IHandler{
    handle(event: Event): void;
}

export default IHandler;