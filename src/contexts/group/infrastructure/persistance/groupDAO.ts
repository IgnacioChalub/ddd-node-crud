import IGroupRepository from "../../aplication/repositories/group.repository";
import {Group} from "../../domain/entities/group";
// @ts-ignore
import db from "../../../shared/infrastructure/database/database";

export class GroupDAO implements IGroupRepository{

    async createGroup(group: Group): Promise<void> {
        return await db('group')
            .insert({
                id: group.getId(),
                name: group.getName(),
                description: group.getDescription(),
                ownerId: group.getOwnerId(),
                createdAt: group.getCreatedAt(),
                updatedAt: group.getUpdatedAt()
            }).returning('*');
    }

    async getGroupById(id: string): Promise<any> {
        return await db
            .select("*")
            .from("group")
            .first()
            .where("id", "=", id)
            .then((response: any) => {
                return response;
            });
    }

    getLinkById(id: string): Promise<any> {
        return Promise.resolve(undefined);
    }

    async save(group: Group): Promise<void> {
        await db
            .where("id", "=", group.getId)
            .update({
                name: group.getName(),
                description: group.getDescription(),
                updatedAt: group.getUpdatedAt()
            })


    }
}