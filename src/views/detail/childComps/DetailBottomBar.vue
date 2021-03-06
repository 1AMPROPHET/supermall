<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <em class="icon1 service"></em>
        <span class="text">客服</span>
      </div>
      <div>
        <em class="icon2 shop"></em>
        <span class="text">店铺</span>
      </div>
      <div>
        <em class="icon3 select"></em>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {
    addToCart() {
      this.$emit('addToCart')
    }
  },
};
</script>

<style lang="css" scoped>
.bottom-bar {
  height: 49px;
  width: 100%;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  display: flex;
  text-align: center;
}
.bar-item {
  display: flex;
  flex: 1;
}
.bar-item div {
  flex: 1;
}
.bar-left .text {
  font-size: 13px;
}
.bar-item .icon1 {
  display: flex;
  width: 22px;
  height: 22px;
  margin: 5px auto 3px;
  background: url("~assets/img/detail/service.png") 0 0/100%;
}
.bar-item .icon2 {
  display: block;
  width: 22px;
  height: 22px;
  margin: 5px auto 3px;
  background: url("~assets/img/detail/service.png") 0 0/100%;
}
.bar-item .icon3 {
  display: block;
  width: 22px;
  height: 22px;
  margin: 5px auto 3px;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}

.bar-left .service {
  background-position: 0 -54px;
}
.bar-left .shop {
  background-position: 0 -98px;
}
.bar-right {
  font-size: 15px;
  color: #fff;
  line-height: 58px;
}
.bar-right .cart {
  background-color: #ffe817;
  color: #333;
}
.bar-right .buy {
  background-color: #f69;
}
</style>