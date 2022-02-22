import IGroupRepository from "../repositories/group.repository";

import IIdGenerator from "../infrastructureServices/idGenerator";
import CreateGroupDomainService from "../../domain/services/createGroup.domainService";
import Group from "../../domain/entities/group";

class CreateGroupAplicationService{

    private groupRepository: IGroupRepository;
    private idGenerator: IIdGenerator;
    private createGroupDomainService: CreateGroupDomainService;

    private constructor(groupRepository: IGroupRepository, createGroupDomainService: CreateGroupDomainService, idGenerator: IIdGenerator) {
        this.groupRepository = groupRepository;
        this.idGenerator = idGenerator;
        this.createGroupDomainService = createGroupDomainService;
    }

    static create(groupRepository: IGroupRepository, createGroupDomainService: CreateGroupDomainService, idGenerator: IIdGenerator){
        return new CreateGroupAplicationService(groupRepository, createGroupDomainService, idGenerator);
    }

    async createGroup(name: string, description: string, ownerId: string): Promise<Group> {
        let group: Group;
        let id: string;
        do {
            id = this.idGenerator.generateId();
            group = await this.groupRepository.getGroupById(id);
        } while (group);
        return this.createGroupDomainService.createNewGroup(id, name, description, ownerId);
    }
}

export default CreateGroupAplicationService;
