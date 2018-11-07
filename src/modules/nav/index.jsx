import React from 'react'
import './styles/index.css'

export default class Home extends React.PureComponent {
    render () {
        return (
            <div className="navigation">
                <div className="person">
                    <div>头像</div>
                    <div>君君的网站</div>
                </div>
                <div className="navigate">
                    <ul>
                        <li onClick={() => this.props.history.push('home')}>主页</li>
                        <li>d3展示</li>
                    </ul>
                </div>
            </div>
        )
    }
}