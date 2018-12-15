import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Nav from './nav/index'
import Home from './home/index'
import Technology from './technology/index'
import Project from './project/index'
import Life from './life/index'
import './styles/index.css'

export default class Wrapper extends React.PureComponent {
    render () {
        return (
            <Router>
                {/* 这里需要div包裹下面的元素，不然会报错 */}
                <div className='wrapper'>
                    <Nav/>
                    <div className='routes'>
                    <Route path='/home' component={Home}/>
                    <Route path='/technology' component={Technology}/>
                    <Route path='/project' component={Project}/>
                    <Route path='/life' component={Life}/>
                    </div>
                </div>
            </Router>
        )
    }
}

// <Router>
//     <div>
//         <Link to="/Nav">技术相关</Link><br/>
//         <Link to="/Archives">档案相关</Link>
//         <Route path='/nav' component={Nav}/>
//         <Route path='/archives' component={Archives}/>
//     </div>
// </Router>