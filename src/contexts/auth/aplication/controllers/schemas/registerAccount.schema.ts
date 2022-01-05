import * as yup from "yup";

const registerAccountSchema = yup.object().shape({
    username: yup.string().required("username required"),
    email: yup.string().required("email required"),
    password: yup.string().required("password required"),
});

export default registerAccountSchema;