import Group from "../../domain/entities/group";
import Participant from "../../domain/entities/participant";
import ChangeParticipantPermissionDomainService from "../../domain/services/changeParticipantPermission.domainService";
import IGroupRepository from "../repositories/group.repository";
import IParticipantRepository from "../repositories/participant.repository";

class ChangeParticipantPermissionAplicationService{

    private groupRepository: IGroupRepository;
    private participantRepository: IParticipantRepository;
    private changeParticipantPermissionDomainService: ChangeParticipantPermissionDomainService

    private constructor(groupRepository: IGroupRepository, changeParticipantPermissionDomainService: ChangeParticipantPermissionDomainService, participantRepository: IParticipantRepository) {
        this.groupRepository = groupRepository;
        this.participantRepository = participantRepository;
        this.changeParticipantPermissionDomainService = changeParticipantPermissionDomainService;
    }

    static create(groupRepository: IGroupRepository, changeParticipantPermissionDomainService: ChangeParticipantPermissionDomainService, participantRepository: IParticipantRepository){
        return new ChangeParticipantPermissionAplicationService(groupRepository, changeParticipantPermissionDomainService, participantRepository);
    }

    async changeParticipantPermission(sharerId: string, participantUsername: string, groupId: string, viewer: boolean, editor: boolean) {
        const group: Group = await this.groupRepository.getGroupById(groupId);
        if(!group) throw Error("Group not found");
        const participant: Participant = await this.participantRepository.getByUsername(participantUsername);
        if(!participant) throw Error("Participant not found");
        const sharer: Participant = await this.participantRepository.getById(sharerId); 
        this.changeParticipantPermissionDomainService.changeParticipantPermission(group, sharer, participant, viewer, editor)
    }

}

export default ChangeParticipantPermissionAplicationService;