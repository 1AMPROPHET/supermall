<template>
  <div class="login">
    <div class="image">
      <img src="@/assets/img/common/photo.png" alt="" v-if="!this.$store.state.success">
      <img src="@/assets/img/common/userphoto.png" alt="" v-else>
    </div>
    <div class="user-login">
      <p class="log" @click="loginClick">登陆/注册</p>
      <div class="phone">
        <img class="phone-icon" src="@/assets/img/common/phone.png" alt="">
        <p class="phone-number">暂无绑定手机号</p>
      </div>
    </div>
    <div class="right-arrow">
      <img src="@/assets/img/common/rightarrow.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  created() {},
  data() {
    return {}
  },
  props: {
  },
  methods: {
    loginClick() {
      this.$emit('loginClicked')
    }
  },
};
</script>

<style lang="css" scoped>
.login {
  display: flex;
  align-items: center;
  position: relative;
  background-color: var(--color-tint);
  height: 90px;
  width: 100%;
  padding: 0 20px;
}
.image {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color:#f6f6f6;
}
.image img {
  height: 50px;
  width: 50px;
  right: 30px;
}
.user-login {
  align-items: center;
  color: #f6f6f6;
  left: 20px;
  right: 20px;
  flex: 1;
  padding: 15px 15px;
  font-size: 17px;
}
.log {
  margin-left: 3px;
}
.phone {
  display: flex;
}
.phone p {
  margin-top: 2px;
}
.phone-icon {
  width: 20px;
}
.phone-number {
  color: #f6f6f6;
  font-size: 15px;
}
.right-arrow {
  position: absolute;
  right: 10px;
  width: 30px;
  height: 20px;
  background-color: var(--color-tint);
  flex: 1;
}
.right-arrow img {
  width: 25px;
}
</style>