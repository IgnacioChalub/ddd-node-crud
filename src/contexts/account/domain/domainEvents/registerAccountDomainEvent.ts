import IEvent from "../../../shared/domain/domainEvents/event";
import Account from "../entities/account";

class RegisterAccountDomainEvent implements IEvent{

    private account: Account;
    raisedAt: Date;

    private constructor(account: Account, raisedAt: Date) {
        this.account = account;
        this.raisedAt = raisedAt;
    }

    static raise(account: Account): IEvent{
        return new RegisterAccountDomainEvent(account, new Date());
    }

    public getAccount(): Account{
        return this.account;
    }

}

export default RegisterAccountDomainEvent;