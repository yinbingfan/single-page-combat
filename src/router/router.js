/*
 * @Author: your name
 * @Date: 2019-09-25 09:17:44
 * @LastEditTime: 2019-11-27 16:47:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \single-page-combat-master\src\router\router.js
 */
import App from '../App'
import home from '../pages/home'
import index from '../pages/index'
import login from '../pages/login'
// const home = r => require.ensure([], () => r(require('../pages/home')), 'home')
export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [
        {
            path: '',
            redirect: '/index'
        },
        {
            path: '/home',
            component: home
        },
        {
            path: '/index',
            component: index
        },
        {
            path: '/login',
            component: login
        },
    ]
}]