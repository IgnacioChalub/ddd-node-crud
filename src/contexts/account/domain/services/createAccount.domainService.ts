import IEmailValidator from "../infrastructureServices/emailValidator";
import IEncrypter from "../infrastructureServices/encrypter";
import Account from "../entities/account";
import IPublisher from "../../../shared/domain/publisher/publisher";
import IEvent from "../../../shared/domain/domainEvents/event";
import RegisterAccountDomainEvent from "../domainEvents/registerAccountDomainEvent";

class CreateAccountDomainService {

    private emailValidator: IEmailValidator;
    private encrypter: IEncrypter;
    private publisher: IPublisher;


    constructor(emailValidator: IEmailValidator, encrypter: IEncrypter, publisher: IPublisher) {
        this.emailValidator = emailValidator;
        this.encrypter = encrypter;
        this.publisher = publisher;
    }

    static create(emailValidator: IEmailValidator, encrypter: IEncrypter, publisher: IPublisher){
        return new CreateAccountDomainService(emailValidator, encrypter, publisher);
    }

    createAccount(id:string, username: string, email: string, password: string, firstName: string, lastName: string, birthdate: Date): Account {

        if(password.length < 7) throw Error('Password must have at least 7 characters');
        if(!this.emailValidator.isValid(email)) throw Error('Email not valid');

        const encryptedPassword = this.encrypter.encrypt(password);
        const date = new Date();

        const event: RegisterAccountDomainEvent = Account.register(id, username, email, encryptedPassword, firstName, lastName, birthdate, true, date, date);
        this.publisher.publish(event);

        return event.getAccount();
    }

}

export default CreateAccountDomainService;