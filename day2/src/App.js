import './App.css';
import Navbar from './components/Navbar/Navbar';
import Todos from './components/TodoComponents/Todos';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/Login/Login';
import UsersList from './components/Users/UsersList';

function App() {
  return (
    <Router>
      <div className="App container">
        <Navbar />
        <div className="content">
            <Switch>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route path="/todos">
                <Todos />
              </Route>
              <Route path="/users">
                <UsersList />
              </Route>
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
