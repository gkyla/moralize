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
    updateLabelHandlerEvent(state, fcEvent /* updatedEvent */) {
      // be able to such as resize,drage & drop handler
      console.log("fcEvent frm updateLabelEvent :", fcEvent);
      const eventIndex = state.events.findIndex(_event => {
        return getUniqueEvent(_event, fcEvent);
      });

      if (eventIndex) {
        state.events[eventIndex] = {
          ...state.events[eventIndex],
          title: fcEvent.title,
          start: fcEvent.startStr,
          end: fcEvent.endStr
          // date: "",
        };
      }
    },
    updateLabelEventWithNewTitleDate(state, { oldValue, newValue }) {
      console.log("fcEvent frm updateLabelEvent :", oldValue);
      const eventIndex = state.events.findIndex(_event => {
        return getUniqueEvent(_event, oldValue);
      });

      if (eventIndex) {
        console.log("updateLabelEventWithNewDate");
        state.events[eventIndex] = {
          ...state.events[eventIndex],
          ...newValue
        };
      }
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
