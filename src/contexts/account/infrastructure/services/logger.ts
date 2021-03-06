import jwt from 'jsonwebtoken'
import ILogger from "../../aplication/infrastructureServices/logger";

class JWTLogger implements ILogger{

    private constructor() {}

    static create(): ILogger{
        return new JWTLogger();
    }

    login(userId: string): string {
        return jwt.sign({_id: userId}, 'secretiveness', {
            expiresIn: 60 * 60 * 24 // 24 hours
        });
    }
}

export default JWTLogger;