
import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../../helpers/authentication.context';
import SecondaryNavigation from './SecondaryNavigation';
import { logoutUser } from '../../../redux/actions/user.actions';

function SecondaryNavigationContainer({ actionLogoutUser }) {
  const { user, authLogOutUser } = useContext(AuthContext);
  const history = useHistory();
  const handleItemClick = (e, { name }) => {
    if (name !== 'logout') {
      history.push(`/${name}`);
    } else {
      actionLogoutUser();
      authLogOutUser();
    }
  }

  return (
    <SecondaryNavigation
      handleItemClick={handleItemClick}
      userAuthenticated={user}
    />
  )
}

const mapDispatchToProps = { actionLogoutUser: logoutUser }
export default connect(null, mapDispatchToProps)(SecondaryNavigationContainer)

SecondaryNavigationContainer.propTypes = {

  actionLogoutUser: propTypes.func.isRequired
}