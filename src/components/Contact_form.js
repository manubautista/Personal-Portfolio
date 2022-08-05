import React from "react";
import { Formik, Form, Field } from "formik";
import AlertForm from "./AlertForm";


const ContactForm = () => {

  return (
    <>
      <Formik initialValues= {{
        name:'',
        email:'',
        message:''
      }}
        validate={(values) => {
          const errors = {};
            if (!values.name) {
              errors.name = "Por favor, indique su nombre";
            } else if (!values.email) {
              errors.email = "Campo obligatorio";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Dirección de mail invalida";
            } else if (!values.message) {
              errors.message = "El mensaje no puede enviarse vacio"
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
       
        {({
          values,
          errors,
          touched,
          isSubmitting,
        }) => (

          <Form>

               <Field 
               name="name"
               type="name"
               placeholder="Escriba su nombre aqui"
                /> 
              {errors.name && touched.name && <AlertForm error={errors.name}/>}

               <Field 
               name="email"
               type="email"
               placeholder="Ingrese una direccion de e-mail"
                /> 
              {errors.email && touched.email && <AlertForm error={errors.email}/>}

               <Field 
               className="textarea"
               name="message"
               type="message"
               placeholder="Escriba aqui su mensaje"
                /> 
              {errors.message && touched.message && <AlertForm error={errors.message}/>}

          <button type="submit" disabled={isSubmitting} className="submit">
             Enviar
           </button>
         </Form>
       )}
     </Formik>
   </>
 )};
      
export default ContactForm;
