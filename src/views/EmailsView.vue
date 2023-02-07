<template>
    <div id="email-view">
        <ErrorAlert class="hidden sticky z-10 mt-2 top-2 w-96 m-auto"
            v-bind:title="messageError.title" v-bind:message="messageError.message"
        />
      <SearchBar v-bind:searchEmails="searchEmails" />
      <EmailList ref="emailList" v-bind:email_query="email_query" />
    </div>
  
  </template>

  <script>
import EmailList from "@/components/EmailList.vue"
import SearchBar from "@/components/V-SearchBar.vue"
import ErrorAlert from "@/components/ErrorAlert.vue"

export default {
  name: 'EmailView',
  components: {
    EmailList,
    SearchBar,
    ErrorAlert
  },
  data(){
    return {
        messageError: {
            title: "",
            message: ""
        },
        email_query: ""
    }
  },
  methods:{
    searchEmails(query, e){
        e.preventDefault()
        
        this.email_query = query
        this.$refs.emailList.getEmailData(query)
    }
  }
}
</script>

<style>
#email-view {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}


.w-96{
    width: 90vw;
    min-width: 90vw;
}

</style>