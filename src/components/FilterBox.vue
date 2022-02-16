<template>
  <div
    :class="filter + ` filter-item`"
    :style="`background-image: url(${imgUrl})`"
  ></div>

  <!-- FilterBox.vue에서 반복문을 돌린 경우 -->
  <!-- <div
    v-for="a in filters"
    :key="a"
    class="filter-item"
    :class="a"
    :style="`background-image: url(${imgUrl})`"
  ></div> -->
</template>

<script>
export default {
  name: "filterbox",
  props: {
    imgUrl: String,
    filter: String,
    //filters: Array, // FilterBox.vue에서 반복문을 돌린 경우
  },
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>
