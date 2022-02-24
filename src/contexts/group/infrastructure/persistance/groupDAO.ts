import IGroupRepository from "../../aplication/repositories/group.repository";
// @ts-ignore
import db from "../../../shared/infrastructure/database/database";
import Group from "../../domain/entities/group";
import Participant from "../../domain/entities/participant";
import Link from "../../domain/entities/link";

export class GroupDAO implements IGroupRepository{

    /**
     * TODO: optimize,
     * Hacer una query sola parta owner, editors y viewers y despues filtrar cuando creo los objetos.
     */

    async getGroupById(id: string): Promise<Group> {
        let groupResponse: any;
        await db
            .select("*")
            .from("group")
            .first()
            .where("id", "=", id)
            .then((response: any) => {
                if(!response) return response;
                groupResponse = response;
            });
        let ownerResponse: any;
        await db
            .select("*")
            .from("group-participant")
            .first()
            .where({
                groupId: id,
                owner: true
            })
            .then((response: any) => {
                ownerResponse = response;
            });
        let editorResponse: any;
        await db
            .select("*")
            .from("group-participant")
            .where({
                groupId: id,
                editor: true
            })
            .then((response: any) => {
                editorResponse = response;
            });
        let viewerResponse: any;
        await db
            .select("*")
            .from("group-participant")
            .where({
                groupId: id,
                owner: false,
                editor: false
            })
            .then((response: any) => {
                viewerResponse = response;
            });
        let linkResponse: any;
        await db
            .select("*")
            .from("link")
            .where({
                groupId: id,
            })
            .then((response: any) => {
                linkResponse = response;
            });
        const owner: Participant = Participant.create(ownerResponse.id, ownerResponse.username);
        const editors: Participant[] = this.createParticipants(editorResponse);
        const viewers: Participant[] = this.createParticipants(viewerResponse);
        const links: Link[] = this.createLinks(linkResponse);
        return Group.create(id, groupResponse.name, groupResponse.description, owner, editors, viewers, links, groupResponse.updatedAt, groupResponse.createdAt);
    }

    getLinkById(id: string): Promise<any> {
        return Promise.resolve(undefined);
    }

    private createParticipants(editorResponse: any): Participant[] {
        const participants: Participant[] = [];
        for (const participantResponse of editorResponse) {
            participants.push(Participant.create(participantResponse.id, participantResponse.userName));
        }
        return participants;
    }

    private createLinks(linksResponse: any): Link[] {
        const links: Link[] = [];
        for (const link of linksResponse) {
            links.push(Link.create(link.id, link.title, link.description, link.url, link.updatedAt, link.createdAt));
        }
        return links;
    }
}