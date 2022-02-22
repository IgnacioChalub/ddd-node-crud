import CreateAccountDomainService from "./createAccount.domainService";
import infrastructureServices from "../../infrastructure/services";
import RegisterAccountEventPublisher from "../../../shared/aplication/publishers/registerAccountEventPublisher";

const createAccountDomainService: CreateAccountDomainService = CreateAccountDomainService.create(infrastructureServices.emailValidatorService, infrastructureServices.encrypterService, RegisterAccountEventPublisher.create());

const domainServices = {
    createAccountDomainService,
}

export default domainServices;