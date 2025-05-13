import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { registerUserAction } from "../../Redux/Auth/auth.action";
import { useNavigate } from "react-router-dom";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  gender: "",
};
const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  gender: Yup.string().required("Gender is required"),
});
export default function Register() {
  const [gender, setGender] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    console.log("Form values", values);
    dispatch(registerUserAction({data: values}))
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
            <div className = "rounded-4xl m-7">
              <Field
                name="firstName"
                placeholder="First Name"
                type="text"
                as={TextField}
                variant="outlined"
                fullWidth
              />
              <ErrorMessage
                name="firstName"
                component={"div"}
                className="text-red-500"
              />
            </div>
            <div className = "rounded-4xl m-7">
              <Field
                name="lastName"
                placeholder="Last Name"
                type="text"
                as={TextField}
                variant="outlined"
                fullWidth
              />
              <ErrorMessage
                name="lastName"
                component={"div"}
                className="text-red-500"
              />
            </div>
            <div className = "rounded-4xl m-7">
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
            <div className = "rounded-4xl m-7">
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
            <div className = "rounded-4xl m-7">
              <Field name="gender">
                {({ field, form }) => (
                  <RadioGroup
                    {...field} // Make sure this binds `field` to Formik
                    row
                    aria-label="gender"
                  >
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                  </RadioGroup>
                )}
              </Field>
            </div>
            <div className = "rounded-4xl m-7 shadow-blue-500/50">
              <Button
                sx={{ padding: ".8rem 0rem" }}
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
              >
                Register
              </Button>
            </div>
          </div>
        </Form>
      </Formik>
      <div className="flex justify-center items-center gap-2">
        <p>Already a user ?</p>
        <Button onClick={() => navigate("/login")}>Login</Button>
      </div>
    </>
  );
}
