const calenderEvent = {
  namespaced: true,
  state: {
    events: [
      { id: +new Date(), title: "event 1", date: "2021-10-16" },
      { id: +new Date(), title: "event 2", date: "2021-10-14" }
    ]
  },
  getters: {
    getEventLists(state) {
      return state.events;
    }
  },
  mutations: {
    addEvent(state, event) {
      state.events.push(event);
      console.log(state.events);
    },
    updateEvent(state, event /* updatedEvent */) {
      console.log(event);
      console.log(state.events);

      const index = state.events.findIndex(ev => {
        return ev.id === event.id;
      });
      console.log(index);
      /* TODO :
          Tambahin id untuk setiap event agar bisa di track index nya
        */
    }
  },
  actions: {}
};

export default calenderEvent;
