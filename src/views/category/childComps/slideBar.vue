<template>
  <div class="slideBar">
    <scroll class="slide-bar-scroll">
      <div class="slide-bar-category" v-for="(item, index) in slideBarList" :key="index">
        <button class="category-item" 
        @click="cateItemClick(item, index)" :class="{active: index === currentIndex}">
          <div class="item">
            {{item.title}}
          </div>
        </button>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from '../../../components/common/scroll/Scroll.vue';

export default {
  components: {Scroll },
  name: "slideBar",
  created() {},
  data() {
    return {
      currentIndex: 0
    };
  },
  props: {
    slideBarList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    cateItemClick(item, index) {
      const obj = {
        maitKey: item.maitKey,
        index
      }
      this.currentIndex = index
      // console.log(this.currentIndex);
      this.$emit('cateItemClick', obj)
    }
  },
}
</script>

<style lang="css" scoped>

.slide-bar {
  width: 100%;
}
.slide-bar-scroll {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
  height: calc(100% - 93px);
  width: 100px;
  overflow: hidden; 
  background-color: #f6f6f6;
  text-align: center;
}
.category-item {
  touch-action: none;
  display: flex;
  height: 45px;
  line-height: 45px;
  width: 100%;
  text-align: center;
  color: #666666;
  border: 0;
}
.item {
  width: 100%;
  text-align: center;
}
.active {
  background-color: #ffffff;
  font-weight: 600;
  color: var(--color-tint);
  border-left: 3px solid var(--color-tint);
}
</style>