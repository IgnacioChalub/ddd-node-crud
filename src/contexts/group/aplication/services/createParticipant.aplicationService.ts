import CreateParticipantDomainService from "../../domain/services/createParticipant.domainService";

class CreateParticipantAplicationService{

    private createParticipantDomainService: CreateParticipantDomainService;

    private constructor(createParticipantDomainService: CreateParticipantDomainService) {
        this.createParticipantDomainService = createParticipantDomainService;
    }

    static create(createParticipantDomainService: CreateParticipantDomainService): CreateParticipantAplicationService{
        return new CreateParticipantAplicationService(createParticipantDomainService);
    }


    createParticipant(id: string, username: string): void {
        this.createParticipantDomainService.createParticipant(id, username);
    }
}

export default CreateParticipantAplicationService;