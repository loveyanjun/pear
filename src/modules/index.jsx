// import React from 'react'
// import { HashRouter, Switch, Route } from 'react-router-dom'
// import routes from '../routes'

// const basicRoute = () => (
//     <HashRouter>
//         <Switch>
//             {routes.map(route => (
//                 <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />
//             ))}
//         </Switch>
//     </HashRouter>
// );

// export default basicRoute

import React from 'react'
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'
import Nav from './nav/index'
import Home from './home/index'
// import './styles/index.css'

export default class Wrapper extends React.PureComponent {
    render () {
        return (
            // <Router>
            // <div className="home">
            //     <Link to="/nav">Modus Create</Link>
            //     <Route path='/nav' component={Nav}/>
            // </div>
            // </Router>
            <div className="home">
                <Nav/>
                <Home />
            </div>
        )
    }
}