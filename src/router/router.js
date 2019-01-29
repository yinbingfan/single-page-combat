import App from '../App'

const home = r => require.ensure([], () => r(require('../pages/home')), 'home')
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
    ]
}]