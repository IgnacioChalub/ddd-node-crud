import IHandler from "../../../shared/aplication/handlers/handler";
//@ts-ignore
import db from "../../../shared/infrastructure/database/database";
import {Account} from "../../domain/entities/account";
import RegisterAccountDomainEvent from "../../domain/domainEvents/registerAccountDomainEvent";

class RegisterAccountHandler implements IHandler{

    constructor() {}

    static create(): RegisterAccountHandler {
        return new RegisterAccountHandler();
    }

    async handle(event: RegisterAccountDomainEvent): Promise<void> {
        const account: Account = event.getAccount();
        return await db('account')
            .insert({
                id: account.getId(),
                username: account.getUsername(),
                email: account.getEmail(),
                password: account.getPassword(),
                firstName: account.getFirstName(),
                lastName: account.getLastName(),
                birthday: account.getBirthday(),
                active: account.isActive(),
                createdAt: account.getCreatedAt(),
                updatedAt: account.getUpdatedAt()
            });
    }


}

export default RegisterAccountHandler;