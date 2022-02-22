import IUrlValidator from "../../aplication/infrastructureServices/urlValidator";

class UrlValidatorInfrastructureService implements IUrlValidator{

    private constructor() {}

    static create(): UrlValidatorInfrastructureService{
        return new UrlValidatorInfrastructureService();
    }

    public isValid(urlStr: string): boolean {
        let url;

        try {
            url = new URL(urlStr);
        } catch (_) {
            return false;
        }

        return url.protocol === "http:" || url.protocol === "https:";
    }

}

export default UrlValidatorInfrastructureService;