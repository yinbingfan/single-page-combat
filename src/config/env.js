/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 * 
 */

let baseUrl = ''; 
let routerMode = 'hash';
let imgBaseUrl = '';


if (process.env.NODE_ENV == 'development') {
    imgBaseUrl = '/img/';//开发环境

}else if(process.env.NODE_ENV == 'production'){
	baseUrl = '';//线上环境地址
    imgBaseUrl = '';//线上环境图片地址
}

export {
	baseUrl,
	routerMode,
	imgBaseUrl,
}