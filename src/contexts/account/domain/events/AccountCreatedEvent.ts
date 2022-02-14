class AccountCreatedEvent{

    readonly id: string;
    readonly username: string;
    readonly email: string;
    readonly createdAt: Date;

    private constructor(id: string, username: string, email: string, createdAt: Date) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.createdAt = createdAt;
    }

    static create(id: string, username: string, email: string, createdAt: Date){
        return new AccountCreatedEvent(id, username, email, createdAt);
    }

}

export default AccountCreatedEvent;