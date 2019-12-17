import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Message, Segment, Checkbox } from 'semantic-ui-react'


export default function SignupForm({ props, responseError }) {
  const {
    values,
    handleBlur,
    touched,
    isSubmitting,
    errors,
    handleChange,
    handleSubmit,

  } = props
  return (<>
    <Grid
      textAlign='center'
      style={{ height: '60vh' }}
      verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='blue' textAlign='center'>
          Sign In or Create Your Account
      </Header>
        <Form size='large'>
          <Segment stacked>
            {responseError &&
              <Message size='mini' negative>
                <p>{responseError}</p>
              </Message>}
            <Form.Input
              fluid
              icon='user'
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
              </Message>}
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Confirm your password'
              type='password'
              name='userPasswordConfirm'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.userPasswordConfirm}
            />
            {touched.userPasswordConfirm && errors.userPasswordConfirm &&
              <Message size='mini' negative>
                <p>{errors.userPasswordConfirm}</p>
              </Message>}
            <Form.Field>
              <Checkbox
                name='termsAndConditions'
                label='I agree to the Terms and Conditions'
                checked={values.termsAndConditions}
              />
              {touched.termsAndConditions && errors.termsAndConditions &&
                <Message size='mini' negative>
                  <p>{errors.termsAndConditions}</p>
                </Message>}
            </Form.Field>

            <Button
              type='submit'
              color='blue'
              fluid
              size='large'
              disabled={isSubmitting}
              onClick={handleSubmit}
            >
              Sign up
          </Button>
          </Segment>
        </Form>
        <Message>
          <span> Already have an account?</span>
          <Link to='/login'> Login</Link>
        </Message>
      </Grid.Column>
    </Grid>
  </>
  )
}

SignupForm.propTypes = {
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
  userPasswordConfirm: propTypes.string,
  responseError: propTypes.string
}


SignupForm.defaultProps = {
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
  userPasswordConfirm: undefined,
  responseError: undefined
}