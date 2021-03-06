<template>
  <div class="mask">
      <div class="window">
        <div class="user">
          <img src="@/assets/img/common/photo.png" alt="">
          <p>登 录</p>
          </div>
        <label class="username">
          <span>账 号</span>
          <input type="text" id="username" :value="this.$store.state.username" placeholder="请输入账号">
          <img src="@/assets/img/common/user.png" alt="">
        </label>
        <label class="password" v-if="!passwordShow">
          <span>密 码</span>
          <input type="password" id="password" v-model="inputPassword" placeholder="请输入密码" key="1">
          <img src="@/assets/img/common/closedeye.png" alt="" @click="closeEyeClick">
        </label>
        <label class="password" v-else>
          <span>密 码</span>
          <input type="text" id="password" v-model="inputPassword" placeholder="请输入密码" key="2">
          <img src="@/assets/img/common/opendeye.png" alt="" @click="openEyeClick">
        </label>
        <div class="confirm">
          <button class="btn" @click="confirm">确 认</button>
        </div>
      </div>
      <div class="close" @click="closeClick">
        <img src="@/assets/img/common/close.png" alt="">
      </div>
    </div>
</template>

<script>
export default {
  name: "PopUp",
  created() {},
  data() {
    return {
      passwordShow: false,
      inputPassword: ''
    };
  },
  props: {
  },
  methods: {
    closeClick() {
      this.$emit('closeClicked')
    },
    closeEyeClick() {
      this.passwordShow = true
      // console.log(this.passwordShow);
    },
    openEyeClick() {
      this.passwordShow = false
    },
    confirm() {
      // console.log(this.inputPassword);
      // console.log(this.password);
      if (this.inputPassword === this.$store.state.password) {
        this.$emit('loginsuccess')
      }
      else {
        this.$toast.show('请输入正确密码', 1500)
      }
    }
    // getValue(event) {
    //   this.inputPassword = event.currentTarget.value
    // }
  },
};
</script>

<style lang="css" scoped>
.mask {
  justify-content: center;
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  color: aliceblue;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
}
.window {
  position: relative;
  flex: 1;
  top: 200px;
  left: 27px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  align-items: center;
  width: 300px;
  height: 270px;
  background-color: white;
  border-radius: 10px;
}
.user {
  position: absolute;
  top: 15px;
  color: var(--color-tint);
}
.user img {
  top: 40px;
  height: 50px;
  border-radius: 90px;
}
.user p {
  font-weight: 600;
}
.username {
  border: 1px solid black;
  border-radius: 5px;
  top: 100px;
  position: absolute;
  margin: 5px;
  color: black;
  display: flex;
}
.username span {
  margin-top: 5px;
  width: 50px;
  font-size: 17px;
}
.username input {
  display: inline-block;
  outline: 0;
  padding: 0 5px;
  border: none;
  height: 30px;
  width: 180px;
}
.username img {
  width: 20px;
  height: 20px;
  margin-top: 5px;
  margin-right: 3px;
  border-radius: 90%;
}
.password {
  border: 1px solid black;
  border-radius: 5px;
  top: 150px;
  position: absolute;
  margin: 5px;
  color: black;
  display: flex;
}
.password span {
  margin-top: 5px;
  width: 50px;
  font-size: 17px;
}
.password input {
  display: inline-block;
  outline: 0;
  padding: 0 5px;
  border: none;
  height: 30px;
  width: 180px;
}
.password img {
  width: 20px;
  height: 20px;
  margin-top: 5px;
  margin-right: 3px;
  border-radius: 90%;
}
.close {
  position: relative;
  top: 200px;
  flex: 1;
}
.close img {
  width: 40px;
}
.confirm {
  position: absolute;
  top: 220px;
}
.btn {
  width: 80px;
  height: 30px;
  border-radius: 90px;
  border: none;
  background-color: var(--color-tint);
  color: #f6f6ff;
  font-weight: 500;
}
</style>