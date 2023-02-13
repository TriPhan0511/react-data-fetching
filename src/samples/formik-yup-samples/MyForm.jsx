import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import styled from '@emotion/styled'

const ErrorMessageWrapper = styled(ErrorMessage)`
	padding-left: 10px;
	color: red;
`

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
					<Field type='text' id='firstName' name='firstName' />
					<ErrorMessageWrapper name='firstName' component='span' />
				</div>
				<div>
					<label htmlFor='lastName'>Last Name</label>
					<Field type='text' id='lastName' name='lastName' />
					<ErrorMessageWrapper name='lastName' component='span' />
				</div>
				<div>
					<label htmlFor='email'>Email Address</label>
					<Field type='email' id='email' name='email' />
					<ErrorMessageWrapper name='email' component='span' />
				</div>
				<button type='submit'>Submit</button>
			</Form>
		</Formik>
	)
}

export default MyForm
