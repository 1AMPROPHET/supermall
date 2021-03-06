<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  created() {},
  data() {
    return {
      message: '',
      isShow: false
    };
  },
  props: {
    // message: {
    //   type: String,
    //   default: ''
    // }
  },
  methods: {
    show(message, duration = 2000) {
      this.isShow = true
      this.message = message

      setTimeout(() => {
        this.isShow = false
        this.message = ''
      }, duration)
    }
  },
};
</script>

<style lang="css" scoped>
.toast {
  display: block;
  position: fixed;
  top: 50%;
  left: 50%;
  color: aliceblue;
  padding: 8px 10px;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  z-index: 999;

  background-color: rgba(0, 0, 0, 0.6);
}
</style>