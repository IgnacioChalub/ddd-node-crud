import IParticipantRepository from "../../aplication/repositories/participant.repository";
import Participant from "../../domain/entities/participant";
// @ts-ignore
import db from "../../../shared/infrastructure/database/database";

class ParticipantDAO implements IParticipantRepository{
    
    async getByUsername(username: string): Promise<Participant> {
        return await db
            .select("*")
            .from("participant")
            .first()
            .where("username", "=", username)
            .then((response: any) => {
                if(!response) return response;
                return this.createParticipantFromResponse(response);
            });
        }

    async getById(id: string): Promise<Participant> {
        return await db
            .select("*")
            .from("participant")
            .first()
            .where("id", "=", id)
            .then((response: any) => {
                if(!response) return response;
                return this.createParticipantFromResponse(response);
            });
    }

    private createParticipantFromResponse(response: any): Participant {
        return Participant.create(response.id, response.username);
    }
}

export default ParticipantDAO;