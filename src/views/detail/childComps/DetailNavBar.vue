<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="@/assets/img/common/back.png" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item, index, key) in title" 
        :key="key" 
        class="title-item" 
        :class="{active: index === currentIndex}" @click="titleItemClick(index)">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '../../../components/common/navbar/NavBar.vue';
export default {
  components: { NavBar },
  name: "DetailNavBar",
  created() {},
  data() {
    return {
      title: [
        '商品',
        '参数',
        '评论',
        '推荐'
      ],
      currentIndex: 0
    };
  },
  methods: {
    titleItemClick(index) {
      this.currentIndex = index
      this.$emit('navClick', index)
    },
    backClick() {
      this.$router.back()
    }
  },
  mounted() {
    this.currentIndex = this.currentPosition
  },
};
</script>

<style lang="css" scoped>
.title {
  display: flex;
}
.title-item {
  flex: 1;
}
.active {
  color: rgb(235, 129, 147);
}
.back img {
  margin-top: 10px;
  height: 20px;
  width: 20px;
}
</style>