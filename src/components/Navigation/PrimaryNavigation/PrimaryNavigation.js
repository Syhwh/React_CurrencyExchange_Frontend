import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Grid, Icon, Image, } from 'semantic-ui-react';
import logo from '../../../assets/images/logo.png';

export default function PrimaryNavigation() {
  return (
    <Container >
      <Image
        centered
        circular
        size="small"
        src={logo}
        style={{
          marginBottom: '1em',
        }}
      />
      <Grid stackable columns={1} >
        <Grid.Row centered columns={6}>
          <Grid.Column centered >
            <Link centered to='/'>
              <Button
                primary
                size='small'
              >
                <Icon name='home' />
                Home
            </Button>
            </Link>
          </Grid.Column>
          <Grid.Column centered>
            <Link centered to='/'>
              <Button
                primary
                size='small'
              >About
            </Button>
            </Link>
          </Grid.Column>
          <Grid.Column >
            <Link centered to='/exchanges'>
              <Button
                primary
                size='small'
              >Exchanges
            </Button>
            </Link>
          </Grid.Column>
          <Grid.Column >
            <Link centered to='/'>
              <Button
                primary
                size='small'
              >FAQ
            </Button>
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

