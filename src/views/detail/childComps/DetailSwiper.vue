<template>
  <div class="detailSwiper">
    <swiper>
      <swiper-item v-for="(item, index, key) in topImages" :key="key" class="detailSwiperItem">
        <img :src="item" alt=""/>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import Swiper from '../../../components/common/swiper/Swiper.vue';
import SwiperItem from '../../../components/common/swiper/SwiperItem.vue';
export default {
  components: { Swiper, SwiperItem },
  name: "Test",
  created() {},
  data() {
    return {};
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {},
};
</script>

<style lang="css" scoped>
.detailSwiper {
  display: flex;
  width: 100%;
  height: 300px;
}
.detailSwiperItem {
  display: flex;
  width: 100%;
}
.detailSwiperItem img {
  width: 100%;
}
</style>