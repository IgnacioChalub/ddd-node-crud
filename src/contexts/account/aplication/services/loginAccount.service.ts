import IAccountRepository from "../repositories/account.repository";
import {Account} from "../../domain/entities/account";
import ILogger from "../infrastructureServices/logger";
import IPasswordComparator from "../infrastructureServices/passwordComparator";

class LoginAccountService{

    private accountRepository: IAccountRepository;
    private passwordComparator: IPasswordComparator;
    private logger: ILogger;

    private constructor(accountRepository: IAccountRepository, passwordComparator: IPasswordComparator, logger: ILogger) {
        this.accountRepository = accountRepository;
        this.passwordComparator = passwordComparator;
        this.logger = logger;
    }

    static create(accountRepository: IAccountRepository, passwordComparator: IPasswordComparator, logger: ILogger){
        return new LoginAccountService(accountRepository, passwordComparator, logger);
    }

    async logIn(username: string, password: string): Promise<string>{
        const accountJson: JSON = await this.accountRepository.getAccountByUsername(username);
        if(!accountJson) throw Error('Account not found');
        const account: Account =  Account.createFromJson(accountJson);
        if(!await this.passwordComparator.compare(password, account.getPassword())) throw Error('Incorrect password');
        if(!account.isActive()) throw Error('Could not access account');
        return this.logger.login(account.getId());
    }

}

export default LoginAccountService;