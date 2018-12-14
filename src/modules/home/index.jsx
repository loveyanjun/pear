import React from 'react'
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'
import Nav from '../nav/index'
import './styles/index.css'

export default class Home extends React.PureComponent {
    render () {
        return (
            // <Router>
            // <div className="home">
            //     <Link to="/nav">Modus Create</Link>
            //     <Route path='/nav' component={Nav}/>
            // </div>
            // </Router>

            <Router>
            <div className="home">
                <Link to="/nav">Modus Create</Link>
                <Route path='/nav' component={Nav}/>
                {/* <Route path='/:id' component={Child} /> */}
            </div>
            </Router>
            
            // <div>home页面</div>
        )
    }
}
