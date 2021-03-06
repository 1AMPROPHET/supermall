<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default() {
        return 0
      }
    },
    pullUpLoad: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return{
      bscroll: null
    }
  },
  mounted() {
    // 创建bscroll对象
    this.bscroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      observeDOM: true,
      observeImage: true,
      scrollY: true,
      click: true,
      useTransition: false,
      // 监听滚动到底部

      pullUpLoad: this.pullUpLoad,
      bounce: false
    })
    // 监听位置
    this.bscroll.on('scroll', (position) => {
      this.$emit('contentscroll', position)
    })
    // console.log(this.bscroll);
    // 监听上拉事件
    if (this.pullUpLoad) {
      this.bscroll.on('pullingUp', () => {
      this.$emit('pullingUp')
    })
    }
  },
  methods: {
    // 封装刷新函数
    refresh() {
      this.bscroll.refresh()
      // console.log('----');
    },
    // 封装上拉函数
    finishPullUp() {
      this.bscroll && this.bscroll.finishPullUp()
    },
    // 封装获得位置信息
    getY() {
      return this.bscroll.y
    },
    scrollTo(x, y, time) {
      this.bscroll && this.bscroll.scrollTo(x, y, time)
    }
  }
}
</script>

<style scoped>

</style>