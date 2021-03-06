<template>
  <div class="check-button" :class="{check: isChecked}">
    <img src="~assets/img/common/check.png" alt="">
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  created() {},
  data() {
    return {};
  },
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  },
  methods: {},
}
</script>

<style lang="css" scoped>
.check-button img {
  height: 20px;
  width: 20px;
  border: 2px solid #aaa;
  border-radius: 90px;
}
.check {
  /* border-color: red; */
  border-radius: 50%;
  background-color: red;
}
</style>