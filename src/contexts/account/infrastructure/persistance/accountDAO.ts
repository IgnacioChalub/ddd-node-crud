
import IAccountRepository from "../../aplication/repositories/account.repository";
// @ts-ignore
import db from "../../../shared/infrastructure/database/database";
import Account from "../../domain/entities/account";

export class AccountDAO implements IAccountRepository{
    async getAccountByEmail(email: string): Promise<Account> {
        return await db
            .select("*")
            .from("account")
            .first()
            .where("email", "=", email)
            .then((response: any) => {
                if(!response) return response;
                return this.createAccountFromResponse(response);
            });
    }

    async getAccountById(id: string): Promise<Account> {
        return await db
            .select("*")
            .from("account")
            .first()
            .where("id", "=", id)
            .then((response: any) => {
                if(!response) return response;
                return this.createAccountFromResponse(response);
            });
    }

    async getAccountByUsername(username: string): Promise<Account> {
        return await db
            .select("*")
            .from("account")
            .first()
            .where("username", "=", username)
            .then((response: any) => {
                if(!response) return response;
                return this.createAccountFromResponse(response);
            });
    }

    private createAccountFromResponse(response: any){
        return Account.create(response.id, response.username, response.email, response.password, response.firstName, response.lastName, response.birthdate, response.active, response.createdAt, response.updatedAt);
    }
}