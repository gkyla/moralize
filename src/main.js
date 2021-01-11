import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import CKEditor from "@ckeditor/ckeditor5-vue";

import {
  faHome,
  faBookOpen,
  faStickyNote,
  faTrophy,
  faPlusCircle,
  faCog,
  faCalendarAlt,
  faPercent,
  faCheck,
  faTimes,
  faImage,
  faTag,
  faTrash,
  faExpandArrowsAlt,
  faCompress,
  faCalendarPlus
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";

const icons = [
  faHome,
  faBookOpen,
  faStickyNote,
  faTrophy,
  faPlusCircle,
  faCog,
  faCalendarAlt,
  faPercent,
  faCheck,
  faTimes,
  faImage,
  faTag,
  faTrash,
  faExpandArrowsAlt,
  faCompress,
  faCalendarPlus
];

library.add(...icons);

createApp(App)
  .use(store)
  .use(router)
  .use(CKEditor)
  .use(require("moment"))
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
