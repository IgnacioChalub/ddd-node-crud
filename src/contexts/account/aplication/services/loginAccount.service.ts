import IAccountRepository from "../repositories/account.repository";
import {Account} from "../../domain/entities/account";
import ILogger from "../infrastructureServices/logger";
import IPasswordComparator from "../infrastructureServices/passwordComparator";

class LoginAccountService{

    private accountRepository: IAccountRepository;
    private passwordComparator: IPasswordComparator;
    private logger: ILogger;

    constructor(accountRepository: IAccountRepository, passwordComparator: IPasswordComparator, logger: ILogger) {
        this.accountRepository = accountRepository;
        this.passwordComparator = passwordComparator;
        this.logger = logger;
    }

    static create(accountRepository: IAccountRepository, passwordComparator: IPasswordComparator, logger: ILogger){
        return new LoginAccountService(accountRepository, passwordComparator, logger);
    }

    async logIn(username: string, password: string): Promise<string>{
        const account: Account =  Account.createFromJson( await this.accountRepository.getAccountByUsername(username));
        console.log(account);
        if(!account) throw Error('Account not found');
        if(!await this.passwordComparator.compare(password, account.getPassword())) throw Error('Incorrect password');
        if(!account.isActive()) throw Error('Complete registration');
        return this.logger.login(account.getId());
    }

}

export default LoginAccountService;