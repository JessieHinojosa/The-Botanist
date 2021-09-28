import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import store from './utils/store';
import { Provider } from 'react-redux';



// Import pages
import Home from './pages/Home';
import Categories from './pages/Categories';
import Detail from './pages/Detail';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Success from './pages/Success';
import Account from './pages/Account';
import AccountDetails from './pages/AccountDetails';
import OrderHistory from './pages/OrderHistory';
import NoMatch from './pages/NoMatch';

// Import components
import Nav from './components/Nav';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer/index';

// Link to GraphQL
const httpLink = createHttpLink({
  uri: '/graphql',
});

// 
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// 
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



function App() {
  const [isOpen, setIsOpen ] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  return (
    <ApolloProvider client={client} >
    <Router>
      <div className="App">
      <Provider store={store}>
      <Nav toggleDropdown={toggleDropdown} />
      <Dropdown isOpen={isOpen} toggleDropdown={toggleDropdown} />
        <main>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/categories" component={Categories} />
              <Route exact path="/products/:id" component={Detail} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/account" component={Account} />
              <Route exact path="/account-details" component={AccountDetails} />
              <Route exact path="/orderhistory" component={OrderHistory} />
              <Route exact path="/success" component={Success} />
              <Route component={NoMatch} />
          </Switch>
        </main>
        <Footer />
        </Provider>
      </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
