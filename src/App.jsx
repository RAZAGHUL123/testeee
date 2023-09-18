import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import {
  BrowserRouter as Router, Route, Switch, NavLink,
} from 'react-router-dom';
import { AppContextProvider } from './AppContext';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <AppContextProvider>
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to="/">My App</NavLink>
            <div className="navbar-nav">
              <NavLink className="nav-item nav-link" to="/">Home</NavLink>
              <NavLink className="nav-item nav-link" to="/about">About</NavLink>
              <NavLink className="nav-item nav-link" to="/contact">Contact</NavLink>
            </div>
          </nav>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          {/* Add more routes as needed */}
        </Switch>
      </Router>
    </AppContextProvider>
  );
}

export default App;
