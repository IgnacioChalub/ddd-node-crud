import Link from "./link";
import NewGroupDomainEvent from "../events/newGroupDomainEvent";
import AddLinkDomainEvent from "../events/addLinkDomainEvent";
import Participant from "./participant";

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



}

export default Group;