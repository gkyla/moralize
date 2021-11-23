import { nanoid } from "nanoid";

const calenderEvent = {
  namespaced: true,
  state: {
    events: []
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
        title: fcArg.title,
        date: "",
        start: fcArg.startStr,
        end: fcArg.endStr
      };
      console.log(state.events);
    },
    deleteEvent(state, { eventObj }) {
      console.log(eventObj.title);
      const index = state.events.findIndex(_event => {
        return _event.id == eventObj.id && _event.title == eventObj.title;
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
