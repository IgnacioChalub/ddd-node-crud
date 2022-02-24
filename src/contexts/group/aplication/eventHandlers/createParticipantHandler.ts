import IHandler from "../../../shared/aplication/handlers/handler";
import RegisterAccountDomainEvent from "../../../account/domain/domainEvents/registerAccountDomainEvent";
import CreateParticipantAplicationService from "../services/createParticipant.aplicationService";

class CreateParticipantHandler implements IHandler{

    private createParticipantAplicationService: CreateParticipantAplicationService;

    private constructor(createParticipantAplicationService: CreateParticipantAplicationService) {
        this.createParticipantAplicationService = createParticipantAplicationService;
    }

    static create(createParticipantAplicationService: CreateParticipantAplicationService): IHandler{
        return new CreateParticipantHandler(createParticipantAplicationService)
    }

    handle(event: RegisterAccountDomainEvent): void {
        const id: string = event.account.getId();
        const username: string = event.account.getUsername();
        this.createParticipantAplicationService.createParticipant(id, username);
    }
}

export default CreateParticipantHandler;