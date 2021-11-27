import { nanoid } from "nanoid";
import { getUniqueEvent } from "../utils";

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
      const index = state.events.findIndex(_event => {
        return getUniqueEvent(_event, eventObj);
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
