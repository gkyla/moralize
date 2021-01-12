// import moralizeDb from "../data/idb.js";
// import CONFIG from "../settings/config.js";

// const pin = {
//   namespaced: true,
//   state: {
//     userPined: []
//   },
//   mutations: {
//     updateAllUserPinedItems(state, data) {
//       state.userPined = data;
//     },
//     updateUserPinedItem(state, data) {
//       state.userPined.push(data);
//     }
//   },
//   actions: {
//     async getAllUserPinedItems({ commit }) {
//       const val = await moralizeDb.getAllItem(CONFIG.DB_KEY_PINED);
//       commit("updateAllUserPinedItems", val);
//     },

//     async getUserPinedItem({ commit, dispatch }, id) {
//       const theItem = await moralizeDb.getItem(CONFIG.DB_KEY_DIARY, id);
//       await moralizeDb.putItem(CONFIG.DB_KEY_PINED, theItem);
//       commit("updateUserPinedItem", theItem);
//       dispatch("getAllUserPinedItems");
//     },

//     async removeUserPinedItem(ctx, id) {
//       const index = ctx.state.userPined.findIndex(el => el.id === id);
//       ctx.state.userPined.splice(index, 1);
//       await moralizeDb.deleteItem(CONFIG.DB_KEY_PINED, id);
//     }
//   }
// };

// export default pin;
