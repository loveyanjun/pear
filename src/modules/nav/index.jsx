import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '../../static/images/avatar.jpg'
import './styles/index.css'

export default class Nav extends React.PureComponent {
    handleHistory = () => {
        this.props.history.push('/home')
    }

    render () {
        return (
            <div className='nav'>
                <div className='avatar'>
                    <img className='avatar-img' src={avatar} alt=""/>
                    <div>君君的博客</div>
                </div>
                <div className='link'>
                    <Link className='link-txt' to='/home'>首页</Link>
                    <Link className='link-txt' to="/Technology">技术相关</Link>
                    <Link className='link-txt' to="/Project">项目实战</Link>
                    <Link className='link-txt' to="/Life">生活相关</Link>
                    {this.props.children}
                </div>
            </div>
        )
    }
}