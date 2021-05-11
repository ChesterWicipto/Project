import React from 'react';
import { BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Design from '../../Logo';
import Register from '../../Register';
import Login from '../../User/UserLogin';
import UserMenu from '../../User/UserMenu';


const Routes = () =>
{
    return(
        <Router>   
        <Switch>
        <Route exact path="/">
        <Design/>
        </Route>
        <Route path="/login">
            <Login/>
        </Route>
        <Route path="/register">
            <Register/>
        </Route>
        <Route path="/usermenu">
            <UserMenu/>
        </Route>
      </Switch>
        </Router>  
    )

}
export default Routes;












