import CreateGroupAplicationService from "./createGroup.aplicationService";
import IGroupRepository from "../repositories/group.repository";
import {GroupDAO} from "../../infrastructure/persistance/groupDAO";
import IIdGenerator from "../infrastructureServices/idGenerator";
import IdGeneratorInfrastructureService from "../../infrastructure/services/idGenerator.infrastructureService";
import AddLinkAplicationService from "./addLink.aplicationService";
import CreateGroupDomainService from "../../domain/services/createGroup.domainService";
import domainServices from "../../domain/services";

const groupRepository: IGroupRepository = new GroupDAO();
const createGroupDomainService: CreateGroupDomainService = domainServices.createGroupDomainService;
const idGeneratorInfrastructureService: IIdGenerator = IdGeneratorInfrastructureService.create();


const createGroupAplicationService: CreateGroupAplicationService = CreateGroupAplicationService.create(groupRepository, createGroupDomainService, idGeneratorInfrastructureService);
const addLinkAplicationService: AddLinkAplicationService = AddLinkAplicationService.create(groupRepository, idGeneratorInfrastructureService);

const aplicationServices = {
    createGroupAplicationService,
    addLinkAplicationService
};

export default aplicationServices;