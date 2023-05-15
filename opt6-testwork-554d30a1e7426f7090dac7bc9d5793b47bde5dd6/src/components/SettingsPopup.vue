<template>
  <div class="popup-setting-open">
    <div
      class="popup-setting-open__container"
      v-for="data in popupData"
      :key="data"
    >
      <div class="popup-setting-open__container-title">
        {{ data }}
      </div>
      <svg
        width="5.3px"
        height="9px"
        viewBox="0 0 10 17"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <title>Path 4</title>
        <g
          id="Журнал"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="iPhone-SE-Copy-32"
            transform="translate(-355.000000, -31.000000)"
            fill="#000000"
          >
            <g id="Group-5" transform="translate(281.000000, 31.000000)">
              <path
                d="M82.2806052,16.8130357 L74.1283815,8.78919338 C74.0427938,8.68220882 74,8.54312889 74,8.37195359 C74,8.20077828 74.0427938,8.06169835 74.1283815,7.95471379 L82.2806052,0.123443727 C82.7513373,-0.0905254 83.1792756,-0.0263346618 83.56442,0.316015942 C83.9495644,0.658366546 84.056549,1.0863048 83.8853737,1.59983071 L76.952774,8.33985822 L83.8853737,15.1440765 C84.0993428,15.6148085 84.0137552,16.0641437 83.6286107,16.492082 C83.2434663,16.9200202 82.7941311,17.0270048 82.2806052,16.8130357 Z"
                id="Path-4"
                transform="translate(79.000000, 8.460010) scale(-1, 1) translate(-79.000000, -8.460010) "
              ></path>
            </g>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  name: "SettingsPopup",
  props: {
    popupData: {
      type: Array,
      required: true,
    },
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/css/colors.scss";
.popup-setting-open {
  position: absolute;
  z-index: 2;
  margin-top: 5px;
  right: 50%;
  width: 179px;
  border-radius: 5px;
  box-shadow: 0 0 3px 0 $black, inset 0 1px 2px 0 $white-50;
  background-color: $white;

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 7px 10.7px 7px 10px;
    &:hover {
      border-radius: 5px;
      background-color: $pale-grey;
    }

    &-title {
      font-family: "Myriad Pro", sans-serif;
      line-height: normal;
      font-size: 14px;
      color: $black-two;
    }
  }
}
</style>
