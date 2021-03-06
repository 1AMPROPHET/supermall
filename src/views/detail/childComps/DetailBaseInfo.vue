<template>
  <div v-if="Object.keys(goodInfo).length !== 0" class="base.info">
    <div class="info-title">{{goodInfo.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goodInfo.newPrice}}</span>
      <span class="o-price">{{goodInfo.oldPrice}}</span>
      <span v-if="goodInfo.discount" class="discount">{{goodInfo.newPrice}}</span>
    </div>
    <div class="info-other">
      <span>{{goodInfo.columns[0]}}</span>
      <span>{{goodInfo.columns[1]}}</span>
      <span>{{goodInfo.services[goodInfo.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="(item, index) in goodInfo.services.length-1" :key="index">
        <img :src="goodInfo.services[index].icon" alt="">
        <span>{{goodInfo.services[index].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  created() {},
  data() {
    return {
    };
  },
  props: {
    goodInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {},
};
</script>

<style lang="css" scoped>
.base-info {
  margin-top: 15px;
  padding: 0, 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}
.info-title {
  color: #222;
  text-align: justify;
}
.info-price {
  margin-top: 10px;
}
.info-price .n-price {
  font-size: 24px;
  color: var(--color-high-text);
}
.info-price .o-price {
  font-size: 13px;
  margin-left: 5px;
  text-decoration: line-through;
}
.info-price .discount {
  font-size: 12px;
  position: relative;
  top: -4px;
  margin-left: 5px;
  padding: 3px 6px;
  color: #ffffff;
  border-radius: 8px;
  background-color: #ff5777;
}
.info-other {
  padding: 3px;
  font-size: 13px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.info-service {
  padding: 3px;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
}
.info-service-item img {
  position: relative;
  top: 2px;
  width: 14px;
  height: 14px;
}
.info-service-item span {
  font-size: 13px;
  margin-left: 5px;
  color: #333333;
}
</style>