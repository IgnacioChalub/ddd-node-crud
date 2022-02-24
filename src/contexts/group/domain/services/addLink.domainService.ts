import IUrlValidator from "../../aplication/infrastructureServices/urlValidator";
import Group from "../entities/group";
import AddLinkDomainEvent from "../events/addLinkDomainEvent";
import IPublisher from "../../../shared/domain/publisher/publisher";

class AddLinkDomainService{

    private urlValidator: IUrlValidator;
    private publisher: IPublisher;


    constructor(urlValidator: IUrlValidator, publisher: IPublisher) {
        this.urlValidator = urlValidator;
        this.publisher = publisher;
    }

    static create(urlValidator: IUrlValidator, publisher: IPublisher): AddLinkDomainService{
        return new AddLinkDomainService(urlValidator, publisher);
    }

    public addLink(group: Group, userId: string, linkId: string, title: string, description: string, url: string): void{
        if(!group.isOwner(userId)) throw Error('User is not group owner');
        if(!this.urlValidator.isValid(url)) throw Error("Invalid URL");
        const addLinkDomainEvent: AddLinkDomainEvent = group.addLink(linkId, title, description, url);
        this.publisher.publish(addLinkDomainEvent);
    }

}

export default AddLinkDomainService;