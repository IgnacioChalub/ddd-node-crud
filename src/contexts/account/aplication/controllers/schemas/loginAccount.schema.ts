import * as yup from "yup";

const loginAccountSchema = yup.object().shape({
    username: yup.string().required("username required"),
    password: yup.string().required("password required"),
});

export default loginAccountSchema;