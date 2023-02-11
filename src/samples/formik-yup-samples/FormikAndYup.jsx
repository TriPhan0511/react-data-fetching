import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

const FormikAndYup = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
      lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor='first'>First Name</label>
        <input
          type='text'
          id='firstName'
          name='firstName'
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <span style={{ paddingLeft: '10px', color: 'red' }}>{formik.errors.firstName}</span>
        ) : null}
      </div>
      <div>
        <label htmlFor='last'>Last Name</label>
        <input
          type='text'
          id='lastName'
          name='lastName'
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <span style={{ paddingLeft: '10px', color: 'red' }}>{formik.errors.lastName}</span>
        ) : null}
      </div>
      <div>
        <label htmlFor='email'>Email Address</label>
        <input
          type='email'
          id='email'
          name='email'
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <span style={{ paddingLeft: '10px', color: 'red' }}>{formik.errors.email}</span>
        ) : null}
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default FormikAndYup
