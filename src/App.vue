<template>
  <div id="app">
    <VNavbar name="MamuroEmail" />
    <EmailsView name="MamuroEmail" />
  </div>

</template>

<script>
import VNavbar from '@/components/V-Navbar.vue'
import EmailsView from '@/views/EmailsView.vue'

export default {
  name: 'App',
  components: {
    EmailsView,
    VNavbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>



<style src="./assets/tailwind.css" />