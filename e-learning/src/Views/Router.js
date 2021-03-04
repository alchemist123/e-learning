import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './userManagementViews/Login';
import Register from './userManagementViews/Register'

 function Router() {
    return (

        <BrowserRouter>
                <Switch>
                    <Route path='/' component={Login} exact />
                    <Route path='/register' component={Register} />
                </Switch>
        </BrowserRouter>    
    )
}
export default Router;
