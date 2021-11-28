const display = {
  namespaced: true,
  state: {
    modalEditShowed: false,
    modalPreferencesShowed: false,
    modalLabelShowed: false,
    modalAgendaShowed: false,
    modalStatus: {} /* "{type: modal type, status: boolean}" */
  },
  mutations: {
    setModalStatus(state, { type, status, close }) {
      state.modalStatus = { type, status };

      /* in case if we need to close some modal while
       opening multiple modal in the same time  */
      if (close) {
        if (close === "edit") state.modalEditShowed = false;
        if (close === "preferences") state.modalPreferencesShowed = false;
        if (close === "label") state.modalLabelShowed = false;
        if (close === "agenda") state.modalAgendaShowed = false;
        if (close === "all") {
          /* do something when close is "all"  */
        }
      }

      if (state.modalStatus.type && status) {
        switch (state.modalStatus.type) {
          case "edit": {
            state.modalEditShowed = status;
            break;
          }
          case "preferences": {
            state.modalPreferencesShowed = status;
            break;
          }
          case "label": {
            state.modalLabelShowed = status;
            break;
          }
          case "agenda": {
            state.modalAgendaShowed = status;
            break;
          }
          default:
            console.log(
              "the type of your arg is not available bro 💀💀💀 your type is :",
              state.modalStatus.type
            );
        }
      }
    }
  },
  getters: {},
  actions: {}
};

export default display;
