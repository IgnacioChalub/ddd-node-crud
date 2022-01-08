class AccountCreatedEvent{

    readonly username: string;
    readonly email: string;
    readonly createdAt: Date;

    private constructor(username: string, email: string, createdAt: Date) {
        this.username = username;
        this.email = email;
        this.createdAt = createdAt;
    }

    static create(username: string, email: string, createdAt: Date){
        return new AccountCreatedEvent(username, email, createdAt);
    }

}

export default AccountCreatedEvent;