import PasswordComparator from "../../aplication/infrastructureServices/passwordComparator";
import bcrypt from "bcrypt";

class PasswordComapratorService implements PasswordComparator{

    constructor() {}

    static create(): PasswordComparator{
        return new PasswordComapratorService();
    }

    async compare(password: string, hashedPassword: string): Promise<boolean> {
        const auth = await bcrypt.compare(password, hashedPassword)
        if (auth) {
            return true;
        } else {
            return false;
        }
    }


}

export default PasswordComapratorService;