import Group from "../../domain/entities/group";
import Link from "../../domain/entities/link";

export default interface IGroupRepository{
    getGroupById(id: string): Promise<Group>;
    getLinkById(id: string): Promise<Link>;
}