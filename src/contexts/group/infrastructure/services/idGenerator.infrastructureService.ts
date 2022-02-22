import IIdGenerator from "../../aplication/infrastructureServices/idGenerator";
import {randomUUID} from "crypto";

class IdGeneratorInfrastructureService implements IIdGenerator{

    private constructor() {}

    static create(): IIdGenerator{
        return new IdGeneratorInfrastructureService();
    }

    generateId(): string {
        return randomUUID();
    }
}

export default IdGeneratorInfrastructureService;