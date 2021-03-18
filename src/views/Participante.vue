<template>
  <div class="home">

  
    <div v-if="userLogged" class="mt-5">
        <cursovirtual msg="INSCRIPCIÓN DE PARTICIPANTES A CURSOS VIRTUALES DEL CNB"/>
    </div>
    <div v-else>
    <br/>
        <login/>
    </div>

    
  </div>
</template>

<script>
// @ is an alias to /src
import cursovirtual from '@/components/Participantecom.vue'
import login from '@/views/Login.vue'
import auth from "@/auth";

export default {
  name: 'Participante',
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