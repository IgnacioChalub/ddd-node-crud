import RegisterAccountAplicationService from "./registerAccount.aplicationService";
import AccountRepository from "../repositories/account.repository";
import {AccountDAO} from "../../infrastructure/persistance/accountDAO";
import domainServices from "../../domain/services";
import infrastructureServices from "../../infrastructure/services";
import LoginAccountAplicationService from "./loginAccount.aplicationService";


const accountRepository: AccountRepository = new AccountDAO();

const registerAccountService: RegisterAccountAplicationService = RegisterAccountAplicationService.create(accountRepository, domainServices.createAccountDomainService, infrastructureServices.idGeneratorService);
const loginAccountService: LoginAccountAplicationService = LoginAccountAplicationService.create(accountRepository, infrastructureServices.passwordComparatorService, infrastructureServices.logger);

const aplicationServices = {
    registerAccountService,
    loginAccountService
};

export default aplicationServices;