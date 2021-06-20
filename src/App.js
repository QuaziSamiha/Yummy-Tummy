import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/users">
            {/* <Users /> */}
          </Route>
          <Route exact path="/">
            {/* <Home /> */}
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
