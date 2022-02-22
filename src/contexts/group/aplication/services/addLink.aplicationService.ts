import IGroupRepository from "../repositories/group.repository";
import IIdGenerator from "../infrastructureServices/idGenerator";
import {Link} from "../../domain/entities/link";
import AddLinkDomainService from "../../domain/services/addLink.domainService";
import domainServices from "../../domain/services";
import {Group} from "../../domain/entities/group";

class AddLinkAplicationService{

    private groupRepository: IGroupRepository;
    private idGenerator: IIdGenerator;

    private constructor(groupRepository: IGroupRepository, idGenerator: IIdGenerator) {
        this.groupRepository = groupRepository;
        this.idGenerator = idGenerator;
    }

    static create(groupRepository: IGroupRepository, idGenerator: IIdGenerator): AddLinkAplicationService{
        return new AddLinkAplicationService(groupRepository, idGenerator);
    }

    async addLink(title: string, description: string, url: string, userId: string, groupId: string): Promise<Group> {
        let link: Link;
        let id: string;
        do {
            id = this.idGenerator.generateId();
            link = await this.groupRepository.getLinkById(id);
        } while (link);
        const addLinkDomainService: AddLinkDomainService = domainServices.addLinkDomainService;
        const group: Group = await this.groupRepository.getGroupById(groupId);
        addLinkDomainService.addLink(group, userId, id, title, description, url);
        this.groupRepository.save(group);
        return group;
    }
}

export default AddLinkAplicationService;