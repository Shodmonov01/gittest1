<template>
  <div class="main">
    <h1 class="main__title">Проведение ТО и мелкий ремонт</h1>
    <div class="main__links">
      <a class="main__link">Общее</a>
      <a class="main__link main__link_active">Товар списания</a>
      <a class="main__link">Доп. расходы</a>
      <span class="main__gear"></span>
    </div>
    <div class="main__add-section">
      <button class="main__add-button">
        <span class="main__add-plus"></span>Добавить строку
      </button>
    </div>
    <div class="main__content">
      <div class="main__content-header">
        <p class="main__content-heading">Сохранить изменения</p>
        <span class="main__gear"></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "MainWindow",
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  background-color: #fbfcfd;
  width: calc(100% - 255px);
}

.main__title {
  /* font-family: MyriadPro; */
  font-size: 30px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--black);
}
.main__links {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
.main__link {
  /* font-family: MyriadPro; */
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--light-navy);
}
.main__link_active {
  color: var(--black);
}
</style>
