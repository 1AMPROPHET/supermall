<template>
  <swiper>
    <SwiperItem v-for="item in list">
      <a :href="item.link">
        <img :src="item.image">
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
  components: {
    SwiperItem,
    Swiper
  }
}
</script>

<style scoped>

</style>