import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { AuthContext } from '../../helpers/authentication.context';
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
  const { authLoginUser } = useContext(AuthContext);
  const history = useHistory();

  const redirectToHome = (id) => {
    authLoginUser(id);
    history.push('/')
  }

  const onSubmit = (values, { resetForm, setSubmitting }) => {
    loginUserAction(values, redirectToHome);
    resetForm();
    setSubmitting(false);
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={onSubmit}
    >
      {(props) =>
        <LoginForm
          props={props}
          responseError={responseError}
        />
      }
    </Formik>
  )
}

const mapStateToProps = ({ user }) => {
  return {
    responseError: user.userError
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