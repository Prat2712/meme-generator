import { TextField, Button } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import Swal from "sweetalert2";
import * as Yup from "yup";

const Login = () => {
  const handleFormSubmit = (formdata) => {
    console.log("Form submitted!!");
    console.log(formdata);

    fetch('http://localhost:5000/user/authenticate', {
      method: 'POST',
      body : JSON.stringify(formdata),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      if(res.status === 200){
        Swal.fire({
          icon : 'success',
          title : 'Success',
          text : 'Login Successful'
        })
      }else if(res.status === 300){
        Swal.fire({
          icon : 'error',
          title : 'Oops!!',
          text : 'Invalid Credentials'
        })
      }
    })

  };

  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(8, "Password should be longer than 8 characters")
      .required("Required"),
  });

  return (
    <div style={{ background: "#eee", height: "100vh" }}>
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h3 className="text-muted text-center">Login Form</h3>
              <hr />

              <Formik
                initialValues={{ email: "", password: "" }} //specifying initial value for form
                onSubmit={handleFormSubmit} // function to handle form submission
                validationSchema={loginSchema}
              >
                {({ values, handleChange, handleSubmit, errors, touched }) => (
                  <form onSubmit={handleSubmit}>
                    <TextField
                      sx={{ mt: 3 }}
                      fullWidth
                      label="Email"
                      placeholder="Email Address"
                      id="email"
                      value={values.email}
                      onChange={handleChange}
                      error={Boolean(errors.email) && touched.email}
                      helperText={touched.email ? errors.email : ""}
                    />

                    <TextField
                      sx={{ mt: 3 }}
                      fullWidth
                      type="password"
                      label="Password"
                      placeholder="Password"
                      id="password"
                      value={values.password}
                      onChange={handleChange}
                      error={Boolean(errors.password) && touched.password}
                      helperText={touched.password ? errors.password : ""}
                    />

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 5 }}
                    >
                      Login Now
                    </Button>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;