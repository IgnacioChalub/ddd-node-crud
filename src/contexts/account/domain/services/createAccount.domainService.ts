import {Account} from "../entities/account";
import IEmailValidator from "../infrastructureServices/emailValidator";
import IEncrypter from "../infrastructureServices/encrypter";

class CreateAccountDomainService {

    private emailValidator: IEmailValidator;
    private encrypter: IEncrypter;

    private constructor(emailValidator: IEmailValidator, encrypter: IEncrypter) {
        this.emailValidator = emailValidator;
        this.encrypter = encrypter;
    }

    static create(emailValidator: IEmailValidator, encrypter: IEncrypter){
        return new CreateAccountDomainService(emailValidator, encrypter);
    }

    createAccount(id:string, username: string, email: string, password: string, firstName: string, lastName: string, birthdate: Date): Account {

        if(password.length < 7) throw Error('Password must have at least 7 characters');
        if(!this.emailValidator.isValid(email)) throw Error('Email not valid');

        const encryptedPassword = this.encrypter.encrypt(password);
        const date = new Date();

        return Account.create(id, username, email, encryptedPassword, firstName, lastName, birthdate, true, date, date);
    }

}

export default CreateAccountDomainService;