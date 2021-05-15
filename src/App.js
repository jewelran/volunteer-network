import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddEvent from './Component/AddEvent/AddEvent';
import Home from './Component/Home/Home';


function App() {
  return (
    <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/addEvent">AddEvent</Link>
        </li>
       
      </ul>

      <hr />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/addEvent">
          <AddEvent />
        </Route>
      </Switch>
    </div>
  </Router>

  );
}

export default App;
