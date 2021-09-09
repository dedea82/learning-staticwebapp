<template>
  <div>
    <h3>Test authentication and authorization</h3>
    <div>Hello, {{ logged_username }}!</div>
    <div>Your are an administrator? {{ is_user_administrator }}</div>
    <div>Message from API: {{message_from_api}}</div>
    <div><router-link to="/logout">Logout</router-link></div>
  </div>
</template>

<script>
import { authService } from '@/vue.auth.service.js'

export default {
  name: "TestAuthentication",
  data() {
    return {
      logged_username: null,
      is_user_administrator : null,
      message_from_api : null
    };
  },
  async mounted() {
    this.logged_username = await authService.getUserDetails();
    this.is_user_administrator = await authService.isUserInRole('administrator');
    this.message_from_api = (await (await fetch("/api/private")).json()).text;
  },
};
</script>