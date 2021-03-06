<template>
  <div id="cart-item">
    <div class="item-selector">
      <check-button :isChecked="itemInfo.checked" @click.native="checkClick"></check-button>
    </div>
    <div class="item-img">
      <img :src="itemInfo.image" alt="">
    </div>
    <div class="item-info">
      <p class="item-title">{{itemInfo.title}}</p>
      <p class="item-desc">{{itemInfo.desc}}</p>
      <div class="info-bottom">
        <span class="item-price left">￥{{itemInfo.price}}</span>
        <span class="item-count right">x{{itemInfo.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from '../../../components/content/checkButton/CheckButton.vue';
export default {
  components: {CheckButton},
  created() {},
  data() {
    return {};
  },
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    checkClick() {
      this.itemInfo.checked = !this.itemInfo.checked
    }
  },
};
</script>

<style lang="css" scoped>
#cart-item {
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.item-selector {
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-img {
  padding: 5px;
}
.item-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}
.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}
.item-info p {
  height: 30px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}
.info-bottom {
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}
.info-bottom .item-price {
  color: orangered;
}
</style>