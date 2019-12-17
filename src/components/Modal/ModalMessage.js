import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

export default function ModalMessage() {
  return (
    <Modal trigger={<Button>Make a conversion</Button>} basic size='small'>
      <Header icon='ban' content='Upss! not an user' />
      <Modal.Content>
        <h3>
          You must be logged in to use our app
      </h3>
      </Modal.Content>
      <Modal.Actions>
        <Link to='/signup'>
          <Button
            color='blue' inverted>
            <Icon name='user plus' /> Signup
      </Button>
        </Link>
        <Link to='/login'>

          <Button
            color='green' inverted>
            <Icon name='checkmark' /> Login
      </Button>
        </Link>
      </Modal.Actions>
    </Modal>
  )
}
