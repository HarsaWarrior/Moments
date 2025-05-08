import {
  Button,
  TextField,
} from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import {useDispatch} from "react-redux"
import { loginUserAction } from "../../Redux/Auth/auth.action";

const initialValues = { email: "", password: "" };
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string()
    .min(6, "Password must be atleast 6 characters")
    .required("Password is required"),
});
export default function Login() {
  const [formValue, setFormValue] = useState();
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    console.log("Handle Submit", values);
    dispatch(loginUserAction({data: values}));
  };
  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        initialValues={initialValues}
      >
        <Form className="space-y-5">
          <div className="space-y-5">
            <div className = "rounded-4xl m-10">
              <Field
                name="email"
                placeholder="Email"
                type="email"
                as={TextField}
                variant="outlined"
                fullWidth
              />
              <ErrorMessage
                name="email"
                component={"div"}
                className="text-red-500"
              />
            </div>
            <div className = "rounded-4xl m-10">
              <Field
                name="password"
                placeholder="Password"
                type="password"
                as={TextField}
                variant="outlined"
                fullWidth
              />
              <ErrorMessage
                name="password"
                component={"div"}
                className="text-red-500"
              />
            </div>
            <div className = "rounded-4xl m-10 shadow-blue-500/50">
              <Button
                sx={{ padding: ".8rem 0rem" }}
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
              >
                Login
              </Button>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
}
