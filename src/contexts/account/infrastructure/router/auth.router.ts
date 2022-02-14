import express from "express";
import {authSchemas} from "../../aplication/controllers/schemas";
import validate from "../../../shared/aplication/validators/schemaValidator";
import controllers from "../../aplication/controllers";

const router = express.Router();

router.post('/register', validate(authSchemas.registerAccountSchema), controllers.RegisterAccountController);
router.post('/login', validate(authSchemas.loginAccountSchema), controllers.loginAccountController);

export { router as authRouter };