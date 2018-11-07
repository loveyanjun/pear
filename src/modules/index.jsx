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
// import Nav from '../nav/index'
// import './styles/index.css'

export default class Home extends React.PureComponent {
    render () {
        return (
            <div className="home">
                {/* // <Nav/> */}
                真正的主页面
            </div>
        )
    }
}