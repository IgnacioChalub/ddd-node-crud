import CreateGroupAplicationService from "./createGroup.aplicationService";
import IGroupRepository from "../repositories/group.repository";
import {GroupDAO} from "../../infrastructure/persistance/groupDAO";
import IIdGenerator from "../infrastructureServices/idGenerator";
import IdGeneratorInfrastructureService from "../../infrastructure/services/idGenerator.infrastructureService";
import AddLinkAplicationService from "./addLink.aplicationService";
import CreateGroupDomainService from "../../domain/services/createGroup.domainService";
import domainServices from "../../domain/services";
import CreateParticipantAplicationService from "./createParticipant.aplicationService";
import IParticipantRepository from "../repositories/participant.repository";
import ParticipantDAO from "../../infrastructure/persistance/participantDAO";
import GetAllParticipantsGroupAplicationService from "./getAllParticipantsGroup.aplicationService";

const groupRepository: IGroupRepository = new GroupDAO();
const participantRepository: IParticipantRepository = new ParticipantDAO();
const createGroupDomainService: CreateGroupDomainService = domainServices.createGroupDomainService;
const idGeneratorInfrastructureService: IIdGenerator = IdGeneratorInfrastructureService.create();


const createGroupAplicationService: CreateGroupAplicationService = CreateGroupAplicationService.create(groupRepository, createGroupDomainService, participantRepository,idGeneratorInfrastructureService);
const addLinkAplicationService: AddLinkAplicationService = AddLinkAplicationService.create(groupRepository, idGeneratorInfrastructureService, domainServices.addLinkDomainService);
const createParticipantAplicationService: CreateParticipantAplicationService = CreateParticipantAplicationService.create(domainServices.createParticipantDomainService);
const getAllParticipantsGroupAplicationService: GetAllParticipantsGroupAplicationService = GetAllParticipantsGroupAplicationService.create(groupRepository);

const aplicationServices = {
    createGroupAplicationService,
    addLinkAplicationService,
    createParticipantAplicationService,
    getAllParticipantsGroupAplicationService
};

export default aplicationServices;