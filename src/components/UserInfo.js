import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { createUserInfo } from '../actions/userActions'
import { connect } from 'react-redux'
import './forms.css'

const validationSchema = Yup.object({
  firstName: Yup.string().required('Please, enter your first name. Is required!'),
  lastName: Yup.string().required('Please, enter your last name. Is required!'),
  email: Yup.string().email().required('Please, enter your email. Is required!'),
  date: Yup.string().required('Please, enter your date. Is required!'),
})

function UserInfo(props) {
  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '', date: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        const user = {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          date: values.date,
        }
        props.createUserInfo(user)
      }}>
      {({ handleSubmit, handleChange, values, errors, touched }) => (
        <form data-testid="form" onSubmit={handleSubmit}>
          <div class="mb-3">
            <input
              type="text"
              name="firstName"
              className="form-control"
              data-testid="firstName"
              value={values.firstName}
              onChange={handleChange} 
              placeholder='First name'/>
            {errors.firstName && touched.firstName && (
              <div className="error" data-testid="error-firstName">
                {errors.firstName}
              </div>
            )}
          </div>
          <div class="mb-3">
          <input
            type="text"
            name="lastName"
            className="form-control"
            data-testid="lastName"
            value={values.lastName}
            onChange={handleChange} 
            placeholder='Last name'/>
          {errors.lastName && touched.lastName && (
            <div className="error" data-testid="error-lastName">
              {errors.lastName}
            </div>
          )}
        </div>
        <div class="mb-3">
          <input
            type="email"
            name="email"
            value={values.email}
            className="form-control"
            data-testid="email"
            onChange={handleChange}
            placeholder='Email'/>
          {errors.email && touched.email && (
            <div className="error" data-testid="error-email">
              {errors.email}
            </div>
          )}
        </div>
        <div class="mb-3">
          <input
            type="date"
            name="date"
            value={values.date}
            className="form-control"
            data-testid="date"
            onChange={handleChange}
            placeholder='Event date'/>
          {errors.date && touched.date && (
            <div className="error" data-testid="error-date">
              {errors.date}
            </div>
          )}
          </div>
          <button className="btn btn-danger text w-100" type="submit" data-testid="submit">
            Save event
          </button>
        </form>
      )}
    </Formik>
  )
}

export default connect(null, { createUserInfo })(UserInfo)
