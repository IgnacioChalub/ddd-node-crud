import IHandler from "../../../shared/aplication/handlers/handler";
// @ts-ignore
import db from "../../../shared/infrastructure/database/database";
import NewGroupDomainEvent from "../../domain/events/newGroupDomainEvent";
import Group from "../../domain/entities/group";

class NewGroupHandler implements IHandler{
    constructor() {}

    static create(): NewGroupHandler {
        return new NewGroupHandler();
    }

    async handle(event: NewGroupDomainEvent): Promise<void> {
        const group: Group = event.getGroup();
        return await db('group')
            .insert({
                id: group.getId(),
                name: group.getName(),
                description: group.getDescription(),
                ownerId: group.getOwnerId(),
                createdAt: group.getCreatedAt(),
                updatedAt: group.getUpdatedAt()
            });
    }
}

export default NewGroupHandler;