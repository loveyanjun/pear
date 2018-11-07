import Home from '../modules/home'
import Nav from '../modules/nav'

const routes = [{
    path: '/',
    exact: true,
    component: Home
}, {
    path: '/nav',
    exact: false,
    component: Nav
}]

export default routes