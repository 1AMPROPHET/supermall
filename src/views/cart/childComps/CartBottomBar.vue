<template>
  <div class="bottom-bar">
    <div class="check">
      <check-button 
      :is-checked="isSelectAll" 
      class="check-all-bottom" @click.native="checkAllClick"/>
      <span>全选</span>
    </div>
    <div class="totalPrice">
      合计: ￥{{totalPrice}}
    </div>
    <div class="calculate" @click="calculateClick">
      去结算:({{checkedLength}})
    </div>
  </div>
</template>

<script>
import CheckButton from '../../../components/content/checkButton/CheckButton.vue';
export default {
  name: "CartBottomBar",
  components: {
    CheckButton
  },
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {
    checkAllClick() {
      if (this.isSelectAll) {
        this.$store.state.cartList.forEach(item => {
          item.checked = false
        });
      }
      else {
        this.$store.state.cartList.forEach(item => {
          item.checked = true
        })
      }
    },
    calculateClick() {
      if(!this.isSelectAll) {
        this.$toast.show('请将商品添加到购物车', 1500)
      }
    }
  },
  computed: {
    totalPrice() {
      return this.$store.state.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return item.price * item.count + preValue
      }, 0).toFixed(2)
    },
    checkedLength() {
      return this.$store.state.cartList.filter(item => {
        return item.checked
      }).length
    },
    isSelectAll() {
      if (this.$store.state.cartList.length === 0) return false
      // 使用filter
      return !(this.$store.state.cartList.filter(item => !item.checked).length)
    }
  },
};
</script>

<style lang="css" scoped>
.bottom-bar {
  height: 40px;
  position: relative;
  background-color: #eee;
  line-height: 40px;
  display: flex;
}
.check {
  width: 90px;
  display: flex;
  align-items: center;
  /* margin-left: 5px;  */
}
.check-all-bottom {
  /* text-align: center; */
  margin-left: 5px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-right: 5px;
}
.totalPrice {
  margin-left: 10px;
  flex: 1;
}
.calculate {
  background-color: red;
  width: 90px;
  color: #eee;
  text-align: center;
}
</style>