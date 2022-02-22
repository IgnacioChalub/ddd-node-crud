import * as yup from "yup";

const addLinkSchema = yup.object().shape({
    title: yup.string().required("link title required"),
    description: yup.string().required("link description required"),
    url: yup.string().required("url required"),
});

export default addLinkSchema;