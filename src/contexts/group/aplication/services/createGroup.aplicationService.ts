import IGroupRepository from "../repositories/group.repository";

import IIdGenerator from "../infrastructureServices/idGenerator";
import CreateGroupDomainService from "../../domain/services/createGroup.domainService";
import Group from "../../domain/entities/group";
import IParticipantRepository from "../repositories/participant.repository";
import Participant from "../../domain/entities/participant";

class CreateGroupAplicationService{

    private groupRepository: IGroupRepository;
    private participantRepository: IParticipantRepository;
    private idGenerator: IIdGenerator;
    private createGroupDomainService: CreateGroupDomainService;

    private constructor(groupRepository: IGroupRepository, createGroupDomainService: CreateGroupDomainService, participantRepository: IParticipantRepository, idGenerator: IIdGenerator) {
        this.groupRepository = groupRepository;
        this.participantRepository = participantRepository;
        this.idGenerator = idGenerator;
        this.createGroupDomainService = createGroupDomainService;
    }

    static create(groupRepository: IGroupRepository, createGroupDomainService: CreateGroupDomainService, participantRepository: IParticipantRepository, idGenerator: IIdGenerator){
        return new CreateGroupAplicationService(groupRepository, createGroupDomainService, participantRepository, idGenerator);
    }

    async createGroup(name: string, description: string, ownerId: string): Promise<Group> {
        let group: Group;
        let id: string;
        do {
            id = this.idGenerator.generateId();
            group = await this.groupRepository.getGroupById(id);
        } while (group);
        const owner: Participant = await this.participantRepository.getById(ownerId);
        return this.createGroupDomainService.createNewGroup(id, name, description, owner);
    }
}

export default CreateGroupAplicationService;
