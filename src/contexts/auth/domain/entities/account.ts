export class Account{

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

    getId(): string{
        return this.id;
    }

    getUsername(): string{
        return this.username;
    }

    getEmail(): string{
        return this.email;
    }

    getPassword(): string{
        return this.password;
    }

    getCreatedAt(): Date{
        return this.createdAt;
    }

    getUpdatedAt(): Date{
        return this.updatedAt;
    }




}