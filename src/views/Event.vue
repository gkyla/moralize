<template>
  <div id="event" class="container-page bg-white bg-opacity-90">
    <h1 class="text-4xl">Calendar Event</h1>
    <FullCalendar :options="calendarOptions" />

    <teleport to="#modal">
      <transition-group name="fade" mode="out-in">
        <event-edit v-if="modalEditShowed"></event-edit>
        <event-preferences v-if="modalPreferencesShowed"></event-preferences>
        <event-label v-if="modalLabelShowed"></event-label>
      </transition-group>
    </teleport>
  </div>
</template>

<script>
import EventEdit from "../components/EventCalenders/EventEdit.vue";
import EventPreferences from "../components/EventCalenders/EventPreferences.vue";
import EventLabel from "../components/EventCalenders/EventLabel.vue";

import "@fullcalendar/core/vdom"; // solves problem with Vite
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import scrollGridPlugin from "@fullcalendar/scrollgrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

import { mapState } from "vuex";

export default {
  components: {
    FullCalendar,
    EventEdit,
    EventPreferences,
    EventLabel,
  },
  data() {
    return {
      currentClickedEvent: null,
      preferencesModalIsOpened: false,
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
  computed: {
    ...mapState("display", [
      "modalEditShowed",
      "modalPreferencesShowed",
      "modalAgendaShowed",
      "modalLabelShowed",
    ]),
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
      // this.currentClickedEvent = fcEventObj.event;
      this.$store.commit(
        "calenderEvent/setCurrentClickedEvent",
        fcEventObj.event
      );

      this.$store.commit("display/setModalStatus", {
        type: "edit",
        status: true,
      });
    },
    modalStatus(event) {
      console.log("modalStatus", event);
      this.modalIsOpened = event;
    },
    updateEvent(fcArg) {
      /* get EventApi only */
      const fcEventApi = fcArg.event;
      const eventIndex = this.$store.state.calenderEvent.events.findIndex(
        (_event) => {
          return (
            _event.id == fcEventApi.id && _event.title == fcEventApi.title
          ); /* not checking the data type */
        }
      );

      if (eventIndex !== -1) {
        this.$store.commit("calenderEvent/updateLabelEvent", {
          eventIndex,
          fcEventApi,
        });
      }
    },
    handleSelect(arg) {
      this.$store.commit("calenderEvent/setCurrentClickedEvent", arg);

      this.$store.commit("display/setModalStatus", {
        type: "preferences",
        status: true,
      });

      // muncul pas pengen nambah event
      // this.currentClickedEvent = {
      //   id: nanoid(),
      //   title: "wow",
      //   start: arg.startStr,
      //   end: arg.endStr,
      // };

      // this.$store.commit("calenderEvent/addEvent", this.currentClickedEvent);
      // this.modalIsOpened = true;
    },
  },
  mounted() {
    console.log(this.eventList);
  },
};
</script>

<style></style>
