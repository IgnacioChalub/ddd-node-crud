import Account from "../../domain/entities/account";

export default interface IAccountRepository{
    getAccountById(id: string): Promise<Account>;
    getAccountByUsername(username: string): Promise<Account>;
    getAccountByEmail(email: string): Promise<Account>;
}