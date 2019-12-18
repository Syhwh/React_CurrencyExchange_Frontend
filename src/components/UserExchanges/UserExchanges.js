import React from 'react';
import propTypes from 'prop-types';
import { Table, Container } from 'semantic-ui-react';

export default function UserExchanges({ UserExchangesData }) {
  return (
    <Container
      style={{ marginTop: '3rem' }}>
      <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>From</Table.HeaderCell>
            <Table.HeaderCell>To</Table.HeaderCell>
            <Table.HeaderCell>Amount</Table.HeaderCell>
            <Table.HeaderCell>Total</Table.HeaderCell>
            <Table.HeaderCell>Exc. Rate</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {UserExchangesData && UserExchangesData.length > 0 &&
            UserExchangesData.map(({ id, query, info, result }) => {
              return (
                <Table.Row key={id}>
                  <Table.HeaderCell>{new Date(info.timestamp).toDateString()}</Table.HeaderCell>
                  <Table.HeaderCell>{query.from}</Table.HeaderCell>
                  <Table.HeaderCell>{query.to}</Table.HeaderCell>
                  <Table.HeaderCell>${query.amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</Table.HeaderCell>
                  <Table.HeaderCell>${result.toFixed(4).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</Table.HeaderCell>
                  <Table.HeaderCell>{info.rate.toFixed(4)}</Table.HeaderCell>
                </Table.Row>
              )
            })}
        </Table.Body>
      </Table>
    </Container >
  )
}

UserExchanges.propTypes = {
  UserExchangesData: propTypes.oneOfType([propTypes.object]).isRequired
}