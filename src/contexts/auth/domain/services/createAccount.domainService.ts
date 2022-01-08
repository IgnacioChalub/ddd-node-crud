import {Account} from "../entities/account";
import IEmailValidator from "../infrastructureServices/emailValidator";
import IEncrypter from "../infrastructureServices/encrypter";
import ObservableService from "../../../shared/domain/services/observableService";
import AccountCreatedEvent from "../events/AccountCreatedEvent";

class CreateAccountDomainService extends ObservableService{

    emailValidator: IEmailValidator;
    encrypter: IEncrypter;

    private constructor(emailValidator: IEmailValidator, encrypter: IEncrypter) {
        super();
        this.emailValidator = emailValidator;
        this.encrypter = encrypter;
    }

    static create(emailValidator: IEmailValidator, encrypter: IEncrypter){
        return new CreateAccountDomainService(emailValidator, encrypter);
    }

    createAccount(id:string, username: string, email: string, password: string): Account {

        if(password.length < 7) throw Error('Password must have at least 7 characters');
        if(!this.emailValidator.isValid(email)) throw Error('Email not valid');

        const encryptedPassword = this.encrypter.encrypt(password);

        this.notify(AccountCreatedEvent.create(username, email));

        const date = new Date();

        return Account.create(id, username, email, encryptedPassword, date, date);
    }

}

export default CreateAccountDomainService;