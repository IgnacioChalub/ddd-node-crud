import IHandler from "../../../shared/aplication/handlers/handler";
// @ts-ignore
import db from "../../../shared/infrastructure/database/database";
import Group from "../../domain/entities/group";
import IEvent from "../../../shared/domain/domainEvents/event";

class NewGroupHandler implements IHandler{
    constructor() {}

    static create(): NewGroupHandler {
        return new NewGroupHandler();
    }

    async handle(event: IEvent<Group>): Promise<void> {
        const group: Group = event.getData();
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