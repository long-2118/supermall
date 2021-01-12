<template>
  <div class="tab-bar-item" @click="itemClick"><!--这里给插槽包装一层div是保证插槽被替换后样式失去作用-->
      <div v-if="!isActive"><slot  name="item-icon"></slot></div> 
      <div v-else><slot  name="item-icon-active"></slot></div> 
      <div :style="activeStyle"><slot name="item-text"></slot></div> 
  </div>
</template>

<script>
export default {
  name:'TabBarItem',
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }

  },
  data () {
    return {
      // isActive: true
    }
  },
  methods:{
    itemClick() {
      this.$router.replace(this.path).catch(err=>err)
    }
  },
  computed:{
    //这里通过计算属性，动态的决定isActive的值
    isActive() {
      //this.$route.path指的是当前活跃的组件的path,
      // indexOf(this.path)这里的path指的是被点击的那个组件item
      //indexOf()这个函数表示从某个字符串中找，是否包含括号中的字符串，有包含则不等于-1，没有则等于-1
      return this.$route.path.indexOf(this.path)!== -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  }
}
</script>

<style  scoped>
  .tab-bar-item{
    flex:1;
    text-align:center;
    height:49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
  
</style>
