<template>
  <div id="event" class="container-page bg-white bg-opacity-90">
    <h1 class="text-4xl">Calendar Event</h1>
    <FullCalendar
      :options="calendarOptions"
      @resize="handleResize"
      @drop="handleDrop"
      @drag="handleDrag"
    />
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
        eventResize: this.handleResize,
        eventDrop: this.handleDrop,
        events: this.$store.getters["calenderEvent/getEventLists"],
      },
    };
  },
  methods: {
    handleDrop(arg) {
      console.log("drop handler :", arg);
      this.updateEvent(arg);
    },
    handleResize(arg) {
      console.log("resize handler :", arg);
      this.updateEvent(arg);
    },
    handleDrag(arg) {
      console.log("resize handler :", arg);
    },
    updateEvent(arg) {
      this.$store.commit("calenderEvent/updateEvent", {
        title: arg.event.title,
        start: arg.event.startStr,
        end: arg.event.endStr,
      });
    },
    handleSelect(arg) {
      const title = prompt("title");

      console.log(arg);
      if (!title) {
        return;
      }
      this.$store.commit("calenderEvent/addEvent", {
        title,
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
