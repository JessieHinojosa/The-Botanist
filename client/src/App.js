import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Detail from './pages/Detail';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Success from './pages/Success';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';




function App() {
  return (
    <Router>
      <div className="App">
        <Header />
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
