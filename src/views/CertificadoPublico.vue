<template>
  <div >
        <div>
        <b-jumbotron>
            <template v-slot:header><h2>Para descargar su certificado</h2> </template>

            <template v-slot:lead>
                Debe diligenciar su tipo y número de identificación, Esta opción le permite obtener una lista de los certificados que tiene disponibles para descarga.
                <br>
                Utilice el botón Consultar que se halla en la sección correspondiente para obtener el certificado.            
                </template>
                <hr class="my-4">                
                Importante! Para visualizar los certificados se requiere la herramienta Adobe Reader
                
            

        <!--   <b-button variant="primary" href="#">Do Something</b-button>
            <b-button variant="success" href="#">Do Something Else</b-button> -->
        </b-jumbotron>
        </div>



        <CertificadoPublicocom/>
  </div>
</template>


<script>

import CertificadoPublicocom from '@/components/CertificadoPublicocom.vue'

export default {
    name: 'CertificadoPublico',
    components:{
        CertificadoPublicocom
    },
    data(){
            return {
/*                     participante:[
                        { nombre:'JOHN WILSON MARTINEZ GUTIERREZ', nota:'5' , curso: '1', tipoid:'CC', nuroid:'79908341' },
                        { nombre:'Kenneth Martinez', nota:'4' , curso: '1', tipoid:'CC', nuroid:'79908342' },
                        { nombre:'Kiara Martinez', nota:'5' , curso: '2', tipoid:'CC', nuroid:'79908343' },
                        { nombre:'Jose Martinez', nota:'1' , curso: '1', tipoid:'CC', nuroid:'79908344' },
                        { nombre:'Carlos Martinez', nota:'2' , curso: '2', tipoid:'CC', nuroid:'79908345' }
                        ] */
                    }

           },
    /* methods:{
        home(){
            this.$router.push('/home')
        } 
    }*/
        
}
</script>