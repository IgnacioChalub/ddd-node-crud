import createGroupSchema from "./createGroup.schema";
import addLinkSchema from "./addLink.schema";
import changeParticipantPermissionSchema from "./changeParticipantPermission.schema";

const schemas = {
    createGroupSchema,
    addLinkSchema,
    changeParticipantPermissionSchema
};

export { schemas as groupSchemas };