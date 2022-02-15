import express from "express";
import validate from "../../../shared/aplication/validators/schemaValidator";
import {groupSchemas} from "../../aplication/controllers/schemas";
import controllers from "../../aplication/controllers";
import {UserTokenValidation} from "../../../shared/infrastructure/auth/verifyToken";

const router = express.Router();

router.post('/group/create', UserTokenValidation, validate(groupSchemas.createGroupSchema), controllers.createGroupController);

export { router as groupRouter };