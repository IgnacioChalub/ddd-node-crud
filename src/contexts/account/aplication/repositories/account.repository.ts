export default interface IAccountRepository{
    getAccountById(id: string): Promise<any>;
    getAccountByUsername(username: string): Promise<JSON>;
    getAccountByEmail(email: string): Promise<any>;
}