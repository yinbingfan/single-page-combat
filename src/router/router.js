import Layout from '../App'
// import Layout from '../pages/layout'
import index from '../pages/index'
import login from '../pages/login'
// const home = r => require.ensure([], () => r(require('../pages/home')), 'home')
export default [{
    path: '/',
    component: Layout, //顶层路由，对应index.html
    children: [{
            path: '',
            redirect: '/index'
        },
        {
            path: '/home',
            component: (resolve) => require(['../pages/home.vue'], resolve)
        },
        {
            path: '/index',
            component: index
        },
        {
            path: '/login',
            component: login
        },
        {
            path: '/Draggable',
            component: (resolve) => require(['../pages/Draggable.vue'], resolve)
        },
        {
            path: '/reducePage',
            component: (resolve) => require(['../pages/reducePage.vue'], resolve)
        },
        {
            path: '/viewRender',
            component: (resolve) => require(['../pages/viewRender.vue'], resolve)
        },
    ]
}]