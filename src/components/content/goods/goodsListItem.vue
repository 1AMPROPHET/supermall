<template>
  <div class="goodsItem" @click="itemClick">
    <img v-lazy="showImage" alt="" @load="imageLoad">
    <div class="goodsInfo">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <img src="@/assets/img/common/star.png" alt="">
      <span class="collect" style="color: #ff5777">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods: {
    imageLoad() {
      this.$bus.$emit('imageLoad')
    },
    itemClick() {
      this.$router.push('/detail/' + this.goodsItem.iid)
      // console.log(this.goodsItem);
    }
  }
}
</script>


<style scoped>
p {
  border-style: none;
}
.goodsItem {
  padding-bottom: 40px;
  position: relative;
  width: 45%;
  margin: 8px;
}
.goodsItem img {
  width: 100%;
  border-radius: 5px;
  /* border: 1px solid var(--color-high-text); */
}
.goodsInfo {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goodsInfo p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goodsInfo .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goodsInfo .collect {
  position: relative;
}
.goodsInfo .collect:before {
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  /*background: url('@/assets');*/
}
.goodsInfo img {
  height: 14px;
  width: 14px;
}
</style>