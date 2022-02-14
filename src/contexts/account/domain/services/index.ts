import CreateAccountDomainService from "./createAccount.domainService";
import infrastructureServices from "../../infrastructure/services";

const createAccountDomainService: CreateAccountDomainService = CreateAccountDomainService.create(infrastructureServices.emailValidatorService, infrastructureServices.encrypterService);

const domainServices = {
    createAccountDomainService,
}

export default domainServices;