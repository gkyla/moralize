import moralizeDb from "../data/idb.js";
import CONFIG from "../settings/config.js";

const diary = {
  namespaced: true,
  state: {
    allDiary: [],
    currentResultFilteredOption: [],
    currentDiary: {},
    counter: 0,
    currentSearch: null,
    loading: true
  },
  getters: {
    getPinedDiary(state) {
      return state.allDiary.filter(diary => diary.pin);
    },
    searchDiary(state) {
      if (state.currentSearch) {
        return state.allDiary.filter(diary =>
          diary.title.toLowerCase().includes(state.currentSearch.toLowerCase())
        );
      }

      if (state.currentResultFilteredOption) {
        return state.currentResultFilteredOption;
      }

      if (!state.currentSearch && !state.currentResultFilteredOption) {
        return state.allDiary;
      }
    },
    allMood(state) {
      return new Set(state.allDiary.map(diary => diary.mood));
    },
    allTag(state) {
      return new Set(state.allDiary.map(diary => diary.tag));
    },
    allLocation(state) {
      return new Set(state.allDiary.map(diary => diary.location));
    }
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
    },
    setCurrentSearch(state, value) {
      state.currentSearch = value;
    },
    setCurrentResultFilteredOption(state, result) {
      state.currentResultFilteredOption = result;
      console.log(result);
    }
  },
  actions: {
    async pinDiary({ state }, id) {
      // Find the diary based on the id
      const theDiary = state.allDiary.find(diary => diary.id === id);

      // Toggle Pin
      if (theDiary.pin) {
        theDiary.pin = false;
      } else {
        theDiary.pin = true;
      }

      // Update on idb
      await moralizeDb.putItem(CONFIG.DB_KEY_DIARY, { ...theDiary });
    },

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
    },

    filterOption({ commit, state }, selectedOption) {
      // for (const property in selectedOption) {
      //   if (selectedOption[property] !== "Default") {
      //     notDefault.push({
      //       mode: property,
      //       value: selectedOption[property]
      //     });
      //   }
      // }
      // notDefault.forEach(ctg => {
      //   console.log(ctg.mode, ctg.value);
      //   const res = state.allDiary.filter(
      //     diary => diary[ctg.mode] === ctg.value
      //   );
      //   commit("setCurrentResultFilteredOption", res);
      // });
    }
  }
};

export default diary;
