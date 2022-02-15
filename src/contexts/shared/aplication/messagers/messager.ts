import IHandler from "../handlers/handler";

interface Messager{
    handlers: IHandler[];
    sendMessage(event: any): void;
    addHandler(handler: IHandler): void;
}

export default Messager;