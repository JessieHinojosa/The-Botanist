import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Indoor from './pages/Indoor';
import Outdoor from './pages/Outdoor';
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
              <Route exact path="/indoor" component={Indoor} />
              <Route exact path="/outdoor" component={Outdoor} />
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
