import CreateAccountDomainService from "./createAccount.domainService";
import infrastructureServices from "../../infrastructure/services";
import UserCompletedRegistrationMessager from "../../../shared/aplication/messagers/UserCompletedRegistrationMessager";

const createAccountDomainService: CreateAccountDomainService = CreateAccountDomainService.create(infrastructureServices.emailValidatorService, infrastructureServices.encrypterService, UserCompletedRegistrationMessager.create());

const domainServices = {
    createAccountDomainService,
}

export default domainServices;