import * as yup from "yup";

const registerAccountSchema = yup.object().shape({
    username: yup.string().required("username required"),
    email: yup.string().required("email required"),
    password: yup.string().required("password required"),
    firstName: yup.string().required("first name required"),
    lastName: yup.string().required("last name required"),
    birthdate: yup.string().required("birthdate required"),
});

export default registerAccountSchema;