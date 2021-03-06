<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div class="title">商 城</div>
      </template>
    </nav-bar>
    <tab-control 
      ref="tabControl1" 
      :titles="['流行', '新款', '精选']" 
      @tabClick="tabClick" 
      class="tab-control" v-show="isTabFixed">
    </tab-control>
    <scroll
        class="wrapper" ref="scroll"
        :probe-type="3"
        @contentscroll="contentScroll"
        :pull-up-load="true"
        @pullingUp="loadMore">
      <home-swiper :list="list" @imageLoad="swiperImageLoad"></home-swiper>
      <RecommendView :recommend="recommend"></RecommendView>
      <FeatureView></FeatureView>
      <tab-control 
      ref="tabControl" 
      :titles="['流行', '新款', '精选']" 
      @tabClick="tabClick">
      </tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="arrowClick" v-show="isShow"></back-top>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import tabControl from "@/components/content/tabControl/tabControl";
import goodsList from "@/components/content/goods/goodsList";
import goodsListItem from "@/components/content/goods/goodsListItem";
import Scroll from "@/components/common/scroll/Scroll";
import BackTop from "@/components/content/backTop/BackTop";

import homeSwiper from "@/views/home/childComps/homeSwiper";
import RecommendView from "@/views/home/childComps/RecommendView";
import FeatureView from "@/views/home/childComps/FeatureView";

import {getData} from "@/network/home";
import {getHomeGoods} from "@/network/home";
import {debounce} from "@/common/utils";

export default {
  name: "home",
  data() {
    return {
      list: [],
      recommend: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentType: 'pop',
      isShow: false,
      // 吸顶前的高度
      tabctrOffSetTop: 0,
      // 是否吸顶
      isTabFixed: false,
      // 离开时的位置
      saveY: 0,
      // 监听图片的事件
      imageListener: null
    }
  },
  components: {
    Scroll,
    NavBar,
    tabControl,
    goodsList,
    goodsListItem,
    BackTop,

    homeSwiper,
    RecommendView,
    FeatureView
  },
  created() {
    this.getMultiData()
    this.getHomeData('pop')
    this.getHomeData('new')
    this.getHomeData('sell')
  },
  mounted() {
    // 图片加载防抖函数
    let newrefresh = debounce(this.$refs.scroll.refresh, 100)
    // 监听图片加载完成
    this.imageListener = () => {
      newrefresh()
    }
    this.$bus.$on('imageLoad', this.imageListener)
  },
  activated() {
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0, this.saveY)
    // console.log('active');
  },
  deactivated() {
    // 保存Y值
    this.saveY = this.$refs.scroll.getY()
    // console.log('deactive');
    // 离开主页时取消监听
    this.$bus.$off('imageLoad', this.imageListener)
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  methods: {
    // 事件监听
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl.currentIndex = index
    },
    // 返回顶部
    arrowClick() {
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
    // 监听位置
    contentScroll(position) {
      // if(position.y <= -700)
      //   this.isShow = true
      // else
      //   this.isShow = false
      // 判断backtop是否显示
      this.isShow = Math.abs(position.y) > 1000

      // 判断tabcontrol是否吸顶
      this.isTabFixed = Math.abs(position.y) > this.tabctrOffSetTop
    },
    // 上拉加载更多
    loadMore() {
      this.getHomeData(this.currentType)
    },
    // 判断swiper图片是否加载完成，返回高度
    swiperImageLoad() {
      // 吸顶效果
      // 所有组件都有属性:$el,用于获取组建的元素
      // console.log(this.$refs.tabControl.$el.offsetTop);
      this.tabctrOffSetTop = this.$refs.tabControl.$el.offsetTop
    },
    // 网络请求
    getMultiData() {
      getData().then(res => {
        console.log(res.data);
        this.list = res.data.data.banner.list;
        this.recommend = res.data.data.recommend.list;
      })
    },
    getHomeData(type) {
      let page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page += 1
        // 调用finishPullUP函数多次加载
        setTimeout(() => {
          this.$refs.scroll.finishPullUp()
        }, 500)
        // this.$refs.scroll.bscroll.refresh()
      })
    }
  }
}
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: white;
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0; */
  /* z-index: 9; */
}
.wrapper {
  position: absolute;
  top: 44px;
  bottom: 40px;
  height: calc(100% - 93px);
  overflow: hidden;
}
.tab-control {
  position: relative;
  z-index: 9;
}
.title {
  font-size: 17px;
  font-weight: 500;
}

</style>