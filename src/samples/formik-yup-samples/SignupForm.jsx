import React from 'react'
import { useFormik } from 'formik'

const SignupForm = () => {
  // A custom validation funciton. This must return an object
  // which keys are symmetrical to our values/initialValues
  const validate = (values) => {
    const errors = {}

    if (!values.last) {
      errors.last = 'Required'
    } else if (values.last.length > 15) {
      errors.last = 'Must be 15 characters or less'
    }

    if (!values.first) {
      errors.first = 'Required'
    } else if (values.first.length > 20) {
      errors.first = 'Must be 20 characters or less'
    }

    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }

    return errors
  }

  const formik = useFormik({
    initialValues: {
      last: '',
      first: '',
      email: '',
    },
    validate: validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor='last'>Last Name</label>
        <input
          type='text'
          id='last'
          name='last'
          value={formik.values.last}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.last && formik.errors.last ? (
          <span style={{ paddingLeft: '10px', color: 'red' }}>{formik.errors.last}</span>
        ) : null}
      </div>

      <div>
        <label htmlFor='first'>First Name</label>
        <input
          type='text'
          id='first'
          name='first'
          value={formik.values.first}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.first && formik.errors.first ? (
          <span style={{ paddingLeft: '10px', color: 'red' }}>{formik.errors.first}</span>
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

export default SignupForm
