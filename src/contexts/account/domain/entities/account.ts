
export class Account {

    private readonly id: string;
    private readonly username: string;
    private readonly email: string;
    private readonly password: string;
    private readonly firstName: string;
    private readonly lastName: string;
    private readonly birthdate: Date;
    private readonly active: boolean;
    private readonly createdAt: Date;
    private readonly updatedAt: Date;

    private constructor(id: string, username: string, email: string, password: string, firstName: string, lastName: string, birthdate: Date, active: boolean, createdAt: Date, updatedAt: Date) {
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

    public static create(id: string, username: string, email: string, password: string, firstName: string, lastName: string, birthdate: Date, active: boolean, createdAt: Date, updatedAt: Date): Account {
        return new Account(id, username, email, password, firstName, lastName, birthdate, active, createdAt, updatedAt);
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