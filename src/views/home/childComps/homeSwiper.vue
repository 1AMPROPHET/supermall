<template>
  <swiper>
    <SwiperItem v-for="(item, key) in list" :key="key">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad">
      </a>
    </SwiperItem>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from "@/components/common/swiper/index"

export default {
  name: "homeSwiper",
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      isLoad: false
    }
  },
  components: {
    SwiperItem,
    Swiper
  },
  methods: {
    // 图片加载后返回事件，并且使用bool变量控制返回次数为1次
    imageLoad() {
      if (!this.isLoad)
      {
        this.$emit('imageLoad')
        this.isLoad = true
      }
    }
  }
}
</script>

<style scoped>

</style>