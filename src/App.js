import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Foods from './components/Home/Foods/Foods/Foods';
import OrderList from './components/Orders/OrderList/OrderList';
import DashBoard from './components/DashBoard/DashBoard/DashBoard';
import Review from './components/Orders/Review/Review';
import AddServices from './components/Admin/AddServices/AddServices';
import DisplayCustomerDetail from './components/Admin/DisplayCustomerDetail/DisplayCustomerDetail';
import AddAdmin from './components/Admin/AddAdmin/AddAdmin';
import ManageService from './components/Admin/ManageService/ManageService';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/foods">
            <Foods />
          </PrivateRoute>
          <PrivateRoute path='/dashboard'>
            <DashBoard />
          </PrivateRoute>
          <Route path='/orderList'>
            <OrderList />
          </Route>
          <Route path='/review'>
            <Review />
          </Route>
          <Route path='/addService'>
            <AddServices />
          </Route>
          <Route path='/allCustomerOrder'>
            <DisplayCustomerDetail />
          </Route>
          <Route path='/addAdmin'>
            <AddAdmin/>
          </Route>
          <Route path='/manageService'>
            <ManageService/>
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
