import Group from "../entities/group";


class CreateGroupDomainService {

    static create(): CreateGroupDomainService{
        return new CreateGroupDomainService();
    }

    public createNewGroup(id: string, name: string, description: string, ownerId: string): Group{
        const date: Date = new Date();
        return Group.new(id, name, description, ownerId, date, date);
    }

}

export default CreateGroupDomainService;