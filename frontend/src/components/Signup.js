import { TextField, Button } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import Swal from "sweetalert2";
import * as Yup from "yup";
import "./Signup.css";

const Signup = () => {
  const handleFormSubmit = (formdata) => {
    console.log("Form submitted!!");
    console.log(formdata);

    fetch('http://localhost:5000/user', {
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
          text : 'Signup Successful'
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

  const signupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(8, "Password should be longer than 8 characters")
      .required("Required"),
  });

  return (
    <header class="text-white text-center signup-bg">
    <div>
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <img class= 'card-img top'
              src='https://w7.pngwing.com/pngs/986/953/png-transparent-houston-rockets-internet-meme-basketball-meme-face-hand-logo.png'
              alt=""/>
               <h3 className="text-muted text-center">Signup</h3>
              <hr />

              <Formik
                initialValues={{ email: "", password: "" }} //specifying initial value for form
                onSubmit={handleFormSubmit} // function to handle form submission
                validationSchema={signupSchema}
              >
                {({ values, handleChange, handleSubmit, errors, touched }) => (
                  <form onSubmit={handleSubmit}>
                      <TextField
                      sx={{ mt: 3 }}
                      fullWidth
                      label="Name"
                      placeholder="Name"
                      id="Name"
                      value={values.name}
                      onChange={handleChange}
                      error={Boolean(errors.name) && touched.name}
                      helperText={touched.name ? errors.name : ""}
                    />
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
                     <TextField
                      sx={{ mt: 3 }}
                      fullWidth
                      type="password"
                      label=" Confirm Password"
                      placeholder="Confirm Password"
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
                      Signup
                    </Button>
                  </form>
                )}
              </Formik>             
            </div>
          </div>
        </div>
      </div>
    </div>
    </header>
  );
};

export default Signup;