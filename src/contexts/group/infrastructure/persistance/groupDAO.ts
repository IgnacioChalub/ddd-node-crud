import IGroupRepository from "../../aplication/repositories/group.repository";
// @ts-ignore
import db from "../../../shared/infrastructure/database/database";
import Group from "../../domain/entities/group";

export class GroupDAO implements IGroupRepository{

    async getGroupById(id: string): Promise<Group> {
        return await db
            .select("*")
            .from("group")
            .first()
            .where("id", "=", id)
            .then((response: any) => {
                if(!response) return response;
                return this.createGroupFromResponse(response);
            });
    }

    getLinkById(id: string): Promise<any> {
        return Promise.resolve(undefined);
    }

    private createGroupFromResponse(response: any){
        return Group.create(response.id, response.name, response.description, response.ownerId, response.updatedAt, response.createdAt);
    }
}