<template>
  <swiper>
      <swiper-item v-for="item in banners" :key="item.index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
// 导入轮播图
// import Swiper from 'components/common/swiper/Swiper'
// import SwiperItem from 'components/common/swiper/SwiperItem'
import {Swiper,SwiperItem} from 'components/common/swiper'

export default {
  name:'HomeSwiper',
   components:{
    Swiper,
    SwiperItem
  },
  props:{
    banners:{
      type: Array,
      default() {
        return []
      }
    }
  },
}
</script>

<style  scoped>

</style>
