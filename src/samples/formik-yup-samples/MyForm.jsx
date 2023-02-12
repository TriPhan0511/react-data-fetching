import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

const MyForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less.')
          .required('First name is required.'),
        lastName: Yup.string()
          .max(20, 'Must be characters or less.')
          .required('Last name is required.'),
        email: Yup.string().email('Invalid email address.').required('Email address is required.'),
      })}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2))
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor='firstName'>First Name</label>
            <input type='text' id='firstName' {...formik.getFieldProps('firstName')} />
            {formik.touched.firstName && formik.errors.firstName ? (
              <span style={{ paddingLeft: '10px', color: 'red' }}>{formik.errors.firstName}</span>
            ) : null}
          </div>
          <div>
            <label htmlFor='lastName'>Last Name</label>
            <input type='text' id='lastName' {...formik.getFieldProps('lastName')} />
            {formik.touched.lastName && formik.errors.lastName ? (
              <span style={{ paddingLeft: '10px', color: 'red' }}>{formik.errors.lastName}</span>
            ) : null}
          </div>
          <div>
            <label htmlFor='email'>Email Address</label>
            <input type='email' id='email' {...formik.getFieldProps('email')} />
            {formik.touched.email && formik.errors.email ? (
              <span style={{ paddingLeft: '10px', color: 'red' }}>{formik.errors.email}</span>
            ) : null}
          </div>
          <button type='submit'>Submit</button>
        </form>
      )}
    </Formik>
  )
}

export default MyForm
