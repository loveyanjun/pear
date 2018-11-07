import React from 'react'
import Nav from '../nav/index'
import './styles/index.css'

export default class Home extends React.PureComponent {
    render () {
        return (
            <div className="home">
                <Nav/>
            </div>
        )
    }
}