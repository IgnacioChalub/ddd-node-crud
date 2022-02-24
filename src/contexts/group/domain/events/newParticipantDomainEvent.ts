import IEvent from "../../../shared/domain/domainEvents/event";
import Participant from "../entities/participant";

class NewParticipantDomainEvent implements IEvent{

    raisedAt: Date;
    participant: Participant;


    private constructor(raisedAt: Date, participant: Participant) {
        this.raisedAt = raisedAt;
        this.participant = participant;
    }

    static raise(participant: Participant): NewParticipantDomainEvent {
        return new NewParticipantDomainEvent(new Date(), participant);
    }
}

export default NewParticipantDomainEvent;