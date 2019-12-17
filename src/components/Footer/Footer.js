import React from 'react';
import { Container, Grid, Header, List, Image, Segment } from "semantic-ui-react";
import placeholder from '../../assets/images/placeholder.png';

export default function Footer() {
  return (

    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="About" />
              <List link inverted>
                <List.Item as="a">Sitemap</List.Item>
                <List.Item as="a">Contact Us</List.Item>
                <List.Item as="a">FAQ</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Services" />
              <List link inverted>
                <List.Item as="a">Currency Rates</List.Item>
                <List.Item as="a">Conversion</List.Item>
                <List.Item as="a">How To Access</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Contact us" />

              <p>
                lorem ipso...
              </p>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" inverted>
                Footer Header
              </Header>
              <Grid columns='three' divided>
                <Grid.Row>
                  <Grid.Column>
                    <Image src={placeholder} />
                  </Grid.Column>
                  <Grid.Column>
                    <Image src={placeholder} />
                  </Grid.Column>
                  <Grid.Column>
                    <Image src={placeholder} />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  )
}