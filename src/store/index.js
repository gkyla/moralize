import { createStore } from "vuex";
import user from "./user-info.js";

export default createStore({
  state: {
    oke: "lol"
  },
  modules: {
    user
  }
});
