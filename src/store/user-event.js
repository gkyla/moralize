const calenderEvent = {
  namespaced: true,
  state: {
    events: [
      { title: "event 1", date: "2021-10-16" },
      { title: "event 2", date: "2021-10-14" }
    ]
  },
  getters: {
    getEventLists(state) {
      return state.events;
    }
  },
  mutations: {
    addEvent(state, data) {
      state.events.push(data);
    }
  },
  actions: {}
};

export default calenderEvent;
