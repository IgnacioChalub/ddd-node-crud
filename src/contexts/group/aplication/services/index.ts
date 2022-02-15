import CreateGroupAplicationService from "./createGroup.aplicationService";
import IGroupRepository from "../repositories/group.repository";
import {GroupDAO} from "../../infrastructure/persistance/groupDAO";
import {CreateGroupDomainService} from "../../domain/services/createGroup.domainService";
import IIdGenerator from "../infrastructureServices/idGenerator";
import IdGeneratorInfrastructureService from "../../infrastructure/services/idGenerator.infrastructureService";

const groupRepository: IGroupRepository = new GroupDAO();
const createGroupDomainService: CreateGroupDomainService = CreateGroupDomainService.create();
const idGeneratorInfrastructureService: IIdGenerator = IdGeneratorInfrastructureService.create();


const createGroupAplicationService: CreateGroupAplicationService = CreateGroupAplicationService.create(groupRepository, createGroupDomainService, idGeneratorInfrastructureService);

const aplicationServices = {
    createGroupAplicationService
};

export default aplicationServices;