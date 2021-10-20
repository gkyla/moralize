const calenderEvent = {
  namespaced: true,
  state: {
    event: [
      { title: "event 1", date: "2021-10-16" },
      { title: "event 2", date: "2021-10-14" }
    ]
  },
  getters: {
    getEventLists(state) {
      return state.event;
    }
  },
  mutations: {
    addEvent(state, data) {
      state.event.push(data);
    }
  },
  actions: {}
};

export default calenderEvent;
