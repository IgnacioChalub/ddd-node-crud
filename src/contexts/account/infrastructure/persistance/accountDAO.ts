import {Account} from "../../domain/entities/account";
import IAccountRepository from "../../aplication/repositories/account.repository";
// @ts-ignore
import db from "../../../shared/infrastructure/database/database";

export class AccountDAO implements IAccountRepository{
    async getAccountByEmail(email: string): Promise<Account> {
        return await db
            .select("*")
            .from("account")
            .first()
            .where("email", "=", email)
            .then((response: any) => {
                return response;
            });
    }

    async getAccountById(id: string): Promise<Account> {
        return await db
            .select("*")
            .from("account")
            .first()
            .where("id", "=", id)
            .then((response: any) => {
                return response;
            });
    }

    async getAccountByUsername(username: string): Promise<JSON> {
        return await db
            .select("*")
            .from("account")
            .first()
            .where("username", "=", username)
            .then((response: any) => {
                return response;
            });
    }

}