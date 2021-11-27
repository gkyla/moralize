import { nanoid } from "nanoid";

const calenderEvent = {
  namespaced: true,
  state: {
    events: [{ title: "event 1", date: "2021-24-11" }],
    currentClickedEvent: null
  },
  getters: {
    getEventLists(state) {
      return state.events;
    }
  },
  mutations: {
    setCurrentClickedEvent(state, event) {
      state.currentClickedEvent = event;
    },
    addLabelEvent(state, event) {
      state.events.push(event);
      console.log(state.events);
    },
    updateLabelEvent(state, { eventIndex, fcEventApi } /* updatedEvent */) {
      console.log("fcEvent frm updateLabelEvent :", fcEventApi);
      state.events[eventIndex] = {
        ...state.events[eventIndex],
        title: fcEventApi.title,
        // date: "",
        start: fcEventApi.startStr,
        end: fcEventApi.endStr
      };
    },
    deleteLabelEvent(state, { eventObj }) {
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
