import {Account} from "../../domain/entities/account";


export default interface IAccountRepository{
    registerAccount(account: Account): Promise<void>;
    getAccountById(id: string): Promise<any>;
    getAccountByUsername(username: string): Promise<JSON>;
    getAccountByEmail(email: string): Promise<any>;
}