import IPublisher from "../../../shared/domain/publisher/publisher";
import Group from "../entities/group";
import Participant from "../entities/participant";
import ChangeParticipantPermissionEvent from "../events/changeParticipantPermissionEvent";

class ChangeParticipantPermissionDomainService{

    private publisher: IPublisher;

    private constructor(publisher: IPublisher) {
        this.publisher = publisher;
    }

    static create(publisher: IPublisher): ChangeParticipantPermissionDomainService{
        return new ChangeParticipantPermissionDomainService(publisher);
    }

    changeParticipantPermission(group: Group, sharer: Participant, participant: Participant, viewer: boolean, editor: boolean) {
        if(!group.isOwner(sharer.getId())) throw Error('Not group owner');
        if(!viewer && !editor){
            const event: ChangeParticipantPermissionEvent = group.remove(participant);
            this.publisher.publish(event);
        }else if(editor){
            const event: ChangeParticipantPermissionEvent = group.makeEditor(participant);
            this.publisher.publish(event);
        }else{
            const event: ChangeParticipantPermissionEvent = group.makeViewer(participant);
            this.publisher.publish(event);
        }
    }

}

export default ChangeParticipantPermissionDomainService;