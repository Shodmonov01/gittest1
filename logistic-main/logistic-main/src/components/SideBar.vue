<template>
  <div class="Rectangle-11">
    <img alt="OPT6 logo" src="./../assets/sidebar-logo.svg" class="Group-4" />
    <div class="Section">
      <div class="Rectangle">
        <div :class="['Path-1']">
          <span :class="['Path-3']"></span>
          <a class="verdana" href="#">Логистика</a>
        </div>
      </div>

      <div :class="['Rectangle', { Active: state === 1 }]">
        <div
          :class="['Path-1', { 'mg-in-Copy-37': state === 1 }]"
          @click="setState(1)"
        >
          <span :class="['Path-3']"></span>
          <p class="verdana">Перевозчики</p>
          <span :class="['Path-4', { 'Path-4-active': state === 1 }]"></span>
        </div>
        <Collapse as="section" :when="state === 1" class="v-collapse">
          <ul>
            <li>
              <a href="#" target="_blank" rel="noopener"> test </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener"> test </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener"> test </a>
            </li>
          </ul>
        </Collapse>
      </div>

      <div class="Rectangle">
        <div :class="['Path-1']">
          <span :class="['Path-3']"></span>
          <a class="verdana" href="#">Задачи</a>
        </div>
      </div>

      <div :class="['Rectangle', { Active: state === 2 }]">
        <div
          :class="['Path-1', { 'mg-in-Copy-37': state === 2 }]"
          @click="setState(2)"
        >
          <span :class="['Path-3']"></span>
          <p class="verdana">Аналитика</p>
          <span :class="['Path-4', { 'Path-4-active': state === 1 }]"></span>
        </div>

        <Collapse as="section" :when="state === 2" class="v-collapse">
          <ul>
            <li>
              <a href="#" target="_blank" rel="noopener"> Справочник </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener"> База </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener"> База </a>
            </li>
          </ul>
        </Collapse>
      </div>

      <div class="Rectangle">
        <div :class="['Path-1']">
          <span :class="['Path-3']"></span>
          <a class="verdana" href="#">Адреса</a>
        </div>
      </div>

      <div class="Rectangle">
        <div :class="['Path-1']">
          <span :class="['Path-3']"></span>
          <a class="verdana" href="#">Товары</a>
        </div>
      </div>

      <div class="Rectangle">
        <div :class="['Path-1']">
          <span :class="['Path-3']"></span>
          <a class="verdana" href="#">Информация для склада</a>
        </div>
      </div>

      <div class="Rectangle">
        <div :class="['Path-1']">
          <span :class="['Path-3']"></span>
          <a class="verdana" href="#">Адреса</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SideBar",

  data() {
    return {
      drag: false,
      state: 0,
    };
  },

  methods: {
    setState(ind: number) {
      this.state = ind;
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Rectangle-11 {
  box-sizing: border-box;
  /* width: 20%; */
  width: 230px;
  /* max-width: 230px; */
  min-height: 100vh;
  height: 100%;
  padding: 30px 0 10px;
  background-image: radial-gradient(
    circle at 29% 0,
    var(--black),
    var(--dark) 103%
  );
}

.Group-4 {
  width: 100%;
  height: 25px;
  margin: 0 auto 15px;
  object-fit: contain;
}
.Section {
  /* margin-top: 30px; */
  /* display: flex;
  flex-direction: column;
  gap: 14px; */
}

.Rectangle {
  /* min-height: 31px; */
  /* margin: 7px 0 0; */
  /* padding: 7px 10px 6px 25px; */
}

.Path-1 {
  padding: 7px 10px 7px 9px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
}

.mg-in-Copy-37 {
  padding: 7px 10px 7px 7px;
  border-left: 2px solid var(--pumpkin-orange);
  background-color: var(--dark-blue-grey);
}

.Path-3 {
  width: 11px;
  height: 11px;
  object-fit: contain;
}

.Rectangle:hover .Path-3 {
  background: url(../assets/Combined-Shape.svg);
}

.verdana {
  /* margin: 0 84.5px 0 0; */
  margin: 0;
  font-family: Verdana;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--white);
  text-decoration: none;
  max-width: 124px;
}

.Path-4 {
  width: 7px;
  height: 12px;
  background: url(../assets/arrow-down.svg);
}

.v-collapse {
  transition: height var(--vc-auto-duration) cubic-bezier(0.33, 1, 0.68, 1);
  background-color: var(--dark-blue-grey);
}
ul {
  list-style-type: none;
  padding: 0 0 1px;
  margin: 0;
  display: flex;
  flex-direction: column;
}
li {
  display: inline-block;
  margin: 0 17px 0;
  padding: 7px 10px 5px 9px;
}
li a {
  font-family: Verdana;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--light-grey-blue);
  text-decoration: none;
}
</style>
