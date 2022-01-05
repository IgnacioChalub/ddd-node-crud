import IEmailValidator from "../../domain/infrastructureServices/emailValidator";
import * as EmailValidator from 'email-validator';

class EmailValidatorService implements IEmailValidator{

    static create(): IEmailValidator{
        return new EmailValidatorService();
    }

    isValid(email: string): boolean {
        return EmailValidator.validate(email);
    }
}

export default EmailValidatorService;