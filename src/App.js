// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//         <h1>李艳君的网站从这里开始</h1>
//       </div>
//     );
//   }
// }

// export default App;

import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import routes from './routes'

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
