import Link from "./link";
import NewGroupDomainEvent from "../events/newGroupDomainEvent";
import AddLinkDomainEvent from "../events/addLinkDomainEvent";
import Participant from "./participant";
import RemoveParticipantFromGroup from "../events/changeParticipantPermissionEvent";
import ChangeParticipantPermissionEvent from "../events/changeParticipantPermissionEvent";

class Group {

    private id: string;
    private name: string;
    private description: string;
    private owner: Participant;
    private editors: Participant[];
    private viewers: Participant[];
    private links: Link[];
    private updatedAt: Date;
    private createdAt: Date;


    private constructor(id: string, name: string, description: string, owner: Participant, editors: Participant[], viewers: Participant[], links: Link[], updatedAt: Date, createdAt: Date) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.owner = owner;
        this.editors = editors;
        this.viewers = viewers;
        this.links = links;
        this.updatedAt = updatedAt;
        this.createdAt = createdAt;
    }

    static create(id: string, name: string, description: string, owner: Participant, editors: Participant[], viewers: Participant[], links: Link[], updatedAt: Date, createdAt: Date): Group{
        return new Group(id, name, description, owner, editors, viewers, links, updatedAt, createdAt);
    }

    static new(id: string, name: string, description: string, owner: Participant, updatedAt: Date, createdAt: Date): NewGroupDomainEvent{
        const editors: Participant[] = [];
        const viewers: Participant[] = [];
        const links: Link[] = [];
        const group: Group = Group.create(id, name, description, owner, editors, viewers, links, updatedAt, createdAt);
        return NewGroupDomainEvent.raise(group);
    }

    public getId(): string{
        return this.id;
    }
    public getName(): string{
        return this.name;
    }
    public getDescription(): string{
        return this.description;
    }
    public getOwnerId(): string{
        return this.owner.getId();
    }
    public getCreatedAt(): Date{
        return this.createdAt;
    }
    public getUpdatedAt(): Date{
        return this.updatedAt;
    }

    public isOwner(id: string): boolean{
        return this.owner.getId() === id;
    }

    public isEditor(id: string): boolean{
        for (const editor of this.editors) {
            if(editor.getId() === id) return true;
        }
        return false;
    }

    public isViewer(id: string): boolean{
        for (const viewer of this.viewers) {
            if(viewer.getId() === id) return true;
        }
        return false;
    }

    public addLink(linkId: string, title: string, description: string, url: string): AddLinkDomainEvent{
        const date: Date = new Date();
        this.updatedAt = date;
        const newLink: Link = Link.create(linkId, title, description, url, date, date);
        this.links.push(newLink);
        return AddLinkDomainEvent.raise(newLink, this.getId());
    }

    public getLink(linkId: string): Link | null{
        for (const link of this.links) {
            if(link.getId() == linkId) return link;
        }
        return null;
    }

    public remove(aParticipant: Participant): ChangeParticipantPermissionEvent{
        if(this.removeFromViewers(aParticipant)) {
            return ChangeParticipantPermissionEvent.raise(aParticipant, this);
        }
        if(this.removeFromEditors(aParticipant)) {
            return ChangeParticipantPermissionEvent.raise(aParticipant, this);
        }
        throw Error('Participant not found in group');
    }

    private removeFromViewers(aParticipant: Participant): boolean{
        let index: number = this.viewers.findIndex(participant => participant.compareTo(aParticipant));
        if(index != -1) {
            this.viewers.splice(index, 1)
            return true;
        }
        return false;
    }

    private removeFromEditors(aParticipant: Participant): boolean{
        let index: number = this.editors.findIndex(participant => participant.compareTo(aParticipant));
        if(index != -1) {
            this.editors.splice(index, 1)
            return true;
        }
        return false;
    }

    public makeEditor(aParticipant: Participant): ChangeParticipantPermissionEvent{
        this.removeFromViewers(aParticipant);
        let index: number = this.editors.findIndex(participant => participant.compareTo(aParticipant));
        if(index != -1) {
           throw Error('Participant already editor');
        }
        this.editors.push(aParticipant);
        return ChangeParticipantPermissionEvent.raise(aParticipant, this);
    }

    public makeViewer(aParticipant: Participant): ChangeParticipantPermissionEvent{
        this.removeFromEditors(aParticipant);
        let index: number = this.viewers.findIndex(participant => participant.compareTo(aParticipant));
        if(index != -1) {
           throw Error('Participant already viewe');
        }
        this.viewers.push(aParticipant);
        return ChangeParticipantPermissionEvent.raise(aParticipant, this);
    }

}

export default Group;