import {Group} from "../../domain/entities/group";


export default interface IGroupRepository{
    createGroup(group: Group): void;
    getGroupById(id: string): Promise<Group>;
    save(group: Group): void;
    getLinkById(id: string): Promise<any>;
}