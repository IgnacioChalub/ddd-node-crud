import Messager from "./messager";
import IHandler from "../handlers/handler";
import AccountCreatedHandler from "../../../user/aplication/eventHandlers/accountCreated.handler";

class AccountCreatedMessager implements Messager{
    handlers: IHandler[];

    constructor() {
        this.handlers = []
    }

    static create(): Messager{
        const messager: Messager = new AccountCreatedMessager();
        messager.addHandler(AccountCreatedHandler.create());
        return messager;
    }

    addHandler(hanlder: IHandler){
        this.handlers.push(hanlder);
    }

    sendMessage(event: any): void {
        for (const handler of this.handlers) {
            handler.handle(event);
        }
    }

}

export default AccountCreatedMessager;