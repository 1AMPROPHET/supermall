<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>商 城</div>
      </template>
    </nav-bar>
    <home-swiper :list="list"></home-swiper>
    <RecommendView :recommend="recommend"></RecommendView>
    <FeatureView></FeatureView>
    <tab-control class="tab-control" :titles="['流行', '新款', '精选']"></tab-control>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import tabControl from "@/components/content/tabControl/tabControl";

import homeSwiper from "@/views/home/childComps/homeSwiper";
import RecommendView from "@/views/home/childComps/RecommendView";
import FeatureView from "@/views/home/childComps/FeatureView";

import {getdata} from "@/network/home";

export default {
  name: "home",
  data() {
    return {
      list: [],
      recommend: [],
    }
  },
  components: {
    NavBar,
    tabControl,

    homeSwiper,
    RecommendView,
    FeatureView
  },
  created() {
    getdata().then(res => {
      console.log(res.data.data);
      this.list = res.data.data.banner.list;
      this.recommend = res.data.data.recommend.list;
    })
  }
}
</script>

<style scoped>
#home {
  padding-top: 43px;
  padding-bottom: 500px;
}
.home-nav {
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 44px;
}


</style>