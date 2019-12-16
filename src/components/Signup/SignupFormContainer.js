import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import propTypes from 'prop-types';
import * as Yup from 'yup';
import { signupUser } from '../../redux/actions/user.actions';
import SignupForm from './SignupForm';


const initialValues = {
  userEmail: '',
  userPassword: '',
  userPasswordConfirm: '',
  termsAndConditions: false
}

const loginSchema = Yup.object().shape({
  userEmail:
    Yup.string()
      .email('Please write a valid email')
      .required('A valid email is required'),
  userPassword:
    Yup.string()
      .min(4, 'Password has to be longer than 4 characters!')
      .required('Password is required'),
  userPasswordConfirm:
    Yup.string()
      .oneOf([Yup.ref('userPassword'), null], "Passwords must match")
      .required('Password confirmation is required!'),
  termsAndConditions:
    Yup.boolean()
      .oneOf([true], 'You have to agree with our Terms and Conditions!')
});

function SignUpFormContainer({ signupUserAction, requestError }) {
  const history = useHistory();
  const onSubmit = (values, { resetForm, setSubmitting }) => {
    signupUserAction(values);
    resetForm();
    setSubmitting(false);
    history.push('/');
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={onSubmit}
      requestError={requestError}
    >
      {(props) => <SignupForm props={props} />}
    </Formik>
  )
}

const mapStateToProps = ({ user }) => {
  return {
    requestError: user.error
  }
}
const mapDispatchToProps = {
  signupUserAction: signupUser
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUpFormContainer)

SignUpFormContainer.propTypes = {
  signupUserAction: propTypes.func.isRequired,
  requestError: propTypes.string
}
SignUpFormContainer.defaultProps = {
  requestError: undefined
}