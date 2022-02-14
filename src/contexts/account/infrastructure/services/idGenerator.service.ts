import IIdGenerator from "../../aplication/infrastructureServices/idGenerator";
import {randomUUID} from "crypto";

class IdGeneratorService implements IIdGenerator{

    constructor() {}

    static create(): IIdGenerator{
        return new IdGeneratorService();
    }

    generateId(): string {
        return randomUUID();
    }
}

export default IdGeneratorService;