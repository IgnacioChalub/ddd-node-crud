export class Account{
    private readonly id: string;
    private username: string;
    private email: string;
    private password: string;

    private constructor(id: string, username: string, email: string, password: string) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public static create(id: string, username: string, email: string, password: string): Account {
        return new Account(id, username, email, password);
    }

    getId(): string{
        return this.id;
    }

    getPassword(): string{
        return this.password;
    }
}