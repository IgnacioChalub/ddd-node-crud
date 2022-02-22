import Link from "./link";
import Suscribable from "../../../shared/domain/entities/suscribable";
import NewGroupDomainEvent from "../events/newGroupDomainEvent";
import NewGroupMessageBus from "../../../shared/aplication/messenger/newGroupMessageBus";


class Group extends Suscribable{

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
        super();
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
        const group: Group = new Group(id, name, description, ownerId, updatedAt, createdAt);
        group.addMessageBus(NewGroupMessageBus.create());
        return group;
    }

    static new(id: string, name: string, description: string, ownerId: string, updatedAt: Date, createdAt: Date): Group{
        const group: Group = Group.create(id, name, description, ownerId, updatedAt, createdAt);
        group.notify(NewGroupDomainEvent.raise(group));
        return group;
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

    public addLink(link: Link): void{
        this.updatedAt = new Date();
        this.links.push(link);
    }

}

export default Group;