<template>
  <div id="main-tab-bar">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item v-for="item in list" :path="item.path">
        <img slot="item-icon" :src="item.icon" alt="">
        <img slot="item-icon-active" :src="item.icon_active" alt="">
        <div slot="item-text">{{item.text}}</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";
import home from "@/assets/img/tabbar/home.png"
import redhome from "@/assets/img/tabbar/redhome.png";
import explore from "@/assets/img/tabbar/explore.png";
import redexplore from "@/assets/img/tabbar/redexplore.png";
import market from "@/assets/img/tabbar/market.png";
import redmarket from "@/assets/img/tabbar/redmarket.png";
import profile from "@/assets/img/tabbar/profile.png";
import redprofile from "@/assets/img/tabbar/redprofile.png";

export default {
  name: "MainTabBar",
  components: {TabBar, TabBarItem},
  data() {
    return {
      list: [
        {
          icon: home,
          icon_active: redhome,
          path: '/home',
          text: '首页'
        },
        {
          icon: explore,
          icon_active: redexplore,
          path: '/explore',
          text: '分类'
        },
        {
          icon: market,
          icon_active: redmarket,
          path: '/market',
          text: '购物车'
        },
        {
          icon: profile,
          icon_active: redprofile,
          path: '/profile',
          text: '我的'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>