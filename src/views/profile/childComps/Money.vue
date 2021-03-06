<template>
  <div class="money">
    <div class="account-balance">
      <p class="balance-number">
        0.00
          <span>元</span>
      </p>
      <p>我的余额</p>
    </div>
    <div class="discount">
      <p class="discount-number">
        0
          <span>个</span>
      </p>
      <p>我的余额</p>
    </div>
    <div class="points">
      <p class="points-number">
        0
          <span>分</span>
      </p>
      <p>我的余额</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Money",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="css" scoped>
.money {
  align-items: center;
  display: flex;
  background-color: white;
  height: 100px;
  width: 100%;
  border-bottom: 15px solid #f6f6f6;
}
.account-balance {
  display: flex;
  align-items: center;
  height: 100px;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  border-left: 2px solid #f6f6f6;
  border-right: 2px solid #f6f6f6;
}
.discount {
  display: flex;
  align-items: center;
  height: 100px;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  border-left: 2px solid #f6f6f6;
  border-right: 2px solid #f6f6f6;
}
.points {
  display: flex;
  align-items: center;
  height: 100px;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  border-left: 2px solid #f6f6f6;
  border-right: 2px solid #f6f6f6;
}
.balance-number{
  font-size: 22px;
  font-weight: 700;
  color: red;
}
.discount-number{
  font-size: 22px;
  font-weight: 700;
  color: red;
}
.points-number{
  font-size: 22px;
  font-weight: 700;
  color: red;
}
.discount-number span {
  font-size: 16px;
  font-weight: 300;
  color: black;
}
.balance-number span {
  font-size: 16px;
  font-weight: 300;
  color: black;
}
.points-number span {
  font-size: 16px;
  font-weight: 300;
  color: black;
}
</style>