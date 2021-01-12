<template>
    <div id="tab-bar">
     <slot></slot>
    </div>
</template>

<script>
export default {
  name:'TabBar',
  data () {
    return {
    }
  }
}
</script>

<style  scoped>
 #tab-bar{
    display: flex;
    background-color: #f0f0f0;
    /* 设置定位 */
    position:fixed;
    left:0;
    right:0;
    bottom:0;
    /* 设置阴影 */
    box-shadow: 0px -1px 1px rgba(100, 100, 100,0.35);
  }
  
</style>
