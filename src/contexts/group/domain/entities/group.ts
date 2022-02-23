import Link from "./link";
import NewGroupDomainEvent from "../events/newGroupDomainEvent";
import AddLinkDomainService from "../services/addLink.domainService";
import AddLinkDomainEvent from "../events/addLinkDomainEvent";


class Group {

    private id: string;
    private name: string;
    private description: string;
    private ownerId: string;
    private editorsId: string[];
    private viewersId: string[];
    private links: Link[];
    private updatedAt: Date;
    private createdAt: Date;

    private constructor(id: string, name: string, description: string, ownerId: string, updatedAt: Date, createdAt: Date) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.ownerId = ownerId;
        this.editorsId = [];
        this.viewersId = [];
        this.links = [];
        this.updatedAt = updatedAt;
        this.createdAt = createdAt;
    }

    static create(id: string, name: string, description: string, ownerId: string, updatedAt: Date, createdAt: Date): Group{
        return new Group(id, name, description, ownerId, updatedAt, createdAt);
    }

    static new(id: string, name: string, description: string, ownerId: string, updatedAt: Date, createdAt: Date): NewGroupDomainEvent{
        const group: Group = Group.create(id, name, description, ownerId, updatedAt, createdAt);
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
        return this.ownerId;
    }
    public getCreatedAt(): Date{
        return this.createdAt;
    }
    public getUpdatedAt(): Date{
        return this.updatedAt;
    }

    public isOwner(id: string): boolean{
        return this.ownerId === id;
    }

    public addLink(linkId: string, title: string, description: string, url: string): AddLinkDomainEvent{
        const date: Date = new Date();
        this.updatedAt = date;
        const newLink: Link = Link.create(linkId, title, description, url, date, date);
        this.links.push(newLink);
        return AddLinkDomainEvent.raise(newLink, this.getId());
    }

}

export default Group;