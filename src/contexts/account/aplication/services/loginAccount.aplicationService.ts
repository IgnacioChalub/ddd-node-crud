import IAccountRepository from "../repositories/account.repository";
import ILogger from "../infrastructureServices/logger";
import IPasswordComparator from "../infrastructureServices/passwordComparator";
import Account from "../../domain/entities/account";

class LoginAccountAplicationService {

    private accountRepository: IAccountRepository;
    private passwordComparator: IPasswordComparator;
    private logger: ILogger;

    private constructor(accountRepository: IAccountRepository, passwordComparator: IPasswordComparator, logger: ILogger) {
        this.accountRepository = accountRepository;
        this.passwordComparator = passwordComparator;
        this.logger = logger;
    }

    static create(accountRepository: IAccountRepository, passwordComparator: IPasswordComparator, logger: ILogger){
        return new LoginAccountAplicationService(accountRepository, passwordComparator, logger);
    }

    async logIn(username: string, password: string): Promise<string>{
        const account: Account = await this.accountRepository.getAccountByUsername(username);
        if(!account) throw Error('Account not found');
        if(!await this.passwordComparator.compare(password, account.getPassword())) throw Error('Incorrect password');
        if(!account.isActive()) throw Error('Could not access account');
        return this.logger.login(account.getId());
    }

}

export default LoginAccountAplicationService;