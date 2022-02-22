import Suscribable from "../../../shared/domain/entities/suscribable";
import RegisterAccountDomainEvent from "../domainEvents/registerAccountDomainEvent";
import RegisterAccountMessageBus from "../../../shared/aplication/messenger/registerAccountMessageBus";

export class Account extends Suscribable{

    private id: string;
    private username: string;
    private email: string;
    private password: string;
    private firstName: string;
    private lastName: string;
    private birthdate: Date;
    private active: boolean;
    private createdAt: Date;
    private updatedAt: Date;

    private constructor(id: string, username: string, email: string, password: string, firstName: string, lastName: string, birthdate: Date, active: boolean, createdAt: Date, updatedAt: Date) {
        super();
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthdate = birthdate;
        this.active = active;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public static register(id: string, username: string, email: string, password: string, firstName: string, lastName: string, birthdate: Date, active: boolean, createdAt: Date, updatedAt: Date): Account {
        const account: Account = Account.create(id, username, email, password, firstName, lastName, birthdate, active, createdAt, updatedAt);
        account.notify(RegisterAccountDomainEvent.raise(account));
        return account;
    }


    public static create(id: string, username: string, email: string, password: string, firstName: string, lastName: string, birthdate: Date, active: boolean, createdAt: Date, updatedAt: Date): Account {
        const account = new Account(id, username, email, password, firstName, lastName, birthdate, active, createdAt, updatedAt);
        account.addMessageBus(RegisterAccountMessageBus.create());
        return account;
    }

    public static createFromJson(json: any): Account{
        return Account.create(json.id, json.username, json.email, json.password, json.firstName, json.lastName, json.birthdate, json.active, json.createdAt, json.updatedAt);
    }

    public getId(): string{
        return this.id;
    }

    public getUsername(): string{
        return this.username;
    }

    public getEmail(): string{
        return this.email;
    }

    public getPassword(): string{
        return this.password;
    }

    public isActive(): boolean{
        return this.active;
    }

    public getCreatedAt(): Date{
        return this.createdAt;
    }

    public getUpdatedAt(): Date{
        return this.updatedAt;
    }

    public getFirstName(): string{
        return this.firstName;
    }

    public getLastName(): string{
        return this.lastName;
    }

    public getBirthday(): Date{
        return this.birthdate;
    }



}