<template>
  <div class="line"></div>
  <div 
    class="account"
    @click="openAccountMenuPopup"
  >
    <account-menu-popup 
      ref="accountMenuPopup" 
      @click.stop
    />
    <div class="account__photo"></div>
    <div class="account__title">Денис Потемкин</div>
  </div>
</template>
<script>
import AccountMenuPopup from "./AccountMenuPopup.vue";
export default {
  name: "AccountMenu",
  components: {
    AccountMenuPopup,
  },
  methods: {
    async openAccountMenuPopup() {
      await this.$refs.accountMenuPopup.switchOpen();
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/css/colors.scss";
.account {
  position: relative;
  height: 49px;
  display: flex;
  padding-left: 15px;
  align-items: center;
  cursor: pointer;

  &__photo {
    width: 30px;
    height: 30px;
    margin: 0 7px 0 0;
    padding: 9.8px 11.1px 9.4px 10.5px;
    border: solid 0 #848484;
    background-color: $white-two;
    border-radius: 50%;
    margin-right: 7px;
  }

  &__title {
    font-family: 'Myriad Pro', sans-serif;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: $white;
  }
}
.line {
  width: 199px;
  height: 1px;
  border: solid 1px $dark-grey-blue;
  margin-left: 15px;
}
</style>
