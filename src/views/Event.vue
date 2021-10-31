<template>
  <div id="event" class="container-page bg-white bg-opacity-90">
    <h1 class="text-4xl">Calendar Event</h1>
    <FullCalendar :options="calendarOptions" />
  </div>
</template>

<script>
import "@fullcalendar/core/vdom"; // solves problem with Vite
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import scrollGridPlugin from "@fullcalendar/scrollgrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },
  data() {
    return {
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
      console.log("resize handler :", fcArg);
    },
    updateEvent(fcArg) {
      const eventIndex = this.$store.state.calenderEvent.events.findIndex(
        (_event) => {
          return (
            _event.id == fcArg.event.id && _event.title == fcArg.event.title
          ); /* not checking the data type */
        }
      );

      this.$store.commit("calenderEvent/updateEvent", { eventIndex, fcArg });
    },
    handleSelect(arg) {
      const title = prompt("title");

      console.log(arg);
      if (!title) {
        return;
      }
      this.$store.commit("calenderEvent/addEvent", {
        title,
        id: +new Date(),
        start: arg.startStr,
        end: arg.endStr,
      });
    },
  },
  computed: {},
  mounted() {
    console.log(this.eventList);
  },
};
</script>

<style></style>
