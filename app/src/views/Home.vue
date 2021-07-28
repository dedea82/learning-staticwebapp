<template>
  <div class="hello">
    <p>
      For a guide and recipes on how to configure / customize this project,
      <br>check out the <a href="https://github.com/dedea82/learning-staticwebapp" target="_blank" rel="noopener">GitHub project</a>.
    </p>
    <h3>API support with Azure Functions</h3>
    <ul>
      <li>
        <router-link to="/simple-api"> Test simple API (no auth)</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
/* a {
  color: #42b983;
} */
</style>