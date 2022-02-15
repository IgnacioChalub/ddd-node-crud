import IGroupRepository from "../repositories/group.repository";

import {Group} from "../../domain/entities/group";
import {CreateGroupDomainService} from "../../domain/services/createGroup.domainService";
import IIdGenerator from "../infrastructureServices/idGenerator";

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
        const newGroup: Group = this.createGroupDomainService.createGroup(id, name, description, ownerId);
        this.groupRepository.createGroup(newGroup);
        return newGroup;
    }
}

export default CreateGroupAplicationService;
