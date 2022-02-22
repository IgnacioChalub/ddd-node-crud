import IUrlValidator from "../../aplication/infrastructureServices/urlValidator";
import Group from "../entities/group";
import Link from "../entities/link";

class AddLinkDomainService{

    private urlValidator: IUrlValidator;

    constructor(urlValidator: IUrlValidator) {
        this.urlValidator = urlValidator;
    }

    static create(urlValidator: IUrlValidator): AddLinkDomainService{
        return new AddLinkDomainService(urlValidator);
    }

    public addLink(group: Group, userId: string, linkId: string, title: string, description: string, url: string): void{
        if(!group.isOwner(userId)) throw Error('User is not group owner');
        const link: Link = Link.create(linkId, title, description, url);
        if(!this.urlValidator.isValid(url)) throw Error("Invalid URL");
        group.addLink(link);
    }

}

export default AddLinkDomainService;