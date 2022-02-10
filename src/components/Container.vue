<template>
  <div>
    <Post :postdata="a" v-for="(a, i) in postdata" :key="i" />
    <!-- <Post :postdata="postdata[1]" />
    <Post :postdata="postdata[2]" /> -->
  </div>
</template>

<script>
import Post from "./Post.vue";

export default {
  name: "Container",
  props: {
    postdata: Array,
  },
  components: {
    Post,
  },
};
</script>

<style></style>
