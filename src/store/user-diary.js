const user = {
  namespaced: true,
  state: {
    allDiary: [],
    loading: true
  },
  mutations: {
    getAllDiary(state, diary) {
      if (diary) {
        state.allDiary = diary;
        state.loading = false;
      }
    },
    updateDiary(state, singleDiary) {
      state.allDiary.push(singleDiary);
    }
  }
};

export default user;
