import { createStore } from "vuex";
import user from "./user-info.js";
import diary from "./user-diary.js";
import calenderEvent from "./user-event.js";
import display from "./display-control.js";

export default createStore({
  modules: {
    user,
    diary,
    calenderEvent,
    display
  }
});
