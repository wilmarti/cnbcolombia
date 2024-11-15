<template>

  <div class="mt-0">
    <h5 style="color:#08088A">{{ msg }}</h5>

      <b-container>     
      <form>
        <b-row hover class="m-2">
          <b-col>
              <!-- <b-form-input type="number" v-model="id" placeholder="Id"> </b-form-input>
                <small>Solo se aceptan números</small> -->
              <b-form-input type="text" v-model="NuevoCurso"  placeholder="Aquí puede ingresar nuevo evento" ></b-form-input>
            </b-col>
              <b-col class="d-flex justify-content-start">
                 <b-button variant="outline-success" v-on:click= "Agregarcurso" >Ingresar Evento</b-button>
              </b-col>
        </b-row>

      </form>


<div class="box" > 

      <vue-scrolling-table bordered
							:scroll-horizontal="scrollHorizontal"
							:scroll-vertical="scrollVertical"
							:sync-header-scroll="syncHeaderScroll"
							:sync-footer-scroll="syncFooterScroll"
							:include-footer="includeFooter"
							:dead-area-color="deadAreaColor"
							:class="{ freezeFirstColumn:freezeFirstColumn }">
      <!-- head -->
      <template slot="thead">
        <tr>
          <th v-for="col in columns" 
            :class="col.cssClasses"
            :key="col.id">{{ col.title }}</th>
         <th class="action">Acciones</th> 
        </tr>
      </template>

      <!-- body -->
      <template slot="tbody">
          <tr  v-for="item in cursovirtual" :key='item.value'>
          <td v-for="col in columns"
            :class="col.cssClasses"
            :key="col.id">{{ item[col.id] }}  
          </td>
            <b-button class= "m-1" size="sm" variant="outline-success" v-b-modal.modalEdicion @click="EditarCurso(item.value,item.text,item.ESTADO,item.NumeroHoras,item.TipoDiploma)">Editar</b-button>          
            <b-button class="m-1" size="sm" variant="outline-danger" @click="EliminarCurso(item.value)" >Eliminar</b-button>

        </tr>
       <!--  </mdb-tbl-body> -->
      </template>

      <br/><br/><br/>

    <!-- footer 
    <template slot="tfoot">
      <tr><th :colspan="columns.length">My footer text</th></tr>
    </template>-->
  
</vue-scrolling-table>


</div> 

