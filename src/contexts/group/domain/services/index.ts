import CreateGroupDomainService from "./createGroup.domainService";
import AddLinkDomainService from "./addLink.domainService";
import IUrlValidator from "../../aplication/infrastructureServices/urlValidator";
import UrlValidatorInfrastructureService from "../../infrastructure/services/urlValidator.infrastructureService";
import NewGroupEventPublisher from "../../../shared/aplication/publishers/newGroupEventPublisher";

const urlValidator: IUrlValidator = UrlValidatorInfrastructureService.create();

const createGroupDomainService: CreateGroupDomainService = CreateGroupDomainService.create(NewGroupEventPublisher.create());
const addLinkDomainService: AddLinkDomainService = AddLinkDomainService.create(urlValidator);

const domainServices = {
    createGroupDomainService,
    addLinkDomainService
};

export default domainServices;