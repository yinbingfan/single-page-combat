import App from '../App'
import home from '../pages/home'
import index from '../pages/index'
// const home = r => require.ensure([], () => r(require('../pages/home')), 'home')
export  default [{
    path:'/',
    component: App, //顶层路由，对应index.html
    children:[
        {
            path: '',
            redirect: '/home'
        },
        {
            path: '/home',
            component: home
        },
        {
            path: '/index',
            component: index
        },
    ]
}]