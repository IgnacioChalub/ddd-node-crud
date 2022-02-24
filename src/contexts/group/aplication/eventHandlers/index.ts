import CreateParticipantHandler from "./createParticipantHandler";
import CreateParticipantAplicationService from "../services/createParticipant.aplicationService";
import CreateParticipantDomainService from "../../domain/services/createParticipant.domainService";
import NewParticipantEventPublisher from "../../../shared/aplication/publishers/newParticipantEventPublisher";
import IHandler from "../../../shared/aplication/handlers/handler";

const createParticipantHandler: IHandler = CreateParticipantHandler.create(CreateParticipantAplicationService.create(CreateParticipantDomainService.create(NewParticipantEventPublisher.create())));

const groupHandlers = {
    createParticipantHandler
}

export default groupHandlers;