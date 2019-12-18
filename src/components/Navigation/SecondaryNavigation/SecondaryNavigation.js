import React from 'react';
import propTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';

export default function SecondaryNavigation({ handleItemClick, userAuthenticated }) {
  return (
    <Menu borderless >
      <Menu.Menu position='right'>
        {!userAuthenticated ? <>
          <Menu.Item
          data-test='Link-Signup'
            name='signup'
            onClick={handleItemClick}
          >
            Sign Up
          </Menu.Item>
          <Menu.Item
          data-test='Link-Login'
          className='Test-Login'
            name='login'
            onClick={handleItemClick}
          >
            Login
          </Menu.Item>
        </> :
          <Menu.Item
          data-test='Link-Logout'
            name='logout'
            onClick={handleItemClick}
          >
            Logout
        </Menu.Item>
        }
      </Menu.Menu>
    </Menu>
  )
}

SecondaryNavigation.propTypes = {
  userAuthenticated: propTypes.string.isRequired,
  handleItemClick: propTypes.func.isRequired
}

