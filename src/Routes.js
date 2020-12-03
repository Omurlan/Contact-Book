import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Details from './components/Details/Details';
import Home from './Home/Home'
import { history } from './helpers/history'
import EditContact from './EditContact/EditContact';
import AddContact from './components/AddContact/AddContact';
import ContactsList from './components/ContactsList/ContactsList';
const Routes = () => {
    return (
        <div>
            <BrowserRouter history={history}>
                <Switch>
                    <Route exact path="/details" component={Details} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/add" component={AddContact} />
                    <Route exact path="/list" component={ContactsList} />
                    <Route exact path="/edit" component={EditContact} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default Routes;