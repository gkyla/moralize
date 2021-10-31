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
    updateEvent(state, { eventIndex, fcArg } /* updatedEvent */) {
      state.events[eventIndex] = {
        ...state.events[eventIndex],
        title: fcArg.event.title,
        date: "",
        start: fcArg.event.startStr,
        end: fcArg.event.endStr
      };
      console.log(state.events);
      /* TODO :
          Tambahin id untuk setiap event agar bisa di track index nya
        */
    }
  },
  actions: {}
};

export default calenderEvent;
