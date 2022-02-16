<template>
  <div>
    <!-- 저번시간에 만든거 -->
    <div v-if="step == 0">
      <Post :postdata="a" v-for="(a, i) in postdata" :key="i" />
    </div>
    <!-- <Post :postdata="postdata[1]" />
    <Post :postdata="postdata[2]" /> -->

    <!-- 필터선택페이지 -->
    <div v-if="step == 1">
      <div
        class="upload-image"
        :style="{ backgroundImage: `url(${imgUrl})` }"
      ></div>
      <div class="filters">
        <FilterBox
          :filter="filter"
          :imgUrl="imgUrl"
          :filters="filters"
          v-for="filter in filters"
          :key="filter"
        >
          <span>{{ filter }}</span>

          <!-- Named Slots 기능 -->

          <!-- <template v-slot:a> 데이터1 </template>
          <template v-slot:b> 데이터2 </template> -->

          <!-- Slot Props 기능 -->
          <!-- <template v-slot:default="slotPropsMsg">
            {{ slotPropsMsg.msg }}
          </template> -->
        </FilterBox>
      </div>
    </div>

    <!-- 글작성페이지 -->
    <div v-if="step == 2">
      <div
        class="upload-image"
        :style="{ backgroundImage: `url(${imgUrl})` }"
      ></div>
      <div class="write">
        <!-- 내가 한 방법 (초기에 write!가 안나타난다. 변수를 사용해서) -->
        <!-- <textarea v-model="text" @input="$emit('text', text)" class="write-box">
write!</textarea
        > -->
        <!-- 선생님 정답 (따로 변수를 안 만들어도 된다) -->
        <textarea @input="$emit('text', $event.target.value)" class="write-box">
write!</textarea
        >
      </div>
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";
import FilterBox from "./FilterBox.vue";

export default {
  name: "Container",
  data() {
    return {
      // text: "",
      filters: [
        "aden",
        "_1977",
        "brannan",
        "brooklyn",
        "clarendon",
        "earlybird",
        "gingham",
        "hudson",
        "inkwell",
        "kelvin",
        "lark",
        "lofi",
        "maven",
        "mayfair",
        "moon",
        "nashville",
        "perpetua",
        "reyes",
        "rise",
        "slumber",
        "stinson",
        "toaster",
        "valencia",
        "walden",
        "willow",
        "xpro2",
      ],
    };
  },
  props: {
    postdata: Array,
    step: Number,
    imgUrl: String,
  },
  components: {
    Post,
    FilterBox,
  },
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>
