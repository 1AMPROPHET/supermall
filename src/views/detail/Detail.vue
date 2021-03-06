<template>
  <div id="detail">
    <detail-nav-bar
     @navClick="navClick" ref="detailNavBar"/>
    <scroll 
    class="wrapper" 
    :probeType="3"
    ref="detailScroll"
    @contentscroll="contentScroll">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goodInfo="goodInfo"></detail-base-info>
      <detail-shop-info :shopInfo="shopInfo"/>
      <detail-shop-images :detailImages="detailImages" @imgLoad="imgLoad"/>
      <detail-param-info :paramInfo="paramInfo" ref="params"/>
      <detail-comment :comment="comment" ref="comments"/>
      <goods-list :goods="recommend" ref="recommends"/>
    </scroll>
    <back-top @click.native="arrowClick" v-show="isShow"/>
    <detail-bottom-bar @addToCart="addToCart"/>
    <!-- <toast :message="message" v-show="toastShow"></toast> -->
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import Scroll from '../../components/common/scroll/Scroll.vue'
import DetailShopImages from './childComps/DetailImages.vue'
import DetailParamInfo from './childComps/DetailParamInfo.vue'
import DetailComment from './childComps/DetailComment.vue'
import GoodsList from '../../components/content/goods/goodsList.vue'
import {getDetailData, GoodInfo, ShopInfo, GoodsParams, getDetailRecommend} from '@/network/detail'
import {debounce} from '@/common/utils'
import BackTop from '../../components/content/backTop/BackTop.vue'
import DetailBottomBar from './childComps/DetailBottomBar.vue'
import {mapActions} from 'vuex'
import Toast from '../../components/common/toast/Toast.vue'

export default {
  components: {
    DetailNavBar,
    DetailSwiper, 
    DetailBaseInfo, 
    DetailShopInfo, 
    Scroll, 
    DetailShopImages,
    DetailParamInfo,
    DetailComment,
    GoodsList,
    BackTop,
    DetailBottomBar,
    Toast
  },
  name: "Detail",
  data () {
    return {
      iid: null,
      topImages: [],
      goodInfo: {},
      shopInfo: {},
      detailImages: {},
      paramInfo: {},
      comment: {},
      recommend: [],
      imageListener: null,
      isShow: false,
      navTitleYs: [],
      getNavTitleYs: null,
      currentIndex: -1,
      message: '',
      toastShow: false
    }
  },
  created() {
    this.iid = this.$route.params.iid

    getDetailData(this.iid).then(res => {
      const data = res.data.result
      this.topImages = res.data.result.itemInfo.topImages
      // 获取商品信息
      this.goodInfo = new GoodInfo(data.itemInfo, data.columns, data.shopInfo.services)
      // console.log(this.goodInfo);
      // 获取店铺信息
      this.shopInfo = new ShopInfo(data.shopInfo)
      // console.log(this.shopInfo);
      // 获取商品图片详情
      this.detailImages = data.detailInfo
      // 获取商品尺寸信息
      this.paramInfo = new GoodsParams(data.itemParams.info, data.itemParams.rule)
      // 获取评信息
      if (data.rate.CRate !== 0) {
        this.comment = data.rate.list[0]
      }
    })
    // 获取位置的防抖
    this.getNavTitleYs = debounce(() => {
      this.navTitleYs = []
      this.navTitleYs.push(0)
      this.navTitleYs.push(this.$refs.params.$el.offsetTop)
      this.navTitleYs.push(this.$refs.comments.$el.offsetTop)
      this.navTitleYs.push(this.$refs.recommends.$el.offsetTop)
      // console.log(this.navTitleYs);
    }, 100)
    // 获取推荐数据
    getDetailRecommend().then(res => {
      // console.log(res);
      this.recommend = res.data.data.list
    })
  },
  activated() {
    this.positionListener()
  },
  mounted() {
    // 刷新防抖
    let newRefresh = debounce(this.$refs.detailScroll.refresh, 100)
    this.imageListener = () => {
      newRefresh()
    }
    this.$bus.$on('imageLoad', this.imageListener)
  },
  destroyed() {
    this.$bus.$off('imageLoad', this.imageListener)
  },
  methods: {
    ...mapActions(['addCart']),
    imgLoad() {
      // 获取组件位置
      this.getNavTitleYs()
      // debounce(this.$refs.detailScroll.refresh, 100)
      this.$refs.detailScroll.refresh()
      // 监听位置
    },
    navClick(index) {
      // 方法一， 可以使用switch来实现点击滚动到正确位置
      // switch(index) {
      //   case 0:
      //     this.$refs.detailScroll.scrollTo(0, 0, 0)
      //     break
      //   case 1:
      //     this.paramsY = this.$refs.params.$el.offsetTop
      //     console.log(this.paramsY);
      //     this.$refs.detailScroll.scrollTo(0, -this.paramsY)
      //     break
      //   case 2:
      //     this.commentsY = this.$refs.comments.$el.offsetTop
      //     this.$refs.detailScroll.scrollTo(0, -this.commentsY)
      //     break
      //   case 3:
      //     this.recommendsY = this.$refs.recommends.$el.offsetTop
      //     this.$refs.detailScroll.scrollTo(0, -this.recommendsY)
      //     break
      // }
      // 方法二，使用设置的数组
      this.$refs.detailScroll.scrollTo(0, -this.navTitleYs[index], 0)
    },
    arrowClick() {
      this.$refs.detailScroll.scrollTo(0, 0, 500)
    },
    contentScroll(position) {
      // 返回顶部图标的显示
      this.isShow = Math.abs(position.y) > 1000
      // position的区间用来取i，对应title的index
      let length = this.navTitleYs.length
      const positionY = -position.y
      for (let i = 0; i < length; i++) {
        if (this.currentIndex !== i && ((i < length - 1 && positionY >this.navTitleYs[i] && positionY < this.navTitleYs[i + 1]) || 
        (i === length - 1 && positionY >this.navTitleYs[i]))) {
          this.currentIndex = i * 1
          this.$refs.detailNavBar.currentIndex = this.currentIndex
        }
      }
    },
    // 点击添加到购物车
    addToCart() {
      // 获取购物车需要信息
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goodInfo.title
      product.desc = this.goodInfo.desc
      product.price = this.goodInfo.realPrice
      product.iid = this.iid
      console.log(product);
      // 添加到购物车
      // this.$store.dispatch('addToCart', product)
      // 通过mapActions映射
      this.addCart(product).then(res => {
        // this.toastShow = true
        // this.message = res

        // setTimeout(() => {
        //   this.toastShow = false
        //   this.message = ''
        // }, 1500)
        this.$toast.show(res, 1500)
      })
    }
  },
}

</script>
<style scoped>
#detail {
  position: relative;
  z-index: 9;
  height: 100vh;
  background-color: #fff;
}
.wrapper {
  position: absolute;
  top: 44px;
  bottom: 40px;
  height: calc(100% - 44px);
  overflow: hidden;
}
</style>
