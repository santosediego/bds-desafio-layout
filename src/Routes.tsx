import React from 'react';
import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

function Routes() {
    return (
        <BrowserRouter>
        <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/catalog">
                    <div>Em construção</div>
                </Route>
                <Redirect from="*" to="/" exact/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
