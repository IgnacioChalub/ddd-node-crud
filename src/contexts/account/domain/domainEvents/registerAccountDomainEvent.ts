import Event from "../../../shared/domain/domainEvents/event";
import {Account} from "../entities/account";

class RegisterAccountDomainEvent implements Event{

    account: Account;
    raisedAt: Date;

    private constructor(account: Account, raisedAt: Date) {
        this.account = account;
        this.raisedAt = raisedAt;
    }

    static raise(account: Account): RegisterAccountDomainEvent{
        return new RegisterAccountDomainEvent(account, new Date());
    }

    public getAccount(): Account{
        return this.account;
    }

}

export default RegisterAccountDomainEvent;