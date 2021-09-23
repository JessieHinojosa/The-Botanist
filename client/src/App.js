import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


// Import pages
import Home from './pages/Home';
import Categories from './pages/Categories';
import Detail from './pages/Detail';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Success from './pages/Success';

// Import components
import Nav from './components/Nav';
import Footer from './components/Footer/index';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



function App() {
  return (
    <ApolloProvider client={client} >
    <Router>
      <div className="App">
        <h1 className='text-red'>The Botanist </h1>
        <Nav />
        <main>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/categories" component={Categories} />
              <Route exact path="/products/:id" component={Detail} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/success" component={Success} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
