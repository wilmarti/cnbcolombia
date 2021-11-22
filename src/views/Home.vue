<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  

  <div v-if="userLogged" class="mt-5">
        <cursovirtual  msg="CURSOS VIRTUALES DEL CNB COLOMBIA"/>
       
  </div>
  <div v-else>
    <br/>
     <login/>
  </div> 

    
  </div>
</template>

<script>
// @ is an alias to /src
import cursovirtual from '@/components/cursovirtual.vue'
import login from '@/views/Login.vue'
import auth from "@/auth";

export default {
  name: 'Home',
  components: {
    cursovirtual,
    login    
  },
  views:{
      login
  },
  computed: {
    userLogged() {
      return auth.getUserLogged();
    }
  }
}
</script>
