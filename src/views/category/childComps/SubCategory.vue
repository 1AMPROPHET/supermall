<template>
  <div class="subCategory">
    <div class="subCategoryItem" v-for="(item, index) in subCategoryList" :key="index">
        <a href="item.link">
          <img :src="item.image" alt="" class="image">
          <p class="title">{{item.title}}</p>
        </a>
      </div>
  </div>
</template>

<script>
import Scroll from '../../../components/common/scroll/Scroll.vue';
export default {
  components: { Scroll },
  name: "subCategory",
  created() {},
  data() {
    return {};
  },
  props: {
    subCategoryList: {
      type: Array,
      default: []
    }
  },
  methods: {},
};
</script>

<style lang="css" scoped>

.subCategory {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding: 5px;
  flex-direction: row;
}
.subCategoryItem {
  text-align: center;
  padding: 5px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 45%;
  height: 100px;
  margin-bottom: 10px;
  flex-wrap: wrap;
}
.image {
  width: 65px;
  margin-bottom: 7px;
}
.title {
  font-size: 14px;
}  
</style>