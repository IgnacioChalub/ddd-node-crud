import RegisterAccountService from "./registerAccount.service";
import AccountRepository from "../repositories/account.repository";
import {AccountDAO} from "../../infrastructure/persistance/accountDAO";
import domainServices from "../../domain/services";
import infrastructureServices from "../../infrastructure/services";
import LoginAccountService from "./loginAccount.service";


const accountRepository: AccountRepository = new AccountDAO();

const registerAccountService: RegisterAccountService = RegisterAccountService.create(accountRepository, domainServices.createAccountDomainService, infrastructureServices.idGeneratorService);
const loginAccountService: LoginAccountService = LoginAccountService.create(accountRepository, infrastructureServices.passwordComparatorService, infrastructureServices.logger);

const aplicationServices = {
    registerAccountService,
    loginAccountService
};

export default aplicationServices;