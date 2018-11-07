import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import routes from '../routes'

const basicRoute = () => (
    <HashRouter>
        <Switch>
            {routes.map(route => (
                <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />
            ))}
        </Switch>
    </HashRouter>
);

export default basicRoute