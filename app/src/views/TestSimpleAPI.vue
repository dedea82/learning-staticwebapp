<template>
  <div>
    <h3>Test simple API (no auth)</h3>
    <div v-for="msg in messages" :key="msg">{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: "TestSimpleAPI",
  data() {
    return {
      messages: [],
    };
  },
  async mounted() {
    this.messages = [
      (await (await fetch("/api/messages")).json()).text,
      (await (await fetch("/api/messages/Hi?name=John")).json()).text,
      (
        await (
          await fetch("/api/messages/Posted", {
            method: "POST",
            body: JSON.stringify({ name: "Bob" }),
          })
        ).json()
      ).text,
    ];

    // const { text } = await (await fetch("/api/messages")).json();
    // this.message = text;
  },
};
</script>