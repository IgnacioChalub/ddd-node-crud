import NewParticipantDomainEvent from "../events/newParticipantDomainEvent";
import Participant from "../entities/participant";
import IPublisher from "../../../shared/domain/publisher/publisher";

class CreateParticipantDomainService {

    private publisher: IPublisher;

    constructor(publisher: IPublisher) {
        this.publisher = publisher;
    }

    static create(publisher: IPublisher): CreateParticipantDomainService{
        return new CreateParticipantDomainService(publisher);
    }

    createParticipant(id: string, username: string) {
        const newParticipantDomainEvent: NewParticipantDomainEvent = Participant.new(id, username);
        this.publisher.publish(newParticipantDomainEvent);
    }
}

export default CreateParticipantDomainService;