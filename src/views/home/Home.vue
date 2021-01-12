<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners" />
    <home-recommend-view :recommends="recommends" />
  </div>
</template>

<script>
// 导入导航栏组件
import NavBar from 'components/common/navbar/NavBar'
// 导入轮播组件HomeSwiper
import HomeSwiper from './childComps/HomeSwiper'
// 导入推荐组件HomeRecommendView
import HomeRecommendView from './childComps/HomeRecommendView'
// 导入请求数据方法
import {getHomeMultidata} from 'network/home'

export default {
  name:'Home',
  components:{
    NavBar,
    HomeSwiper,
    HomeRecommendView
  },
  data() {
    //将从网络请求的数据保存下来
    return {
      // result: null
      banners:[],
      recommends:[]
    }
  },
  created(){
    //1.请求多个数据 (调用home.js中的方法)                                                    
    getHomeMultidata().then(res =>{   //函数调用 ->压入函数栈（保存函数调用过程中的所有变量）
      console.log(res);               //函数调用完 ->弹出函数栈（释放函数所有的变量）res会被回收，此时堆中的对象没有指向的引用也会被回收，因此我们通过赋值，将data中的result也指向堆中的对象，函数被销毁了，res不存在了，但是result依然指向堆中的对象
      //this在箭头函数中，往上找作用域  ，created中的this就是当前的组件对象         
      this.banners = res.data.banner.list;     //我们需要将请求得到的数据保存到data中
      this.recommends = res.data.recommend.list;     
    })
  }
}
</script>

<style  scoped>
  .home-nav{
    background-color: var(--color-tint);
  }
</style>
