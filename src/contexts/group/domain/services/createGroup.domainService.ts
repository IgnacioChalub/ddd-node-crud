import {Group} from "../entities/group";

class CreateGroupDomainService {

    static create(): CreateGroupDomainService{
        return new CreateGroupDomainService();
    }

    public createGroup(id: string, name: string, description: string, ownerId: string): Group{
        return Group.create(id, name, description, ownerId);
    }

}

export default CreateGroupDomainService;