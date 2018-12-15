// import Wrapper from '../modules/index'
import Wrapper from '../modules/index'
import Home from '../modules/home'
import Nav from '../modules/nav'
// import Technology from '../modules/technology/index'
// import Project from '../modules/project/index'
// import Life from '../modules/life/index'

const routes = [{
    path: '/',
    exact: true,
    component: Wrapper
}, {
    path: '/home',
    exact: false,
    component: Home
}, {
    path: '/nav',
    exact: false,
    component: Nav
}
// {
//     path: '/technology',
//     exact: false,
//     component: Technology
// }, {
//     path: '/project',
//     exact: false,
//     component: Project
// }, {
//     path: '/life',
//     exact: false,
//     component: Life
// }
]

export default routes