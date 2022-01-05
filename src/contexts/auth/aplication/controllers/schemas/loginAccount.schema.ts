import * as yup from "yup";

const loginAccountSchema = yup.object().shape({
    username: yup.string().required("username required"),
    email: yup.string().required("email required"),
});

export default loginAccountSchema;