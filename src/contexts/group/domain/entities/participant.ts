import NewParticipantDomainEvent from "../events/newParticipantDomainEvent";

class Participant{

    private id: string;
    private username: string;

    private constructor(id: string, username: string) {
        this.id = id;
        this.username = username;
    }

    static create(id: string, username: string): Participant{
        return new Participant(id, username);
    }

    static new(id: string, username: string): NewParticipantDomainEvent{
        const participant: Participant = Participant.create(id, username);
        return NewParticipantDomainEvent.raise(participant);
    }

    public getId(): string{
        return this.id;
    }

    public getUsername(): string{
        return this.username;
    }
}

export default Participant;