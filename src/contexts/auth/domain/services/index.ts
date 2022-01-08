import CreateAccountDomainService from "./createAccount.domainService";
import infrastructureServices from "../../infrastructure/services";
import AccountCreatedMessager from "../../../shared/aplication/messagers/AccountCreatedMessager";

const createAccountDomainService: CreateAccountDomainService = CreateAccountDomainService.create(infrastructureServices.emailValidatorService, infrastructureServices.encrypterService, AccountCreatedMessager.create());

const domainServices = {
    createAccountDomainService,
}

export default domainServices;