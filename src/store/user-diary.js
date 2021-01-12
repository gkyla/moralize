import moralizeDb from "../data/idb.js";
import CONFIG from "../settings/config.js";

const diary = {
  namespaced: true,
  state: {
    allDiary: [],
    currentDiary: {},
    loading: true
  },
  mutations: {
    updateAllDiary(state, diary) {
      if (diary) {
        state.allDiary = diary;
        state.loading = false;
      }
    },
    updateDiary(state, singleDiary) {
      state.allDiary.push(singleDiary);
    },
    setCurrentDiary(state, theDiary) {
      state.currentDiary = theDiary;
    }
  },
  actions: {
    async removeTheDiary(ctx, id) {
      const index = ctx.state.allDiary.findIndex(el => el.id === id);
      ctx.state.allDiary.splice(index, 1);
      await moralizeDb.deleteItem(CONFIG.DB_KEY_DIARY, id);
    },

    async saveTheDiary({ commit, dispatch }, data) {
      await moralizeDb.putItem(CONFIG.DB_KEY_DIARY, data);
      commit("updateDiary", data);
      dispatch("getAllDiary");
    },

    async getTheDiary({ commit }, id) {
      const val = await moralizeDb.getItem(CONFIG.DB_KEY_DIARY, id);
      commit("setCurrentDiary", val);
    },

    async getAllDiary({ commit }) {
      const val = await moralizeDb.getAllItem(CONFIG.DB_KEY_DIARY);
      commit("updateAllDiary", val);
    }
  }
};

export default diary;
