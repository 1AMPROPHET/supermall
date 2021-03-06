<template>
  <div class="recommend">
    <div v-for="(item, index) in recommend" :key="index" class="item">
      <a :href="item.link">
        <img :src="item.image" alt="" class="img">
        <div class="text"> {{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props: {
      recommend: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
.recommend {
  display: flex;
  text-align: center;
  font-size: 12px;
  padding: 10px 5px 20px;
  border-bottom: 8px solid #eee;
}
.item {
  flex: 1;
  margin: 3px;
}
.img {
  width: 100%;
}

</style>