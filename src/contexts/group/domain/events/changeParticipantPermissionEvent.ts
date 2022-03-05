import IEvent from "../../../shared/domain/domainEvents/event";
import Group from "../entities/group";
import Participant from "../entities/participant";

class ChangeParticipantPermissionEvent implements IEvent{

    raisedAt: Date;
    participant: Participant;
    group: Group;

    private constructor(raisedAt: Date, participant: Participant, group: Group) {
        this.raisedAt = raisedAt;
        this.participant = participant;
        this.group = group;
    }

    static raise(participant: Participant, group: Group): ChangeParticipantPermissionEvent {
        return new ChangeParticipantPermissionEvent(new Date(), participant, group);
    }
}

export default ChangeParticipantPermissionEvent;