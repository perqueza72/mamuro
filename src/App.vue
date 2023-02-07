<template>
  <div id="app">
    <VNavbar name="MamuroEmail" />
    <SearchBar />
    <EmailList />
  </div>

</template>

<script>
import VNavbar from './components/V-Navbar.vue'
import EmailList from "./components/EmailList.vue"
import SearchBar from "./components/V-SearchBar.vue"

export default {
  name: 'App',
  components: {
    VNavbar,
    EmailList,
    SearchBar
  },
  methods: {
    a() {
      console.log("XD")
      this.msg = "Sexo"
    }
  },
  data() {
    return {
      msg: "XD"
    }
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