import * as yup from "yup";

const createGroupSchema = yup.object().shape({
    name: yup.string().required("group name required"),
    description: yup.string().required("group description required"),
});

export default createGroupSchema;