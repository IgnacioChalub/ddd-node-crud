import IGroupRepository from "../repositories/group.repository";
import IIdGenerator from "../infrastructureServices/idGenerator";
import Link from "../../domain/entities/link";
import Group from "../../domain/entities/group";
import addLinkDomainService from "../../domain/services/addLink.domainService";
import AddLinkDomainService from "../../domain/services/addLink.domainService";

class AddLinkAplicationService{

    private groupRepository: IGroupRepository;
    private idGenerator: IIdGenerator;
    private addLinkDomainService: AddLinkDomainService;

    private constructor(groupRepository: IGroupRepository, idGenerator: IIdGenerator, addLinkDomainService: AddLinkDomainService) {
        this.groupRepository = groupRepository;
        this.idGenerator = idGenerator;
        this.addLinkDomainService = addLinkDomainService;
    }

    static create(groupRepository: IGroupRepository, idGenerator: IIdGenerator, addLinkDomainService: AddLinkDomainService): AddLinkAplicationService{
        return new AddLinkAplicationService(groupRepository, idGenerator, addLinkDomainService);
    }

    /**
     * TODO: correction in id generation
     */

    async addLink(title: string, description: string, url: string, userId: string, groupId: string): Promise<Group> {
        const group: Group = await this.groupRepository.getGroupById(groupId);
        if(!group) throw Error("Group not found");
        let id: string = "";
        let link: Link | null;
        do{
            id = this.idGenerator.generateId();
            link = group.getLink(id);
        } while(link)
        this.addLinkDomainService.addLink(group, userId, id, title, description, url);
        return group;
    }
}

export default AddLinkAplicationService;