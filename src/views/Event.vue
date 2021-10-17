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

export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: "dayGridMonth",
        dateClick: this.handleDateClick,
        selectable: true,
        selectMirror: true,
      },
    };
  },
  methods: {
    handleDateClick(arg) {
      console.log(arg);
      alert("date test" + arg.dateStr);
    },
  },
};
</script>

<style></style>
