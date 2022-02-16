<template>
  <div
    :class="filter + ` filter-item`"
    :style="`background-image: url(${imgUrl})`"
    @click="fire"
  >
    <slot></slot>

    <!-- <button @click="fire">버튼</button> -->

    <!-- Named Slots 기능 -->
    <!-- <slot name="a"></slot>
    <slot name="b"></slot> -->

    <!-- Slot Props 기능 -->
    <!-- <slot :msg="msg"></slot> -->
  </div>

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
  methods: {
    fire() {
      this.emitter.emit("filterName", this.filter);
    },
  },
  data() {
    return {
      //msg: "hello", // Slot Props 기능
    };
  },
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
