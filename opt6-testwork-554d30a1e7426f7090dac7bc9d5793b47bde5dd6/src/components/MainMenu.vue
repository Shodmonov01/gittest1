<template>
  <div class="menu">
    <draggable :list="menu" ghost-class="ghost">
      <transition-group type="transition" name="flip-list">
        <div v-for="point in menu" :key="point.id" class="title sortable">
          <div
            class="menu__container"
            @click.stop="openSubMenu(point.id)"
            :class="{
              title__active: opened === point.id,
            }"
          >
            <div class="title__hidden"></div>
            <div class="title__container">
              <div class="title__text">{{ point.title }}</div>
              <img
                v-if="point.subtitles.length"
                class="path"
                src="../assets/image/SVG/21312431Path 4.svg"
                alt=""
                :class="{
                  path__open: opened === point.id,
                }"
              />
            </div>
          </div>
          <Transition>
            <div
              v-if="point.subtitles.length && opened === point.id"
              class="submenu"
            >
              <div
                v-for="(subtitle, id) in point.subtitles"
                :key="id"
                class="title__text title__active title__text-active"
              >
                {{ subtitle }}
              </div>
            </div>
          </Transition>
        </div>
      </transition-group>
    </draggable>
  </div>
</template>
<script>
import { VueDraggableNext } from "vue-draggable-next";
export default {
  name: "MainMenu",
  components: {
    draggable: VueDraggableNext,
  },

  data() {
    return {
      opened: null,
      menu: [
        {
          id: 0,
          title: "Логистика",
          subtitles: [],
        },
        {
          id: 1,
          title: "Перевозчики",
          subtitles: ["Перевозчики 1", "Перевозчики 2", "Перевозчики 3"],
        },
        {
          id: 2,
          title: "Задачи",
          subtitles: [],
        },
        {
          id: 3,
          title: "Аналитика",
          subtitles: ["Справочник", "База", "Ваза"],
        },
        {
          id: 4,
          title: "Адреса",
          subtitles: [],
        },
        {
          id: 5,
          title: "Товары",
          subtitles: [],
        },
        {
          id: 6,
          title: "Информация для склада",
          subtitles: [],
        },
        {
          id: 7,
          title: "Адреса",
          subtitles: [],
        },
      ],
    };
  },

  methods: {
    openSubMenu(id) {
      if (this.opened === id) {
        this.opened = null;
      } else {
        this.opened = id;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/css/colors.scss";
.menu {
  flex: 1 1 auto;
  margin-top: 81px;
  min-height: 719px;
  &__container {
    display: flex;
    position: relative;
    cursor: pointer;
    &:hover {
      .title__hidden {
        display: block;
      }
      .title__text {
        color: $pumpkin-orange;
      }
    }
  }
}
.title {
  &__container {
    display: flex;
    align-items: center;
    width: 229px;
    justify-content: space-between;
  }

  &__text {
    padding: 7px 0px 7px 25px;
    font-family: "Verdana", sans-serif;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: $white;
    &-active {
      color: $light-grey-blue;
    }
  }

  &__hidden {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 30px;
    background-color: $pumpkin-orange;
  }

  &__active {
    background-color: $dark-blue-grey;
  }
}
.path {
  width: 7px;
  height: 12px;
  margin-right: 17.5px;
  transform: rotate(90deg);
  cursor: pointer;
  &__open {
    transform: rotate(-90deg);
  }
}
.flip-list-move {
  transition: transform 0.5s;
}
.ghost {
  &:before {
    content: " ";
    position: absolute;
    z-index: 2;
    top: 10px;
    left: 9px;
    width: 11px;
    height: 12px;
    background-image: url("../assets/image/SVG/12Combined Shape.svg");
  }
}
.page .sortable-drag {
  opacity: 0;
}
.v-enter-active {
  transition: 0.5s ease all;
}
.v-leave-active {
  transition: 0.2s ease all;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
