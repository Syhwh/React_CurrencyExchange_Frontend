/* eslint-disable react/prop-types */
import React, { useState, createContext, useEffect } from "react";
import io from 'socket.io-client';
import { connect } from 'react-redux';
import { updateConversionRates } from '../redux/actions/api.actions';

export const SocketContext = createContext();
export const useWebsocket = () => React.useContext(SocketContext);

let socket;

function SocketManager({ children, updateRates }) {
  const [currencyRates, setCurrencyRates] = useState({});
  useEffect(() => {
    socket = io.connect('localhost:3001');
    socket.emit('subscribeToUpdateRates', 1000 * 60 * 2);
    socket.on('getRates', (newConversionRates) => {
      updateRates(newConversionRates);
      setCurrencyRates({ ...currencyRates, newConversionRates })
    });
    return () => {
      socket.emit('disconnect');
      socket.disconnect();
    }
  }, [])
  return (
    <SocketContext.Provider value={{
      currencyRates
    }}>
      {children}
    </SocketContext.Provider>
  )
}


const mapDispatchToProps = {
  updateRates: updateConversionRates
};

export default connect(null, mapDispatchToProps)(SocketManager);;
