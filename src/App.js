import React from 'react';
import { BrowserRouter as Router, } from 'react-router-dom';
import { AuthProvider } from './helpers/authentication.context';
import NavigationComponent from './components/Navigation';

import routes from './routes/routes';
import 'semantic-ui-css/semantic.min.css';


function App() {
  return (
    <Router>
      <AuthProvider>
        <NavigationComponent />
        {routes}
      
      </AuthProvider>
    </Router>
  );
}

export default App;
