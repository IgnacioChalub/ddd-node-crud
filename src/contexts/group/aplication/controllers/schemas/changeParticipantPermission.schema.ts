import * as yup from "yup";

const changeParticipantPermissionSchema = yup.object().shape({
    viewer: yup.boolean().required("viewer true/false requiered"),
    editor: yup.string().required("editor true/false required"),
});

export default changeParticipantPermissionSchema;