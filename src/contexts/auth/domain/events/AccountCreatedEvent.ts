class AccountCreatedEvent{

    readonly username: string;
    readonly email: string;

    private constructor(username: string, email: string) {
        this.username = username;
        this.email = email;
    }

    static create(username: string, email: string){
        return new AccountCreatedEvent(username, email);
    }

}

export default AccountCreatedEvent;