import Group from "../entities/group";
import IPublisher from "../../../shared/domain/publisher/publisher";
import NewGroupDomainEvent from "../events/newGroupDomainEvent";


class CreateGroupDomainService {

    private publisher: IPublisher;

    constructor(publisher: IPublisher) {
        this.publisher = publisher;
    }

    static create(publisher: IPublisher): CreateGroupDomainService{
        return new CreateGroupDomainService(publisher);
    }

    public createNewGroup(id: string, name: string, description: string, ownerId: string): Group{
        const date: Date = new Date();
        const event: NewGroupDomainEvent = Group.new(id, name, description, ownerId, date, date);
        this.publisher.publish(event);
        return event.getGroup();
    }

}

export default CreateGroupDomainService;