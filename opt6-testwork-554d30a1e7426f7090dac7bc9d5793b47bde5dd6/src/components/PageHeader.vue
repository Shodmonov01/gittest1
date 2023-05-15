<template>
  <div class="header">
    <div class="header__title">Проведение ТО и мелкий ремонт</div>
    <div class="header__menu">
      <div class="header__menu-container">
        <div class="header__subtitle">Общее</div>
        <div class="header__subtitle header__subtitle-active">
          Товар списания
        </div>
        <div class="header__subtitle">Доп. расходы</div>
      </div>
      <settings-menu :popupData="menuData" />
    </div>
  </div>
</template>
<script>
import SettingsMenu from "./SettingsMenu.vue";
export default {
  name: "PageHeader",

  components: {
    SettingsMenu,
  },

  computed: {
    menuData() {
      return ["Отображение столбцов", "Порядок столбцов"];
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/css/colors.scss";
.header {
  margin-bottom: 25px;
  &__title {
    font-family: 'Myriad Pro';
    font-size: 30px;
    color: $black;
    margin: 25px 0px 25px;
  }

  &__menu {
    display: flex;
    justify-content: space-between;

    &-container {
      display: flex;
      justify-content: space-between;
      width: 300px;
    }
  }

  &__subtitle {
    font-family: 'Myriad Pro', sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: $light-navy;

    &-active {
      color: $black;
    }
  }
}
</style>