<!-- 

    <mdb-scrollbar height="200px">
      <mdb-tbl  responsive fixed hover bordered >
        <mdb-tbl-head color="light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Descripción del curso</th>
            <th scope="col">Estado</th>
            <th scope="col" colspan="2">Operaciones</th>
          </tr>
        </mdb-tbl-head>
        <mdb-tbl-body v-for="(item,index) of cursovirtual" :key='index'>
          <tr>
            <td>{{item.value}}</td>
            <td>{{item.text}}</td>
            <td>{{item.ESTADO}}</td>

            <td>
               <b-button  pill size="sm" variant="outline-success" v-b-modal.modalEdicion @click="EditarCurso(item.value,item.text,item.ESTADO)">Editar</b-button> 
            </td> <td> 
               <b-button  pill size="sm" variant="outline-danger" @click="EliminarCurso(item.value)" >Eliminar</b-button>
            </td>                     
          </tr>

        </mdb-tbl-body>
      </mdb-tbl>
    </mdb-scrollbar> -->


    <div>


  </div>     




    <div id="modal">
    <b-modal
      id="modalEdicion"
      ref="modal"
      title="Formulario de Edición"
      valor= item.Id_Curso
      size="xl"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
    <!-- Hello {{IdEdicion}} -->
    <form ref="form" @submit.stop.prevent="handleSubmit">
      <main class="row">
        <div class="row g-2">
        <b-form-group class="col-sm m-2"
          :state="nameState"
          label="Descripción del Evento"
          label-for="name-input"
          invalid-feedback="Name is required"
        >
          <b-form-input
            id="name-input"
            v-model="nameEditar"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>

        <!-- seleccion de curso -->
        <b-form-group class="col-sm m-2"
          :state="SeleccionCursoEstado"
          label="Estado Curso:"
          label-for="estado"
          invalid-feedback="Debe seleccionar el estado del curso"
        >

        <b-form-select
        :state="SeleccionCursoEstado" 
        v-model="SelectEstado" 
        id="EstadonCurso"
        label="Seleccione Estado:" 
        descripcion="estado"
        :options="options" 
        required
        >
          <template v-slot:first>
              <b-form-select-option :value="null" disabled>-- Por favor seleccione un estado --</b-form-select-option>
          </template>  
        </b-form-select>
        </b-form-group>
        </div>
        <!--Diploma curso-->
        <div class="row g-2">
        <b-form-group class="col-sm m-2"         
          label="Diploma Curso:"
          label-for="diploma"
          invalid-feedback="Debe seleccionar diploma del curso"
        >

        <b-form-select         
        v-model="SelectDiploma" 
        id="EstadonDiploma"
        label="Seleccione Diploma:" 
        descripcion="diploma"
        :options="optionsDiploma" 
        required
        >
          <template v-slot:first>
              <b-form-select-option :value="null" disabled>-- Por favor seleccione un diploma --</b-form-select-option>
          </template>  
        </b-form-select>
        </b-form-group>

        <!--Elegir archivo-->
        <b-form-group class="col-sm m-2"         
          label="Cargar Imagen:"
          label-for="elegirArchivo"          
        >

        <b-form-file 
        id="elegirArchivo"
        label="Seleccione Diploma:" 
        descripcion="Cargue una imagen de diploma"
        accept="image/*"
        :state="Boolean"
        @change="cargaImagen" 
        required
        >
          <template v-slot:first>
              <b-form-select-option :value="null" disabled>-- Por favor seleccione un diploma --</b-form-select-option>
          </template>  
        </b-form-file>
        </b-form-group>

      </div>
        <!--Horas del curso-->
        <div class="row g-2">
        <b-form-group class="col-sm m-2"
          :state="nameHora"
          label="Horas del Curso"
          label-for="name-input"
          invalid-feedback="Name is required"
        >
          <b-form-input
            id="name-input"
            v-model="nameEditarHoras"
            :state="nameHora"
            required
          ></b-form-input>
        </b-form-group>

        <!-- Selección de texto a configurar-->
        <b-form-group class="col-sm m-2"
        id="confiText"         
          label="Seleccione Texto a configurar:"
          label-for="inputconfiText"
          
        >

        <b-form-select         
        v-model="SelectedText" 
        id="inputconfiText"
        :options="optionConfiText" 
        required
        >
          <template v-slot:first>
              <b-form-select-option :value="null" disabled>-- Por favor seleccione un diploma --</b-form-select-option>
          </template>  
        </b-form-select>
        </b-form-group>

      </div>
      
      

<!--    <label class="mr-sm-2" for="inline-form-custom-select-pref">Tipo Diploma</label>
     <b-form-select
      id="inline-form-custom-select-pref"
      class="mb-2 mr-sm-2 mb-sm-0"
      :options="optionsDiploma"      
      :value="null"
    ></b-form-select>
    
       <b-form-input
            id="inline-form-input-name"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Texto 1">
      </b-form-input>
     <b-form-input
            id="inline-form-input-name"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Tamaño1">
      </b-form-input>
      <b-form-input
            id="inline-form-input-name"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Color1">
      </b-form-input>
      <b-form-input
            id="inline-form-input-name"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Posicion1">
      </b-form-input>      
</b-form> -->


        

      </main>
      </form>
    </b-modal>
    </div>

    <br/>
    <br/>
    <br/>
        

    </b-container>



  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'  
import axios from 'axios'
import { mdbScrollbar,mdbTbl, mdbTblHead, mdbTblBody } from 'mdbvue';
import VueScrollingTable from "vue-scrolling-table"
export const RUTA_SERVIDOR = process.env.VUE_APP_RUTA_API;


const $ = require('jquery')

