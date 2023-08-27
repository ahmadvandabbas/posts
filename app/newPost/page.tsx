"use client";
import Link from "next/link";
import React from "react";
import Style from "./newPost.module.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { Container } from "@mui/material";

interface FormValidation {
  title: string;
  body: string;
  id: number;
}
const FormSchema = yup.object<FormValidation>().shape({
  title: yup
    .string()
    .required("title is required")
    .min(0)
    .max(70, "Must be 70 character your title or less "),
  body: yup
    .string()
    .required("body is required")
    .min(0)
    .max(250, "Must be 250 character your title or less "),

  id: yup.number().required("id is required"),
});

const NewPost = () => {
  const formik = useFormik<{
    title: string;
    body: string;
  }>({
    initialValues: {
      title: "",
      body: "",
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Container>
      <form onSubmit={formik.handleSubmit} className={Style.form}>
        <h1 className={Style.titleForm}>create new post</h1>
        <label htmlFor="title" className={Style.label}>
          inter your post title :
        </label>
        <input
          className={Style.inputTitle}
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        <label htmlFor="body" className={Style.label}>
          inter your post body :
        </label>
        <input
          className={Style.inputBody}
          id="body"
          name="body"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.body}
        />
        <button className={Style.submitBtn} type="submit">
          Submit
        </button>
      </form>
      <Link href="/" style={{ color: "yellow" }}>
        <p>back to Home</p>
      </Link>
    </Container>
  );
};
export default NewPost;
