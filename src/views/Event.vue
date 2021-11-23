<template>
  <div id="event" class="container-page bg-white bg-opacity-90">
    <h1 class="text-4xl">Calendar Event</h1>
    <FullCalendar :options="calendarOptions" />

    <teleport to="#modal">
      <transition name="fade" mode="out-in">
        <event-calender-modal-handler
          v-if="modalIsOpened"
          :eventObj="currentClickedEvent"
          @modalStatus="modalStatus"
        >
        </event-calender-modal-handler>
      </transition>
    </teleport>
  </div>
</template>

<script>
import EventCalenderModalHandler from "../components/EventCalendarModalHandler.vue";

import "@fullcalendar/core/vdom"; // solves problem with Vite
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import scrollGridPlugin from "@fullcalendar/scrollgrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

import { nanoid } from "nanoid";
import { nextTick } from "@vue/runtime-core";
export default {
  components: {
    FullCalendar,
    EventCalenderModalHandler,
  },
  data() {
    return {
      modalIsOpened: false,
      currentClickedEvent: null,
      calendarOptions: {
        plugins: [
          dayGridPlugin,
          interactionPlugin,
          scrollGridPlugin,
          timeGridPlugin,
          listPlugin,
        ],
        initialView: "dayGridMonth",
        selectable: true,
        selectMirror: true,
        select: this.handleSelect,
        editable: true,
        eventResizableFromStart: true,
        eventResize: this.handleResize,
        eventDrop: this.handleDrop,
        eventClick: this.handleClick,
        events: this.$store.getters["calenderEvent/getEventLists"],
      },
    };
  },
  methods: {
    handleDrop(fcArg) {
      console.log("drop handler :", fcArg);
      this.updateEvent(fcArg);
    },
    handleResize(fcArg) {
      console.log("resize handler :", fcArg);
      this.updateEvent(fcArg);
    },
    handleDrag(fcArg) {
      console.log("drag handler :", fcArg);
    },
    handleClick(fcEventObj) {
      console.log("it is clicked ?", fcEventObj);
      // im only care with the EventApi 💀
      this.currentClickedEvent = fcEventObj.event;

      console.log(this.currentClickedEvent);
      this.modalIsOpened = true;
    },
    modalStatus(event) {
      console.log("modalStatus", event);
      this.modalIsOpened = event;
    },
    updateEvent(fcArg) {
      console.log("test", fcArg);
      const eventIndex = this.$store.state.calenderEvent.events.findIndex(
        (_event) => {
          return (
            _event.id == fcArg.id && _event.title == fcArg.title
          ); /* not checking the data type */
        }
      );

      if (eventIndex !== -1) {
        this.$store.commit("calenderEvent/updateEvent", { eventIndex, fcArg });
      }
    },
    handleSelect(arg) {
      // muncul pas pengen nambah event
      this.currentClickedEvent = {
        id: nanoid(),
        title: "wow",
        start: arg.startStr,
        end: arg.endStr,
      };

      this.$store.commit("calenderEvent/addEvent", this.currentClickedEvent);
      this.modalIsOpened = true;
    },
  },
  mounted() {
    console.log(this.eventList);
  },
};
</script>

<style></style>
