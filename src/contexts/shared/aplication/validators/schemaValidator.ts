import {AnySchema} from "yup";

const validate = (schema: AnySchema) => async (req: any, res: any, next: any) => {
    try {
        const resource = req.body;
        await schema.validate(resource)
        return next();
    } catch (e) {
        if(e instanceof Error) res.status(400).json({error: e.message}).send();
    }
};

export default validate;