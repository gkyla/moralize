const user = {
  namespaced: true,
  state: {
    userName: "Gitkyla",
    userImg: "user-default.png",
    imgDefault: true
  },
  mutations: {
    setUserName(state, name) {
      state.userName = name;
    },
    setUserImg(state, img) {
      state.userImg = img;
    }
  },
  actions: {
    getUserName({ commit }, name) {
      commit("setUserName", name);
    },
    getUserImg({ commit }, img) {
      commit("setUserImg", img);
    }
  },
  modules: {}
};

export default user;
