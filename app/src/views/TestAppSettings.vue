<template>
  <div>
    <h3>Test App Settings</h3>
    <div v-for="s in settings" :key="s.key"><b><small>{{ s.key }}:</small></b>-> [{{s.value}}]</div>
  </div>
</template>

<script>
export default {
  name: "TestAppSettings",
  data() {
    return {
      settings: [],
    };
  },
  async mounted() {
    const result = [];

    result.push({
      key: "process.env.VUE_APP_MYPROPERTY",
      value: process.env.VUE_APP_MYPROPERTY,
    });
    result.push({
      key: "process.env.VUE_APP_MYPROPERTY2",
      value: process.env.VUE_APP_MYPROPERTY2,
    });
    result.push({
      key: "process.env.MYPROPERTY",
      value: process.env.MYPROPERTY,
    });
    result.push({
      key: "process.env.VUE_APP_VERY_SECRET_GITHUB_VALUE (from GitHub actions)",
      value: process.env.VUE_APP_VERY_SECRET_GITHUB_VALUE,
    });
    result.push({
      key: "process.env.VUE_APP_myvarname (from GitHub actions)",
      value: process.env.VUE_APP_myvarname,
    });
    result.push({
      key: "process.env.API_MYPROPERTY (from API)",
      value: await (await fetch("/api/settings/my")).text(),
    });
    this.settings = result;
  },
};
</script>