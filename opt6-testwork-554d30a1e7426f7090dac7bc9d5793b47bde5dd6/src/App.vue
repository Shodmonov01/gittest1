<template>
  <div class="page">
    <div class="page__leftcolumn">
      <img class="logo" src="./assets/image/SVG/group-4.svg" alt="" />
      <main-menu />
      <account-menu />
    </div>
    <div class="page__rightcolumn">
      <page-header />
      <add-table 
        @add-new-row="addProduct"
      />
      <table-block 
        :add-product="stateSwitchProduct"
      />
    </div>
  </div>
</template>
<script>
import MainMenu from "./components/MainMenu.vue"
import AccountMenu from "./components/AccountMenu.vue"
import PageHeader from "./components/PageHeader.vue"
import AddTable from "./components/AddTable.vue";
import TableBlock from "./components/TableBlock.vue"
export default {
  name: "App",
  components: {
    MainMenu,
    AccountMenu,
    PageHeader,
    AddTable,
    TableBlock
  },

  data() {
    return {
      stateSwitchProduct: false
    }
  },

  methods: {
    addProduct(product) {
      if (product) {
        this.stateSwitchProduct ? this.stateSwitchProduct = false : this.stateSwitchProduct = true
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import './assets/css/colors.scss';
.page {
  display: flex;

  &__leftcolumn {
    width: 229px;
    background-image: radial-gradient(circle at 29% 0, $black, $dark 103%);
    display: flex;
    flex-direction: column;
  }

  &__rightcolumn {
    margin: 0px 25px 0px 25px;
    min-width: 1449px;
  }
} 
.logo {
  position: absolute;
  width: 118.6px;
  height: 20px;
  margin: 31px 0px 30px 55px;
}
</style>
