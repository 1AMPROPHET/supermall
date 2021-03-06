<template>
  <div class="profile">
    <nav-bar class="profile-nav">
      <template v-slot:center>
        <div class="title">我 的 档 案</div>
      </template>
    </nav-bar>
    <login @loginClicked="loginClick"/>
    <money/>
    <profile-menu/>
    <pop-up 
      v-if="isPopUpShow"
      @closeClicked="closeClick"
      @loginsuccess="loginSuccess">
    </pop-up>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import Login from './childComps/Login.vue'
import ProfileMenu from './childComps/ProfileMenu.vue'
import Money from './childComps/Money.vue'
import PopUp from '@/components/common/popup/PopUp.vue'

export default {
  name: "profile",
  components: {NavBar, Login, Money, ProfileMenu, PopUp},
  data() {
    return {
      isPopUpShow: false,
    }
  },
  methods: {
    loginClick() {
      this.isPopUpShow = true
    },
    closeClick() {
      this.isPopUpShow = false
    },
    loginSuccess() {
      this.isPopUpShow = false
      this.$toast.show('登陆成功', 1500)
      this.$store.state.success = true
    }
  },
}
</script>
<style scoped>
.profile-nav {
  background-color: var(--color-tint);
  color: #ffffff;
}
.title {
  font-size: 17px;
  font-weight: 500;
}

</style>