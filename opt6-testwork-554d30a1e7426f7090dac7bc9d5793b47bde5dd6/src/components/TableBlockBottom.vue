<template>
  <div class="total">
    <div class="total-amount">
      <div
        class="total-amount__container"
      >
        <div class="total-amount__title">Сумма: </div>
        <div class="total-amount__title final">{{ isValid(totalAmount.fullprice) }} руб</div>
      </div>
      <div
        class="total-amount__container"
      >
        <div class="total-amount__title">Кол-во:</div>
        <div class="total-amount__title final">{{ isValid(totalAmount.fullamount) }} шт</div>
      </div>
      <div
        class="total-amount__container"
      >
        <div class="total-amount__title">Общий вес:</div>
        <div class="total-amount__title final">{{ isValid(totalAmount.weight) }} кг</div>
      </div>
    </div>
    <div class="total-price">
      <div
        class="total-amount__container"
      >
        <div class="total-amount__title final">Общая сумма:</div>
        <div class="total-amount__title final bold">{{ isValid(totalAmount.fullprice) }} руб</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TableBlockBottom",

  props: {
    totalAmount: {
      type: Object,
      required: true,
    }
  },

  methods: {
    isValid(item) {
      return +item ? item : "0"
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/css/colors.scss";
.total-amount {
  margin: 15px 0px 0px 1130px;
  width: 304px;
  height: 105px;
  border-radius: 5px;
  border: solid 1px $pale-grey-two;
  background-color: #fbfcfd;
  padding: 7.5px 15px;
  &__container {
    display: flex;
    padding: 7.5px 0px;
    justify-content: space-between;
  }

  &__title {
    font-family: "Myriad Pro", sans-serif;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    color: $warm-grey;
  }
}
.total-price {
  width: 304px;
  height: 45px;
  padding: 7.5px 15px;
  border-radius: 5px;
  border: solid 1px $pale-grey-two;
  background-color: #fbfcfd;
  margin: 5px 0px 0px 1130px;
}
.final {
  color: $black;
}
.bold {
  font-weight: 600;
}
</style>
