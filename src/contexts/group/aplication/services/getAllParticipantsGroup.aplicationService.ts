import IGroupRepository from "../repositories/group.repository";
import Group from "../../domain/entities/group";

class GetAllParticipantsGroupAplicationService{

    private groupRepository: IGroupRepository;


    private constructor(groupRepository: IGroupRepository) {
        this.groupRepository = groupRepository;
    }

    static create(groupRepository: IGroupRepository): GetAllParticipantsGroupAplicationService{
        return new GetAllParticipantsGroupAplicationService(groupRepository);
    }

    async getAll(participantsId: string): Promise<Group[]>{
        return await this.groupRepository.getAllParticipantsGroups(participantsId);
    }
}

export default GetAllParticipantsGroupAplicationService;