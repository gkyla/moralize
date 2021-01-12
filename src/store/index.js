import { createStore } from "vuex";
import user from "./user-info.js";
import diary from "./user-diary.js";

export default createStore({
  modules: {
    user,
    diary
  }
});
