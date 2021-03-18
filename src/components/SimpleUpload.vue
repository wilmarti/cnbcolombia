<template>
    <form @submit="sendFile" enctype="multipart/form-data">
     <div class="form-group bg-dark">
                <div>
                    <!-- class="d-flex flex-row"  para alinear a la izquierda-->
                    <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px',backgroubd: color }">
                    <label  for="file" class="label">Cargar Archivo de participantes</label>
                    </div>
                    <!-- v-modal="archivo" -->
                    <input class="form-control-file" id="carga"  v-bind:style="{ color: activeColor}"
                    type = "file" 
                    ref= "file"
                    @change="selectFile"/>
                <br/>
                <div class= "file d-flex flex-row">
                    <div class="p-2"><b-button size="sm" type="submit" class="btn btn-primary">Cargar Archivo</b-button></div>
                </div>    
        </div> 

     </div>
    
    </form>  

</template>




<script>
import axios from 'axios'
import participantecom from './Participantecom.vue'

export default {
    name: "SimpleUpload",
    components:{participantecom},

    data(){
        return {
            file: "",
            message:"",
            error: false,
            archivo: "",
            activeColor:'white',
            fontSize:20,
            color:'black'
        }
    },

    methods:{

    /*************Methodo que llama la API para llenar array de cursos virtuales del CNB */
    getParticipantes(){
      axios.get('https://cnbcolombia.com/node/ApiACNB/participantes').then (response =>{
       this.participanteCurso = response.data        
      })
      .catch (e => console.log(e))
    },
    /********************************************************************************** */
        selectFile(){            
            this.file = this.$refs.file.files[0]; 
            this.error = false;
            this.message = "";                  
        },

        async sendFile(){   
            console.log('llego a enviar')        
            const formData = new FormData();
            var respuesta;
            formData.append('file', this.file);
        try{
            //respuesta = await axios.post('http://localhost:3000/api/participantes/BulkParticipante',formData);
            respuesta = await axios.post('https://cnbcolombia.com/node/ApiACNB/participantes/BulkParticipante',formData);
            if(respuesta.data != ""){            
               console.log("respuesta",respuesta);
               alert(respuesta.data)
            }else{
                this.getParticipantes();
                alert("ARCHIVO CARGADO CON EXITO")                 

            }
            }catch(error){
                console.log("respuesta",error);
                this.message = "Algo salío mal";
                this.error = true;
        }
            
        }
    }
}
</script>