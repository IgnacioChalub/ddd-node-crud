import IEncrypter from "../../domain/infrastructureServices/encrypter";
import bcrypt from "bcrypt";

class EncrypterService implements IEncrypter{

    constructor() {}

    static create(): IEncrypter{
        return new EncrypterService();
    }

    encrypt(password: string): string {
        return bcrypt.hashSync(password, 5);
    }

}

export default EncrypterService;