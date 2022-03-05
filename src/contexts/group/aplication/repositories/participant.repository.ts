import Participant from "../../domain/entities/participant";

export default interface IParticipantRepository{
    getById(id: string): Promise<Participant>;
    getByUsername(username: string): Promise<Participant>;
}