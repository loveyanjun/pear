import Home from '../modules/home'
import Nav from '../modules/nav'
import Wrap from '../modules/index'

const routes = [{
    path: '/',
    exact: true,
    component: Wrap
}, {
    path: '/home',
    exact: false,
    component: Home
}, {
    path: '/nav',
    exact: false,
    component: Nav
}]

export default routes