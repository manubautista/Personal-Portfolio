import React from "react";
import { Formik, Form, Field } from "formik";
import AlertForm from "./AlertForm";

const ContactForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Please, type your name here";
          } else if (!values.email) {
            errors.email = "Obligatory field";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid Email adress";
          } else if (!values.message) {
            errors.message = "Type something!";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            resetForm();
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values, errors, touched, isSubmitting }) => (
          <Form>
            <Field name="name" type="name" placeholder="Name" />
            {errors.name && touched.name && <AlertForm error={errors.name} />}

            <Field name="email" type="email" placeholder="Your e-mail adress" />
            {errors.email &&
              touched.email && <AlertForm error={errors.email} />}

            <Field
              className="textarea"
              name="message"
              type="message"
              placeholder="Message"
            />
            {errors.message &&
              touched.message && <AlertForm error={errors.message} />}

            <button type="submit" disabled={isSubmitting} className="submit">
              Send
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;
