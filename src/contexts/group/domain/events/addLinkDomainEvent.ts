import IEvent from "../../../shared/domain/domainEvents/event";
import Link from "../entities/link";

class AddLinkDomainEvent implements IEvent{

    raisedAt: Date;
    link: Link;
    groupId: string;

    private constructor(raisedAt: Date, link: Link, groupId: string) {
        this.raisedAt = raisedAt;
        this.link = link;
        this.groupId = groupId;
    }

    static raise(link: Link, groupId: string): AddLinkDomainEvent{
        return new AddLinkDomainEvent(new Date(), link, groupId);
    }

}

export default AddLinkDomainEvent;