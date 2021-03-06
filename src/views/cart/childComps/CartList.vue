<template>
  <div class="cart-list">
    <scroll class="content" ref="cartScroll">
      <cart-list-item v-for="(item, index) in cartList" :key="index" :item-info="item"/>
    </scroll>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Scroll from '../../../components/common/scroll/Scroll.vue';
import CartListItem from './CartListItem.vue';
export default {
  components: { Scroll, CartListItem },
  
  name: "CartList",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
  computed: {
    ...mapGetters(['cartList'])
  },
  activated() {
    this.$refs.cartScroll.refresh()
  },
};
</script>

<style lang="css" scoped>
.cart-list {
  height: calc(100% - 133px);
}
.content {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>