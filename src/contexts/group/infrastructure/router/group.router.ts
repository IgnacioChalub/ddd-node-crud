import express from "express";
import validate from "../../../shared/aplication/validators/schemaValidator";
import {groupSchemas} from "../../aplication/controllers/schemas";
import controllers from "../../aplication/controllers";
import {UserTokenValidation} from "../../../shared/infrastructure/auth/verifyToken";

const router = express.Router();

router.post('/group/create', UserTokenValidation, validate(groupSchemas.createGroupSchema), controllers.createGroupController);
router.post('/group/add-link/:groupId', UserTokenValidation, validate(groupSchemas.addLinkSchema), controllers.addLinkController)
router.get('/group/get-all', UserTokenValidation, controllers.getALlParticipantsGroupsController)
router.post('/group/permission/:groupId/:participantUsername', UserTokenValidation, validate(groupSchemas.changeParticipantPermissionSchema), controllers.changeParticipantPermissionController)

export { router as groupRouter };