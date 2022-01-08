
class User{

    private id:string;
    private username: string;
    private email: string;
    private name: string;
    private lastName: string;
    private birthdate: Date;
    private active: boolean;

    constructor(id: string, username: string, email: string, name: string, lastName: string, birthdate: Date, active: boolean) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.name = name;
        this.lastName = lastName;
        this.birthdate = birthdate;
        this.active = active;
    }

    static create(id: string, username: string, email: string, name: string, lastName: string, birthdate: Date, active: boolean): User{
        return new User(id, username, email, name, lastName, birthdate, active);
    }
}