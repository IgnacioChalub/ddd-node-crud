import IHandler from "../../../shared/aplication/handlers/handler";

class AccountCreatedHandler implements IHandler{

    static create(): IHandler{
        return new AccountCreatedHandler();
    }

    handle(event:any): void {
        const { username, email, createdAt } = event;
       
    }

}

export default AccountCreatedHandler;