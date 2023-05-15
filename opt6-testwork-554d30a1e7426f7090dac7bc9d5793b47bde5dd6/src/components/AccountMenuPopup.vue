<template>
  <Transition>
    <div class="popup" v-if="isOpen">
      <div class="popup__title">Личные настройки</div>
      <div class="popup__title">Выйти</div>
    </div>
  </Transition>
</template>
<script>
export default {
  name: "AccountMenuPopup",

  data() {
    return {
      isOpen: false,
    };
  },

  methods: {
    switchOpen() {
      this.isOpen ? (this.isOpen = false) : (this.isOpen = true);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/css/colors.scss";
.popup {
  position: absolute;
  top: -70%;
  transform: translateY(-50%);
  width: 199px;
  height: 58px;
  border-radius: 5px;
  box-shadow: 0 0 3px 0 $black, inset 0 1px 2px 0 $white;
  background-color: $white;
  &__title {
    font-family: 'Myriad Pro', sans-serif;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: $black;
    padding: 7px 0px 4.2px 9.6px;
    &:hover {
      border-radius: 5px;
      background-color: $pale-grey;
    }
  }
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
