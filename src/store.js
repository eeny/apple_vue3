import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      name: "kim",
      age: 20,
      likes: [10, 20, 30],
      clickLike: [false, false, false],
      more: {},
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
    setMore(state, payload) {
      state.more = payload;
    },
  },
  actions: {
    getData(context) {
      axios.get(`https://codingapple1.github.io/vue/more0.json`).then((a) => {
        console.log(a.data);
        context.commit("setMore", a.data);
      });
    },
  },
});

export default store;