export default {
  name: 'cursovirtual',
  components: {
      mdbTbl,
      mdbTblHead,
      mdbTblBody,
      mdbScrollbar,
      VueScrollingTable
    },
  data(){
      return {
      //caracteristicas del scroll
      scrollVertical: true,
			scrollHorizontal: true,
			syncHeaderScroll: true,
			syncFooterScroll: true,
			includeFooter: true,
			deadAreaColor: "white",
			maxRows: 100,
      freezeFirstColumn: false,
      //
        id:'',
        NuevoCurso:'',
        errors: [],
        name: null,
        age: null,
        movie: null,
        cursovirtual: null,
        ListDiplomas:null,
        nameState: null,
        submittedNames: [],
        IdEdicion: '',
        nameEditar:'',
        nameEditarHoras:'',
        valid:false,
        options: [
          { value: null, text: 'Por favor seleccione una opción' },
          { value: '1', text: 'ACTIVO' },
          { value: '0', text: 'INACTIVO' }
        ],  
        optionsDiploma:[],
/*         optionsDiploma:[
          { value: null, text: 'Por favor seleccione un diploma' },
          { value: '1', text: 'NORMAL' },
          { value: '2', text: 'HOMIL' },
          { value: '3', text: 'TOMA MUESTRAS DE CITOLOGIA' },
          { value: '4', text: 'CONGRESO CLAHT' }           
        ], */

        SeleccionCursoEstado: null,
        SeleccionDiploma:null,
        SelectEstado:'',
        SelectDiploma:'',
        columns: [
                  { id: "value", title: "ID", cssClasses: "w3" },
                  { id: "text", title: "Descripción del Evento", cssClasses: "w4" },
                  { id: "ESTADO", title: "Estado", cssClasses: "NroId" },
                  { id: "NumeroHoras", title: "No. Horas", cssClasses: "NroId" },
                  { id: "TipoDiploma", title: "Tipo Diploma", cssClasses: "NroId" }
                 ],
        nameHora:null
      }
  },  
  /***************Se ejecuta cuando el componnete se monte */
  mounted(){
      //process.env.ApiUrl= "https://cnbcolombia.com/node/ApiACNB//api/" 
      //console.log("montaje",env.ApiUrl)
      this.getCursos();
      this.getDiplomas();
  },

   methods:{

    resetModal() {
        this.nameState = null
        this.SeleccionCursoEstado = null
        this.nameHora = null
        this.SeleccionDiploma = null

     },  
     
     getDiplomas(){
      axios.get(process.env.VUE_APP_API_URL+"/ListaDiploma").then (response =>{
        this.ListDiplomas = response.data
        this.optionsDiploma = response.data
        console.log("ListDiplomas",response.data)
      })
      .catch (e => console.log("error",e))     
     },

    /*************Methodo que llama la API para llenar array de cursos virtuales del CNB */
    getCursos(){
      axios.get(process.env.VUE_APP_API_URL).then (response =>{
        this.cursovirtual = response.data
        //console.log("cursos",response.data)
      })
      .catch (e => console.log("error",e))

    },
    /*************Methodo que llamar a la API utilizado para eliminar el curso seleccionado */
    AñadirCursos(NuevoCurso){
      axios.post(process.env.VUE_APP_API_URL,{NuevoCurso}).then (response =>{
          
          //console.log(response)

          if(response.data.NuevoCurso)
          {
            alert("Registro insertado con éxito");
            this.getCursos(); 
          }else{
            alert("Error al tratar de insertar el registro, al parecer ya existe");
          }

      })
      .catch (e => function(error){

      })      
    },   

   
    Agregarcurso()
    {  
         if(this.NuevoCurso.length > 3 )
          {   
              this.AñadirCursos(this.NuevoCurso);
              this.getCursos();                    
              this.NuevoCurso='';                        
          }
          else {
          alert("La descripción del curso debe tener mas de tres letras" )
          }
    },

    EditarCurso (index,text,estado,Horas,diploma)
    { 

      //console.log("este es el diploma:", diploma)
      //se limpia el formulario modal
      this.resetModal();

        this.IdEdicion = index      
        this.nameEditar = text
        this.nameEditarHoras = Horas
        this.SeleccionDiploma= diploma

        if(estado =="ACTIVO"){
          this.SelectEstado = 1
        }else{
          this.SelectEstado = 0
        }

        

/*       this.IdEdicion = index
      axios.get(`https://cnbcolombia.com/node/ApiACNB//api/cursos/${index}`).then (response =>{
        this.nameEditar = response.data[0].NombreCurso
        this.SelectEstado = response.data[0].Estado
        console.log("respuesta",response)
      })
      .catch (e => console.log(e)) */


    },

    EliminarCurso(idDelete)
    {   

      const strMensaje = 'Está seguro de eliminar el Registro?'

            if (confirm(strMensaje)){
                axios.delete(`https://cnbcolombia.com/node/ApiACNB/cursos/${idDelete}`).then (response =>{

                //console.log(response);
                if(response.data.ok)
                {
                  alert("Registro eliminado con éxito");
                  this.getCursos(); 
                }else{
                  alert("Error al tratar de eliminar el registro");
                } 
                })
                .catch (e => console.log(e)) 
            }
                
            else{
                return false;
            }
    },

      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid
        this.SeleccionCursoEstado = valid 
        this.SeleccionDiploma = valid
        this.valid = valid

        return valid
      },
      resetModal() {
        this.name = ''
        this.nameState = null
      },


      handleOk(bvModalEvt) {
      // se realiza la edicion del curso
      const DesEditar = this.nameEditar
      const EstadoEditar = this.SelectEstado
      const HorasEditar = this.nameEditarHoras
      const TipoDiploma = this.SelectDiploma

        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()

        if (this.valid){ 

            axios.put(`https://cnbcolombia.com/node/ApiACNB/cursos/${this.IdEdicion}`,{DesEditar,EstadoEditar,HorasEditar,TipoDiploma}).then (response =>{
            if(response.data.ok)
            {
              alert("Registro editado con éxito");
              this.getCursos(); 
             
            }else{
              //console.log("error edicion",response)
              alert("Error al tratar de editar el registro");
            } 
            })
            .catch (e => console.log("esta errado:",e)) 

        }


      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        // Push the name to submitted names
        this.submittedNames.push(this.name)
        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('modalEdicion')
        })
      },    

  },
      computed:{
        ValidarInputNumerico(){
          return this.id.text = '' ? false : true
        },
        ...mapState(['participante','curso']),
        listarcurso: function() {
            //return this.participante.filter((item) => item.nota > 4);
            return this.curso.filter((item) => item.value != null);
        },


        },
    props: {
    msg: String
  }
}
</script>

