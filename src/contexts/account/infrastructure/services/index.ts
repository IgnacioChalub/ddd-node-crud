import EmailValidatorService from "./emailValidator.service";
import IdGeneratorService from "./idGenerator.service";
import IEmailValidator from "../../domain/infrastructureServices/emailValidator";
import IEncrypter from "../../domain/infrastructureServices/encrypter";
import EncrypterService from "./encrypter.service";
import JWTLogger from "./logger";
import ILogger from "../../aplication/infrastructureServices/logger";
import IPasswordComparator from "../../aplication/infrastructureServices/passwordComparator";
import PasswordComapratorService from "./passwordComparator.service";

const emailValidatorService: IEmailValidator = EmailValidatorService.create();
const idGeneratorService: IdGeneratorService = IdGeneratorService.create();
const encrypterService: IEncrypter = EncrypterService.create();
const passwordComparatorService: IPasswordComparator = PasswordComapratorService.create();
const logger: ILogger = JWTLogger.create();

const infrastructureServices = {
    emailValidatorService,
    idGeneratorService,
    encrypterService,
    passwordComparatorService,
    logger
};

export default infrastructureServices;

