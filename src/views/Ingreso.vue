<template>
  <div class="ingreso">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  
  <div class="mt-5">
        <IngresoFuncionario msg="Ingreso de Funcionarios"/>
    <!--     <Certificadocom/> -->
  </div>


    
  </div>
</template>

<script>
// @ is an alias to /src
import IngresoFuncionario from '@/components/IngresoFuncionario.vue'

export default {
  name: 'Ingreso',
  components: {
    IngresoFuncionario
  }
}
</script>