import Group from "../../domain/entities/group";

export default interface IGroupRepository{
    getGroupById(id: string): Promise<Group>;
    getAllParticipantsGroups(participantId: string): Promise<Group[]>;
}