import IEvent from "../../../shared/domain/domainEvents/event";
import Group from "../entities/group";

class NewGroupDomainEvent implements IEvent{

    raisedAt: Date;
    private group: Group;

    private constructor(raisedAt: Date, group: Group) {
        this.raisedAt = raisedAt;
        this.group = group;
    }

    static raise(group: Group): NewGroupDomainEvent{
        return new NewGroupDomainEvent(new Date(), group);
    }

    public getGroup(): Group{
        return this.group;
    }
}

export default NewGroupDomainEvent;