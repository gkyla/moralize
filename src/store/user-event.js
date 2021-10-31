const calenderEvent = {
  namespaced: true,
  state: {
    events: [
      {
        id: +new Date(),
        title: "event 1",
        start: "2021-10-16",
        end: "2021-10-17"
      },
      {
        id: +new Date(),
        title: "event 2",
        start: "2021-10-14",
        end: "2021-10-15"
      }
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
    },
    deleteEvent(state, { eventObj }) {
      console.log(eventObj.event.title);
      const index = state.events.findIndex(_event => {
        return (
          _event.id == eventObj.event.id && _event.title == eventObj.event.title
        );
      });

      if (index !== -1) {
        /* Prevent deleting the last item from the array of events, 
          if we splice the array with the index of -1 then it will be deleting
          the last item of the array

          read mdn : Array.splice()
        */
        state.events.splice(index, 1);
      }
    }
  },
  actions: {}
};

export default calenderEvent;
