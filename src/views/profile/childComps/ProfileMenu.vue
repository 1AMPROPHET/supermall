<template>
  <div class="menu">
    <div class="message">
      <img src="@/assets/img/profile/message.png" alt="">
      <p>我的消息</p>
    </div>
    <div class="point-market">
      <img src="@/assets/img/profile/points.png" alt="">
      <p>积分商城</p>
    </div>
    <div class="vip">
      <img src="@/assets/img/profile/vip.png" alt="">
      <p>会员卡</p>
    </div>
    <div class="cart" @click="cartClick">
      <img src="@/assets/img/profile/cart.png" alt="">
      <p>我的购物车</p>
    </div>
    <div class="download-app">
      <img src="@/assets/img/profile/app.png" alt="">
      <p>下载购物APP</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileMenu",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {
    cartClick() {
      this.$router.replace('/cart')
    }
  },
};
</script>

<style lang="css" scoped>
.menu {
  padding: 0 5px;
  height: calc(100% - 44px - 100px - 49px);
}
.message {
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 3px solid #f6f6f6;
}
.message img {
  height: 25px;
  margin: 5px;
}
.point-market {
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 3px solid #f6f6f6;
}
.point-market img {
  height: 25px;
  margin: 5px;
}
.vip {
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 15px solid #f6f6f6;
}
.vip img {
  height: 25px;
  margin: 5px;
}
.cart {
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 3px solid #f6f6f6;
}
.cart img {
  height: 25px;
  margin: 5px;
}
.download-app {
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 3px solid #f6f6f6;
}
.download-app img {
  height: 25px;
  margin: 5px;
}
</style>