import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      name: "kim",
      age: 20,
      likes: [10, 20, 30],
      clickLike: [false, false, false],
    };
  },
  mutations: {
    changeName(state) {
      state.name = "park";
    },
    plusAge(state, payload) {
      //state.age++;
      state.age += payload;
    },
    countLikes(state, payload) {
      if (state.clickLike[payload] == false) {
        state.likes[payload]++;
        state.clickLike[payload] = true;
      } else {
        state.likes[payload]--;
        state.clickLike[payload] = false;
      }
    },
  },
});

export default store;
