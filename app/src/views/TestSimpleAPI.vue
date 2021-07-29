<template>
  <div>
    <h3>Test simple API (no auth)</h3>
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "TestSimpleAPI",
  data() {
    return {
      message: "",
    };
  },
  async mounted() {
    const { text } = await (await fetch("/api/messages")).json();
    this.message = text;
  },
};
</script>