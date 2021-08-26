import Vue from 'vue'
// 1.引入
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Reg from '../views/Reg.vue'
import Category from '../views/Category.vue'
import Mine from '../views/Mine.vue'
import Cart from '../views/Cart.vue'
import Goods from '../views/Goods.vue'

// 2. 安装插件
Vue.use(VueRouter)

// 3. 实例化router并配置参数
const router = new VueRouter({
    // mode:'history', // hash(默认),history
  // 路由表
  routes:[
    // 当浏览器地址匹配/home时，渲染Home组件中的内容
    {
      // 命名路由：给路由设置一个名字
      name:'Home',
      path:'/home',
      component:Home
    },
    {
      path:'/category',
      component:Category
    },
    {
      path:'/cart',
      component:Cart
    },
    {
      name:'Mine',
      path:'/mine',
      component:Mine
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/reg',
      component:Reg
    },
    {
      name:'Goods',
      path:'/goods',
      component:Goods
    },
    {
      name:'GoodsDetail',
      path:'/goods/:id', // /goods/1->/goods/2
      component:Goods
    },
  ]
})

export default router