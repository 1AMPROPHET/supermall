<template>
  <div class="back-top">
    <img src="@/assets/img/common/arrow1.png" alt="">
  </div>
</template>

<script>
export default {
  name: "BackTop"
}
</script>

<style scoped>
.back-top {
  position: fixed;
  right: 10px;
  bottom: 60px;
}
.back-top img {
  width: 40px;
  z-index: 9;
  background-color: #fff;
  border-radius: 90px;
}

</style>