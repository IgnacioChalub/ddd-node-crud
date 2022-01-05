import {Account} from "../../domain/entities/account";
import IAccountRepository from "../../aplication/repositories/account.repository";

export class AccountDAO implements IAccountRepository{
    getAccountByEmail(email: string): Promise<Account> {
        // @ts-ignore
        return Promise.resolve(undefined);
    }

    getAccountById(id: string): Promise<Account> {
        // @ts-ignore
        return Promise.resolve(undefined);
    }

    getAccountByUsername(username: string): Promise<Account> {
        // @ts-ignore
        return Promise.resolve(undefined);
    }

    registerAccount(account: Account): Promise<void> {
        return Promise.resolve(undefined);
    }

}