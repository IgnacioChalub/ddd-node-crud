import IHandler from "../../../shared/aplication/handlers/handler";
import AddLinkDomainEvent from "../../domain/events/addLinkDomainEvent";
// @ts-ignore
import db from "../../../shared/infrastructure/database/database";
import Link from "../../domain/entities/link";

class SaveLinkHandler implements IHandler{

    constructor() {}

    static create(): SaveLinkHandler{
        return new SaveLinkHandler();
    }

    async handle(event: AddLinkDomainEvent): Promise<void> {
        const link: Link = event.link;
        const groupId: string = event.groupId;
        return await db('link')
            .insert({
                id: link.getId(),
                title: link.getTitle(),
                description: link.getDescription(),
                url: link.getUrl(),
                updatedAt: link.getUpdatedAt(),
                createdAt: link.getCreatedAt(),
                groupId: groupId
            });
    }
}

export default SaveLinkHandler;