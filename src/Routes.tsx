import React from 'react';
import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import Catalog from 'pages/Catalog';
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
                    <Catalog />
                </Route>
                <Redirect from="*" to="/" exact />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
