<template>
  <div class="choose-product">
    <div 
      class="choose-product__title" 
      v-for="title in popupData" 
      :key="title"
      @click="chooseProduct(title)"
    >
      {{ title }}
    </div>
  </div>
</template>
<script>
export default {
  name: "TableBlockPopup",

  emits: {
    'choosed-product': (value) => typeof(value) === 'string'
  },

  methods: {
    chooseProduct(product) {
      this.$emit('choosed-product', product)
      this.isOpen = false
    }
  },

  computed: {
    popupData() {
      return [
        "Мраморный щебень фр. 2-5 мм, 25кг",
        "Мраморный щебень фр. 2-5 мм, 25кг (белый)",
        "Мраморный щебень фр. 2-5 мм, 25кг (вайт)",
        "Мраморный щебень фр. 2-5 мм, 25кг, возврат",
        "Мраморный щебень фр. 2-5 мм, 1000кг",
      ];
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/css/colors.scss";
.choose-product {
  position: absolute;
  z-index: 2;
  top: calc(100% + 5px);
  width: 593px;
  border-radius: 5px;
  box-shadow: 0 0 3px 0 $black, inset 0 1px 2px 0 $white-50;
  background-color: $white;

  &__title {
    font-family: "Myriad Pro", sans-serif;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: $black-two;
    padding: 7px 0px 7px 10px;

    &:hover {
      cursor: pointer;
      border-radius: 5px;
      background-color: $pale-grey;
    }
  }
}
</style>
