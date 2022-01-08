import IHandler from "../handlers/handler";

interface Messager{
    handlers: IHandler[];
    sendMessage(event: any): void;
    addHandler(hanlder: IHandler): void;
}

export default Messager;