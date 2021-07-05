import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { ApolloProvider } from '@apollo/react-hooks';
// import ApolloClient from 'apollo-boost';

import Header from './components/Header';
import Home from './pages/Home';
// import Footer from './components/Footer';

// import Home from './pages/Home';
// import Login from './pages/Login';
// import SingleThought from './pages/SinglePost';
// import Dashboard from './pages/Dashboard';

// const client = new ApolloClient({
//   request: operation => {
//     const token = localStorage.getItem('id_token');

//     operation.setContext({
//       headers: {
//         authorization: token ? `Bearer ${token}` : ''
//       }
//     });
//   },
//   uri: '/graphql'
// });

function App() {
  return (
    // <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <Home />
          {/* <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/post/:id" component={SingleThought} />
            </Switch>
          </div>
          <Footer /> */}
        </div>
      </Router>
    // </ApolloProvider>
  );
}

export default App;
