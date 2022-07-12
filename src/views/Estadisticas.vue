<template>
  <div class="home">

  
    <div v-if="userLogged" class="mt-5">
         <EstadisticasComp msg="Ingreso de Funcionarios"/>
    </div>
    <div v-else>
    <br/>
        <login/>
    </div>

    
  </div>
</template>


  <script>
// @ is an alias to /src
import EstadisticasComp from '@/components/EstadisticasComp.vue'
import login from '@/views/Login.vue'
import auth from "@/auth";

export default {
  name: 'Participante',
  components: {
    EstadisticasComp,
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