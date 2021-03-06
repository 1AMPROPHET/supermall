<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <template v-slot:center>
        <div class="title">购 物 车 ({{cartListLength}})</div>
      </template>
    </nav-bar>
    <!-- 商品列表 -->
    <cart-list/>
    <cart-bottom-bar/>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import {mapGetters} from 'vuex'
import CartList from './childComps/CartList.vue'
import CartBottomBar from './childComps/CartBottomBar.vue'
export default {
  components: { 
    NavBar,
    CartList, 
    CartBottomBar 
  },
  name: "cart",
  computed: {
    // cartListLength() {
    //   return this.$store.getters.cartListLength
    // }
    ...mapGetters(['cartListLength'])
  }
}
</script>

<style scoped>
.cart {
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 700;
}
.title {
  font-size: 17px;
  font-weight: 500;
}

</style>