<style>

table.scrolling .w3 {
	width: 4.5em;
	min-width: 4.5em;
	max-width: 4.5em;
  height:2em; 
}
table.scrolling .w4 {
	width: 43em;
	min-width: 43em;
	max-width: 43em;
  height:2em; 
}
table.scrolling .NroId {
	width: 6em;
	min-width: 6em;
	max-width: 6em;
}
table.scrolling .nombres {
	width: 9em;
	min-width: 9em;
	max-width: 9em;
}
table.scrolling .action {
	width: 12em;
	min-width: 12em;
	max-width: 12em;
}


table.scrolling .botones {
column-span: 3;
}
table.scrolling tfoot tr th {
	width: 130em;
	min-width: 130em;
	max-width: 130em;
}
table.freezeFirstColumn thead tr,
table.freezeFirstColumn tbody tr {
	display: block;
	width: min-content;
}
table.freezeFirstColumn thead td:first-child,
table.freezeFirstColumn tbody td:first-child,
table.freezeFirstColumn thead th:first-child,
table.freezeFirstColumn tbody th:first-child {
	position: sticky;
	position: -webkit-sticky;
	left: 0;
}
* {
	font-family: sans-serif;
}
.box {
	clear: both;
	padding: 0;
	min-height: 300px;
	height: 40vh;
  /* width: 100vh; */
	margin-left: auto;
	margin-right: auto;
	overflow: hidden;
}
@font-face {
	font-family: FontAwesome;
	src: url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.woff);
}
.fa {
	font-family: FontAwesome;
}
</style>


