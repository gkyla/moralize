import moralizeDb from "../data/idb";
import CONFIG from "../settings/config";

const user = {
  namespaced: true,
  state: {
    model: "user",
    firstTimeSetup: true,
    userName: "Moralize",
    userImg: "user-default.png",
    userBirthday: "",
    imgDefault: true
  },
  mutations: {
    setValueFromDb(state, val) {
      state = val;
      console.log("state : ", state);
    },
    setUserName(state, name) {
      state.userName = name;
      state.firstTimeSetup = false;
    },
    setUserImg(state, img) {
      state.userImg = img;
    },
    setUserBirthday(state, birthday) {
      state.userBirthday = birthday;
      state.firstTimeSetup = false;
    }
  },
  actions: {
    async saveToDB({ state }) {
      await moralizeDb.putItem(CONFIG.DB_KEY_USERINFO, {
        ...state
      });
    },
    async getInfo({ commit }) {
      const val = await moralizeDb.getItem(CONFIG.DB_KEY_USERINFO, "user");
      console.log(val);
      commit("setValueFromDb", val);
    }
  }
};

export default user;
