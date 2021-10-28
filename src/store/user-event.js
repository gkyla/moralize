const calenderEvent = {
   namespaced: true,
   state: {
      events: [
         { id: +Date(), title: 'event 1', date: '2021-10-16' },
         { id: +Date(), title: 'event 2', date: '2021-10-14' },
      ],
   },
   getters: {
      getEventLists(state) {
         return state.events;
      },
   },
   mutations: {
      addEvent(state, event) {
         state.events.push(event);
      },
      updateEvent(state, event /* updatedEvent */) {
         //  const index = state.events.findIndex((ev) => {
         //     return ev.id === event.id;
         //  });
         //  console.log(index);
         /* TODO :
          Tambahin id untuk setiap event agar bisa di track index nya
        */
      },
   },
   actions: {},
};

export default calenderEvent;
