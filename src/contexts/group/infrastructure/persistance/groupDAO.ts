import IGroupRepository from "../../aplication/repositories/group.repository";
// @ts-ignore
import db from "../../../shared/infrastructure/database/database";
import Group from "../../domain/entities/group";
import Participant from "../../domain/entities/participant";
import Link from "../../domain/entities/link";

export class GroupDAO implements IGroupRepository{

    /**
     * TODO: optimize,
     * Hacer una query sola para owner, editors y viewers y despues filtrar cuando creo los objetos.
     */

    async getGroupById(id: string): Promise<Group> {
        let groupResponse: any;
        await db
            .select("*")
            .from("group")
            .first()
            .where("id", "=", id)
            .then((response: any) => {
                groupResponse = response;
            });
        if(!groupResponse) return groupResponse;
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
                editor: true,
                owner: false
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
        const owner: Participant = await this.createOwner(ownerResponse);
        const editors: Participant[] = await this.createParticipants(editorResponse);
        const viewers: Participant[] = await this.createParticipants(viewerResponse);
        const links: Link[] = this.createLinks(linkResponse);
        const group: Group = Group.create(id, groupResponse.name, groupResponse.description, owner, editors, viewers, links, groupResponse.updatedAt, groupResponse.createdAt);
        console.log(group)
        return group
    }

    private async createOwner(ownerResponse: any): Promise<Participant> {
        return await db
            .select("*")
            .from("participant")
            .first()
            .where("id", "=", ownerResponse.participantId)
            .then((response: any) => {
                return Participant.create(response.id, response.username);
            });

    }

    private async createParticipants(participantResponses: any): Promise<Participant[]> {
        const participants: Participant[] = [];
        for (const participantResponse of participantResponses) {
            await db
                .select("*")
                .from("participant")
                .first()
                .where("id", "=", participantResponse.participantId)
                .then((response: any) => {
                    participants.push(Participant.create(response.id, response.userName));
                });
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