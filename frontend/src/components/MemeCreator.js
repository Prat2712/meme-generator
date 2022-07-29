import { TextField } from "@mui/material";
import { Formik } from "formik";
import React from "react";

const MemeCreator = () => {
  const memeForm = {
    title: "",
    author: "",
    file: "",
  };

  const memeSubmit = (formdata) => {
    console.log(formdata);

    // 1. url
    // 2. request method
    // 3. data to send
    // 4. Data Format
  };

  return (
    <div>
      <h1>MemeCreator</h1>

      <Formik initialValues={memeForm} onSubmit={memeSubmit}>
        {({ values, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              label="Meme Title"
              id="title"
              value={values.title}
              onChange={handleChange}
            />
            <TextField
              label="Meme Author"
              id="author"
              value={values.author}
              onChange={handleChange}
            />
            <button className="btn btn-primary">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default MemeCreator;