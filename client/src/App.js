import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

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


function App() {
  return (
    <Router>
      <div className="App">
        <h1 className='text-red'>youuuuu </h1>
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
  );
}

export default App;
