<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
.nav-bar {
  position: relative;
  display: flex;
  /* line-height需要内容才能撑起来*/
  line-height: 44px;
  /*height: 44px;*/
  text-align: center;
  box-shadow: 0 2px 1px rgba(100,100,100,0.2);
  font-size: 15px;
}

.left, .right {
  width: 60px;
}

.center {
  flex: 1;
}
</style>