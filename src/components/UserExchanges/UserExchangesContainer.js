import React, { useEffect, useContext } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { Dimmer, Loader } from 'semantic-ui-react';
import { getUserCurrencyExchanges } from '../../redux/actions/api.actions';
import { AuthContext } from '../../helpers/authentication.context';
import UserExchanges from './UserExchanges';

function UserExchangesContainer({ actionGetUserExchanges, userHistory }) {

  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      actionGetUserExchanges(user);
    }
  }, [])

  if (!userHistory) return (<>
    <Dimmer active>
      <Loader size='huge'>Loading</Loader>
    </Dimmer>
  </>)
  return (
    <>
      <UserExchanges
        UserExchangesData={userHistory} />
    </>
  )
}

const mapDispatchToProps = {
  actionGetUserExchanges: getUserCurrencyExchanges
}

const mapStateToProps = ({ apiData }) => {
  return {
    userHistory: apiData.userCurrencyExchangeHistory
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserExchangesContainer);

UserExchangesContainer.propTypes = {
  actionGetUserExchanges: propTypes.func.isRequired,
  userHistory: propTypes.oneOfType([propTypes.object]).isRequired
}
