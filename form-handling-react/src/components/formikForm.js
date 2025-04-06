import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const FormikForm = () => {
  const handleSubmit = (values) => {
    console.log('User Registered:', values);
    // Mock API call can be placed here
  };

  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <h2>Register</h2>
          <Field type="text" name="username" placeholder="Username" />
          <ErrorMessage name="username" component="div" className="error" />

          <Field type="email" name="email" placeholder="Email" />
          <ErrorMessage name="email" component="div" className="error" />

          <Field type="password" name="password" placeholder="Password" />
          <ErrorMessage name="password" component="div" className="error" />

          <button type="submit">Register</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;