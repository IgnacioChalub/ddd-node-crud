import CreateGroupDomainService from "./createGroup.domainService";
import AddLinkDomainService from "./addLink.domainService";
import IUrlValidator from "../../aplication/infrastructureServices/urlValidator";
import UrlValidatorInfrastructureService from "../../infrastructure/services/urlValidator.infrastructureService";
import NewGroupEventPublisher from "../../../shared/aplication/publishers/newGroupEventPublisher";
import AddLinkEventPublisher from "../../../shared/aplication/publishers/addLinkEventPublisher";
import CreateParticipantDomainService from "./createParticipant.domainService";
import NewParticipantEventPublisher from "../../../shared/aplication/publishers/newParticipantEventPublisher";
import ChangeParticipantPermissionDomainService from "./changeParticipantPermission.domainService";
import ChangeParticipantPermissionPublisher from "../../../shared/aplication/publishers/changeParticipantPermissionPublisher";

const urlValidator: IUrlValidator = UrlValidatorInfrastructureService.create();

const createGroupDomainService: CreateGroupDomainService = CreateGroupDomainService.create(NewGroupEventPublisher.create());
const addLinkDomainService: AddLinkDomainService = AddLinkDomainService.create(urlValidator, AddLinkEventPublisher.create());
const createParticipantDomainService: CreateParticipantDomainService = CreateParticipantDomainService.create(NewParticipantEventPublisher.create());
const changeParticipantPermissionDomainService: ChangeParticipantPermissionDomainService = ChangeParticipantPermissionDomainService.create(ChangeParticipantPermissionPublisher.create());

const domainServices = {
    createGroupDomainService,
    addLinkDomainService,
    createParticipantDomainService,
    changeParticipantPermissionDomainService
};

export default domainServices;