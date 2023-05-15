<template>
  <div class="add-layot">
    <div class="button-add" @click="addNewRow">
      <img
        class="button-add__icon"
        src="../assets/image/SVG/3232Combined Shape.svg"
        alt=""
      />
      <div class="button-add__title">Добавить строку</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddTable",

  emits: {
    "add-new-row": (value) => typeof value === "string",
  },

  methods: {
    addNewRow() {
      this.$emit("add-new-row", "added");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/css/colors.scss";
.add-layot {
  height: 75px;
  border-radius: 10px;
  box-shadow: 0 5px 20px 0 $black-7;
  border: solid 1px $pale-grey-two;
  background-color: $white;
  margin-bottom: 25px;
}
.button-add {
  width: 146px;
  height: 35px;
  border-radius: 5px;
  background-color: $dodger-blue;
  margin: 20px 0px 20px 25px;
  display: flex;
  align-items: center;
  padding: 10px 15px 10px 10px;
  cursor: pointer;

  &__icon {
    width: 11px;
    height: 11px;
  }

  &__title {
    margin: 0 0 0 7px;
    font-family: "Myriad Pro", sans-serif;
    font-size: 14px;
    color: $white;
  }
}
</style>
