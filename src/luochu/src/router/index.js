import Vue from 'vue';
// 使用路由
// 1.引入路由
import VueRouter from "vue-router";
// 2.使用路由
Vue.use(VueRouter);
// 引入各路由
import Main from "../pages/main.vue";
import Books from "../pages/books.vue";
import Classes from "../pages/classes.vue";
import Mine from "../pages/mine.vue";


// 3.实例化路由
let router = new VueRouter({
    // 配置参数
    routes: [
        // 首页
        {
            path: '/main',
            component: Main
        },
        // 首页重定向/
        {
            path: '/',
            redirect: '/main'
        },
        // 书架
        {
            path: '/books',
            component: Books
        },
        // 分类
        {
            path: '/classes',
            component: Classes
        },
        // 我的
        {
            path: '/mine',
            component: Mine
        },
    ]
});
export default router;