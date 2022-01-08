
export class Account {

    private readonly id: string;
    private username: string;
    private email: string;
    private readonly password: string;
    private createdAt: Date;
    private updatedAt: Date;

    private constructor(id: string, username: string, email: string, password: string, createdAt: Date, updatedAt: Date) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public static create(id: string, username: string, email: string, password: string, createdAt: Date, updatedAt: Date): Account {
        return new Account(id, username, email, password, createdAt, updatedAt);
    }

    public static createFromJson(json: any): Account{
        return Account.create(json.id, json.username, json.email, json.password, json.createdAt, json.updatedAt);
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

    public getCreatedAt(): Date{
        return this.createdAt;
    }

    public getUpdatedAt(): Date{
        return this.updatedAt;
    }




}