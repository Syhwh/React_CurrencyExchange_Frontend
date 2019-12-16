import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { loginUser } from '../../redux/actions/user.actions';
import LoginForm from './LoginForm';


const initialValues = {
  userEmail: '',
  userPassword: '',
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
});

function LoginFormContainer({ loginUserAction, responseError }) {
  const history = useHistory();
  const onSubmit = (values, { resetForm, setSubmitting }) => {
    loginUserAction(values);
    resetForm();
    setSubmitting(false);
    history.push('/')
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={onSubmit}
    >
      {(props) => <LoginForm props={props} responseError={responseError} />}
    </Formik>
  )
}

const mapStateToProps = ({ user }) => {
  return {
    responseError: user.error
  }
}
const mapDispatchToProps = {
  loginUserAction: loginUser
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer)

LoginFormContainer.propTypes = {
  loginUserAction: propTypes.func.isRequired,
  responseError: propTypes.string
}
LoginFormContainer.defaultProps = {
  responseError: null
}