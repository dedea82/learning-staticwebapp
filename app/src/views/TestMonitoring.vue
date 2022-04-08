<template>
  <div>
    <h3>Test monitoring and Application Insights</h3>
    <div><button v-on:click="monitor('wait')">Call long API method</button></div>
    <div><button v-on:click="monitor('loglevels')">API log levels</button></div>
    <div><button v-on:click="monitor('ai')">Application Insights (function side)</button></div>
    <div><button v-on:click="fatal()">Unhandled js-exception (Vue)</button> </div>
    <div><button onclick="call_fake_method('pippo')">Unhandled js-exception (javascript)</button> </div>
    <div><button onclick="console.log( [3, 5, 7, 15].find(e => e === 7) );">Exception only in IE 10</button> </div>
    <div><button v-on:click="track()">Local tracking (javascript)</button> </div>
    <div><br />{{ message }}</div>
  </div>
</template>

<script>
import appInsights from "@/vue.appinsights.js";

export default {
  name: "TestMonitoring",
  data() {
    return {
      message: null,
    };
  },
  methods: {
    async monitor(what) {
      this.message = null;
      var request = "/api/monitoring/" + what;
      var response = await (await fetch(request)).status;
      this.message = "called " + request + " -> status: " + response;
    },
    fatal() {
      this.message = null;
      var not_real_undefined = undefined;
      this.message = "trying to reading undefined: " + not_real_undefined.text; // unhandled exception;
    },
    track() {
      appInsights.trackEvent({ name: "LocalTracking" });
      appInsights.trackEvent({
        name: "LocalTrackingWithProperty",
        properties: { myValue: "BOH" },
      });
      appInsights.trackMetric({
        name: "LocalMetric",
        average: Math.random() * 10,
      });
    },
  },
};
</script>