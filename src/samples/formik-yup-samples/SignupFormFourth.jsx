import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const SignupFormFourth = () => {
	return (
		<Formik
			initialValues={{
				firstName: '',
				lastName: '',
				email: '',
				message: '',
				colors: 'red',
				acceptedTerms: false,
			}}
			validationSchema={Yup.object({
				firstName: Yup.string()
					.max(15, 'Must be 15 characters or less.')
					.required('First name is required.'),
				lastName: Yup.string()
					.max(20, 'Must be 20 characters or less.')
					.required('Last name is required.'),
				email: Yup.string()
					.email('Invalid email address.')
					.required('Email address is required.'),
			})}
			onSubmit={(values) => {
				alert(JSON.stringify(values, null, 2))
			}}
		>
			<Form>
				<div>
					<label htmlFor='firstName'>First Name</label>
					<Field name='firstName' type='text' id='firstName' />
					<ErrorMessage name='firstName' />
				</div>

				<div>
					<label htmlFor='lastName'>Last Name</label>
					<Field name='lastName' type='text' />
					<ErrorMessage name='lastName' />
				</div>

				<div>
					<label htmlFor='email'>Email</label>
					<Field name='email' type='email' />
					<ErrorMessage name='email' />
				</div>

				<div>
					<label htmlFor='message'>Message</label>
					<Field name='message' as='textarea' />
				</div>

				<div>
					<label htmlFor='colors'>Choose your favorite color</label>
					<Field as='select' name='colors'>
						<option value='red'>Red</option>
						<option value='green'>Green</option>
						<option value='blue'>Blue</option>
					</Field>
				</div>

				<div>
					<Field name='acceptedTerms' type='checkbox' />
					<label htmlFor='acceptedTerms'>
						I accept the terms and conditions
					</label>
				</div>
				<button type='submit'>Submit</button>
			</Form>
		</Formik>
	)
}

export default SignupFormFourth
