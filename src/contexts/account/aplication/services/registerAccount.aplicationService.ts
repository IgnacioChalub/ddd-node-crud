import CreateAccountDomainService from "../../domain/services/createAccount.domainService";
import IAccountRepository from "../repositories/account.repository";
import IIdGenerator from "../infrastructureServices/idGenerator";
import Account from "../../domain/entities/account";

class RegisterAccountAplicationService {

    private accountRepository: IAccountRepository;
    private createAccountDomainService: CreateAccountDomainService;
    private idGenerator: IIdGenerator;

    private constructor(accountRepository: IAccountRepository, createAccountDomainService: CreateAccountDomainService, idGenerator: IIdGenerator) {
        this.accountRepository = accountRepository;
        this.createAccountDomainService = createAccountDomainService;
        this.idGenerator = idGenerator;
    }

    static create(accountRepository: IAccountRepository, createAccountDomainService: CreateAccountDomainService, idGenerator: IIdGenerator): RegisterAccountAplicationService{
        return new RegisterAccountAplicationService(accountRepository, createAccountDomainService, idGenerator);
    }

    async registerAccount(username: string, email: string, password: string, firstName: string, lastName: string, birthdate: Date): Promise<string> {
        let account: Account;
        let id: string;
        do{
            id =  this.idGenerator.generateId();
            account = await this.accountRepository.getAccountById(id);
        }while (account);

        if(await this.accountRepository.getAccountByUsername(username)) throw Error('Username already exists');
        if(await this.accountRepository.getAccountByEmail(email)) throw Error('Email already used');

        const newAccount: Account = this.createAccountDomainService.createAccount(id, username, email, password, firstName, lastName, birthdate);

        return newAccount.getId();
    }

}

export default RegisterAccountAplicationService;