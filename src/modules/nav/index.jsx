import React from 'react'
import './styles/index.css'

export default class Home extends React.PureComponent {
    handleHistory = () => {
        this.props.history.push('/home')
    }
    render () {
        return (
            <div className="navigation">
                <div className="person">
                    <div>头像</div>
                    <div>君君的网站</div>
                </div>
                <div className="navigate">
                <ul>
                    <li onClick={this.handleHistory}>主页</li>
                    <li>d3展示</li>
                    <li><a href="#/home">链接进入详情页</a></li>
                </ul>
                </div>
            </div>
        )
    }
}