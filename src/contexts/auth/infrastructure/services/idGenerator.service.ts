import IIdGenerator from "../../aplication/infrastructureServices/idGenerator";

class IdGeneratorService implements IIdGenerator{

    constructor() {}

    static create(): IIdGenerator{
        return new IdGeneratorService();
    }

    generateId(): string {
        const uuid = require('uuid');
        const newUuid = uuid.v4();
        return newUuid.getDashFreeUUID();
    }
}

export default IdGeneratorService;