import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

export default function LoginForm({ props, responseError }) {

  const {
    handleBlur,
    touched,
    isSubmitting,
    errors,
    handleChange,
    handleSubmit,
    values
  } = props

  return (<>
    <Grid textAlign='center' style={{ height: '50vh' }} verticalAlign='middle' data-test='Login-Form-Component'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='blue' textAlign='center'>
          Log-in to your account
      </Header>
        <Form
          test-data='Form-Login'
          size='large'>
          <Segment stacked>
            {responseError &&
              <Message size='mini' negative>
                <p>{responseError}</p>
              </Message>}
            <Form.Input
              test-data='Input-Email'
              fluid icon='user'
              iconPosition='left'
              placeholder='E-mail address'
              name='userEmail'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.userEmail}
            />
            {touched.userEmail && errors.userEmail &&
              <Message size='mini' negative>
                <p>{errors.userEmail}</p>
              </Message>}
            <Form.Input
              test-data='Input-Password'
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              name='userPassword'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.userPassword}
            />
            {touched.userPassword && errors.userPassword &&
              <Message size='mini' negative>
                <p>{errors.userPassword}</p>
              </Message>
            }
            <Button
              type='submit'
              color='blue'
              fluid size='large'
              disabled={isSubmitting}
              onClick={handleSubmit}
            >
              Login
          </Button>
          </Segment>
        </Form>
        <Message>
          <span> Doesn’t have an account?</span>
          <Link to='/signup'> Signup</Link>
        </Message>
      </Grid.Column>
    </Grid>
  </>
  )
}

LoginForm.propTypes = {
  props: propTypes.oneOfType([propTypes.object]),
  values: propTypes.oneOfType([propTypes.object]),
  errors: propTypes.oneOfType([propTypes.object]),
  touched: propTypes.oneOfType([propTypes.object]),
  handleChange: propTypes.func,
  handleBlur: propTypes.func,
  handleSubmit: propTypes.func,
  isSubmitting: propTypes.bool,
  userEmail: propTypes.string,
  userPassword: propTypes.string,
  responseError: propTypes.string
}
LoginForm.defaultProps = {
  props: undefined,
  values: undefined,
  errors: undefined,
  touched: undefined,
  handleChange: undefined,
  handleBlur: undefined,
  handleSubmit: undefined,
  isSubmitting: undefined,
  userEmail: '',
  userPassword: '',
  responseError: undefined
}