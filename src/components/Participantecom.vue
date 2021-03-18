<template>

  <div class="mt-0">
    <h5 style="color:#08088A">{{ msg }}</h5>


      <b-container> 
      <!-- //BOTON INGRESAR PARTICIPANTE     -->
      
          <div class="form-group-row">
            <div >
              <simple-upload/>
            </div>
          </div>

<!-- <table class="table sm">
        <b-row>
          <b-col md="7">
              <div >
                <b-row>
                  <b-col>
                      <b-button size="sm" variant="success" v-b-modal.modalInsercion class="bg-success text-white" >Ingresar Nuevo</b-button>                  
                  </b-col>
                    <b-col>
                     <b-button size="sm" variant="success" class="bg-success text-white" @click="refrescar" >Actualizar tabla</b-button>
                   </b-col>
                  <b-col>
                    <b-form-checkbox
                          id="checkbox-1"
                          v-model="status"
                          name="checkbox-1"
                          unchecked-value="activos"
                          value="Mostrar Todos"
                          class="mb-3"
                          size="lg"
                          @change="check($event)"
                        >
                          {{status}}
                    </b-form-checkbox>
                  </b-col>
                  <b-col>
                    <input type="text" placeholder="Buscar por NroId" class="form-control" style="width:150px" v-model="buscar">
                  </b-col>
                  <b-col>
                    # Registros <h4 style="color:red ; width:100px">{{listar.length}}</h4>
                  </b-col>
                </b-row>
             </div>
          </b-col>
        </b-row>
</table> -->
     
<table  class="table-responsive sm">
  <thead>
    <tr>
      <th scope="col"><b-button style="margin: 10px" size="sm" variant="success" v-b-modal.modalInsercion class="bg-success text-white" >Ingresar Nuevo</b-button></th>
      <th scope="col"><b-button style="margin: 10px" size="sm" variant="success" class="bg-success text-white" @click="refrescar" >Actualizar tabla</b-button></th>
      <th scope="col"><b-form-checkbox style="margin: 10px" id="checkbox-1" v-model="status" name="checkbox-1" unchecked-value="activos" value="Mostrar Todos" class="mb-3" @change="check($event)">{{status}}</b-form-checkbox></th>
      <th scope="col"><input type="text" placeholder="Buscar por NroId" class="form-control; margin: 20px; border-style: 1px;" style="width:150px;" v-model="buscar"></th>
      <th scope="col"># Registros <h5 style="color:red ;text-align:center; width:100px margin:1">{{listar.length}}</h5></th>
    </tr>
  </thead>
</table>
  
<table  class="table-responsive sm">
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
      <template class="table sm" slot="thead">
      
        <tr>
          <th v-for="col in columns" 
            :class="col.cssClasses"
            :key="col.id">{{ col.title }}</th>
         <th class="action">Acciones</th> 
        </tr>
      </template>

      <!-- body -->
      <template slot="tbody">
        <tr v-for="item in listar" :key="item.id_participante">
          <td v-for="col in columns"
            :class="col.cssClasses"
            :key="col.id">{{ item[col.id] }}           
            </td>
          <b-button  size="sm" variant="outline-success" v-b-modal.modalEdicion @click="EditarParticipante(item.Id_Participante,item.TipoId,item.NroId,item.PrimerApellido,item.SegundoApellido,item.PrimerNombre,item.SegundoNombre,item.Estado)">Editar</b-button>
          <b-button  size="sm" variant="outline-warning" v-b-modal.modalinscripcion @click="InscribirParticipante(item.Id_Participante,item.Estado)">Inscribir</b-button>
          <b-button size="sm" variant="outline-danger"  @click="EliminarParticipante(item.Id_Participante)" >Eliminar</b-button>

        </tr>
       <!--  </mdb-tbl-body> -->
      </template>

    <!-- footer 
    <template slot="tfoot">
      <tr><th :colspan="columns.length">My footer text</th></tr>
    </template>-->
  
</vue-scrolling-table>


</div> 
</table>
 
  <br/> <br/> <br/>
 



<!-- FORMULARIO PARA INSCRIBIR ESTUDIANTES A CURSOS VIRTUALES -->
<div id="inscribir">
<b-modal
      id="modalinscripcion"
      ref="inscripcion"
      title="FORMULARIO DE INSCRIPCIÓN A CURSOS"
      @show="resetInscripcion"
      @hidden="resetInscripcion"
      @ok="handleOk_inscripcion"
    >
      <form ref="form3" @submit.stop.prevent="handleSubmit_inscripcion">

        <!-- seleccion de participante -->
        <b-form-group
          :state="SeleccionPInscripcion"
          label="participante inscripcion:"
          label-for="participantes"
          invalid-feedback="Debe seleccionar un participante"
        >
        <b-form-select
        :state="SeleccionPInscripcion" 
        v-model="selectedParticipanteInscripcion" 
        id="InscripcionParticipanteo"
        label="Seleccione Participante:" 
        descripcion="participante"
        :options="PInscripcion" class="mb-3"
        required
        >
            <template v-slot:first>
            <b-form-select-option :value="null" disabled>-- Por favor seleccione participante --</b-form-select-option>
            </template>  
        </b-form-select>

      </b-form-group>

        <!-- seleccion de curso -->
        <b-form-group
          :state="SeleccionCursoInscripcion"
          label="curso inscripcion:"
          label-for="cursos"
          invalid-feedback="Debe seleccionar el curso"
        >

        <b-form-select
        :state="SeleccionCursoInscripcion" 
        v-model="selectedCurso" 
        id="InscripcionCurso"
        label="Seleccione Curso:" 
        descripcion="cursos"
        :options="CursosInscripcion" class="mb-3"
        required
        >
            <template v-slot:first>
            <b-form-select-option :value="null" disabled>-- Por favor seleccione un curso --</b-form-select-option>
            </template>  
        </b-form-select>
<!-- 
        <b-button>quitar</b-button> -->

      </b-form-group>
      </form>
    </b-modal>
</div>


<!-- FORMULARIO PARA EDITAR -->
    <div id="modal">
    <b-modal
      id="modalEdicion"
      ref="modal"
      title= "FORMULARIO DE EDICIÓN DE REGISTROS"
      valor= item.Id_Curso
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
     <!-- Hello {{IdEdicion}} -->
      <form ref="form" @submit.stop.prevent="handleSubmit" inline>
        
        <!-- Tipo de identificacion -->
        <b-form-group
          :state="TipoId_e"          
          label-for="input-2"
          invalid-feedback="Tipo Identificación Requerido"         
        >
        <b-input-group prepend="Tipo identificación:" class="mb-2 mr-sm-2 mb-sm-0">
        <b-form-select
            :state="TipoId_e"
            id="TipoId"
            label="Tipo de Identificación:" 
            descripcion="Tipo de Identificación"
            v-model="selectedparticipante" 
            :options="options"  
            class="mb-2 mr-sm-2 mb-sm-0"          
            required
            >
        </b-form-select>
        </b-input-group> 
      </b-form-group>

        <!-- Numero de identificacion -->
        <b-form-group
          :state="NroId"
          label-for="NroId"
          invalid-feedback="Campo Requerido"          
        >
        <b-input-group prepend="Nro identificación:" class="mb-2 mr-sm-2 mb-sm-0">
        <b-form-input
            :state="NroId"
            id="NroId"
            label="Nro Identificación:" 
            descripcion="Nro de Identificación"
            v-model="NumeroId" 
            type="text"
            required
            >
        </b-form-input>
        </b-input-group>
        </b-form-group> 

        <!-- Primer Apellido -->       
        <b-form-group
          :state="PApellido"
          label-for="Papellido"
          invalid-feedback="Campo Requerido"          
        >
        <b-input-group prepend="Primer Apellido:" class="mb-2 mr-sm-2 mb-sm-0">
        <b-form-input
            :state="PApellido"
            id="PrimerApellido"
            label="Primer Apellido:" 
            descripcion="Primer Apellido"
            v-model="PrimerApellido" 
            type="text"
            required
            >
        </b-form-input>
        </b-input-group>
        </b-form-group> 

        <!-- Segundo Apellido -->       
        <b-form-group
          label-for="Sapellido"
          invalid-feedback="Campo Requerido"
        >
        <b-input-group prepend="Segundo Apellido:" class="mb-2 mr-sm-2 mb-sm-0">
        <b-form-input
            id="SegundoApellido"
            label="Segundo Apellido:" 
            descripcion="Segundo Apellido"
            v-model="SegundoApellido" 
            type="text"
            >
        </b-form-input>
        </b-input-group>
        </b-form-group> 

        <!-- Primer Nombre -->       
        <b-form-group
          :state="pNombre"
          label-for="PNombre"
          invalid-feedback="Campo Requerido"
        >
        <b-input-group prepend="Primer Nombre:" class="mb-2 mr-sm-2 mb-sm-0">
        <b-form-input
            :state="pNombre"
            id="PrimerNombre"
            label="Primer Nombre:" 
            descripcion="Primer Nombre"
            v-model="PrimerNombre" 
            type="text"
            required
            >
        </b-form-input>
        </b-input-group>
        </b-form-group>        

         <!-- Segundo Nombre -->       
        <b-form-group
          label-for="SNombre"
          invalid-feedback="Campo Requerido"
        >
        <b-input-group prepend="Segundo Nombre:" class="mb-2 mr-sm-2 mb-sm-0">
        <b-form-input
            id="SegundoNombre"
            label="Segundo Nombre:" 
            descripcion="Segundo Nombre"
            v-model="SegundoNombre" 
            type="text"
            >
        </b-form-input>
        </b-input-group>
        </b-form-group>   

        <!-- Cursos inscritos -->
        <b-form-group
          :state="EstadoP"
          label-for="name-input"
          invalid-feedback="Estado Requerido"
        >
        <b-input-group prepend="Estado:" class="mb-2 mr-sm-2 mb-sm-0">
        <b-form-select
            :state="EstadoP"
            id="Estado"
            label="Estado:" 
            descripcion="Estado"
            v-model="selectedEstado" 
            :options="Tipos"                        
            required
            >
        </b-form-select>
        </b-input-group>
      </b-form-group>        
      </form>
    </b-modal>
    </div>      




<!-- FORMULARIO PARA INSERTAR -->
    <div id="modal2">
    <b-modal
      id="modalInsercion"
      ref="modal2"
      title= "FORMULARIO DE INSERCIÓN DE REGISTROS"
      valor= item.Id_Curso
      @show="resetModalInsercion"
      @hidden="resetModalInsercion"
      @ok="handleOkIns"
    >
     <!-- Hello {{IdEdicion}} -->
      <form ref="form2" @submit.stop.prevent="handleSubmitIns" inline>
        
        <!-- Tipo de identificacion -->
        <b-form-group
          :state="TipoId_i"
          label-for="name-input"
          invalid-feedback="Tipo Identificación Requerido"
        >
        <b-input-group prepend="Tipo Identificación::" class="mb-2 mr-sm-2 mb-sm-0">
        <b-form-select
            :state="TipoId_i" 
            id="TipoId"
            label="Tipo de Identificación:" 
            descripcion="Tipo de Identificación"
            v-model="selectedparticipante_i" 
            :options="options"
            required
            >
        </b-form-select>
        </b-input-group>
      </b-form-group>

        <!-- Numero de identificacion -->
        <b-form-group
          :state="NroId_i"
          label-for="NroId"
          invalid-feedback="Campo Requerido"
        >
        <b-input-group prepend="Nro Identificación:" class="mb-2 mr-sm-2 mb-sm-0">
        <b-form-input
            :state="NroId_i"
            id="NroId"
            label="Nro Identificación:" 
            descripcion="Nro de Identificación"
            v-model="NumeroId_i" 
            type="text"
            required
            >
        </b-form-input>
        </b-input-group>
        </b-form-group> 

        <!-- Primer Apellido -->       
        <b-form-group
          :state="PApellido_i"
          label-for="Papellido"
          invalid-feedback="Campo Requerido"          
        >
         <b-input-group prepend="Primer Apellido:" class="mb-2 mr-sm-2 mb-sm-0">
        <b-form-input
            :state="PApellido_i"
            id="PrimerApellido"
            label="Primer Apellido:" 
            descripcion="Primer Apellido"
            v-model="PrimerApellido_i" 
            type="text"
            required
            >
        </b-form-input>
        </b-input-group>
        </b-form-group> 

        <!-- Segundo Apellido -->       
        <b-form-group
          label-for="Sapellido"
          invalid-feedback="Campo Requerido"
        >
        <b-input-group prepend="Segundo Apellido:" class="mb-2 mr-sm-2 mb-sm-0">
        <b-form-input
            id="SegundoApellido"
            label="Segundo Apellido:" 
            descripcion="Segundo Apellido"
            v-model="SegundoApellido_i" 
            type="text"
            >
        </b-form-input>
        </b-input-group>
        </b-form-group> 

        <!-- Primer Nombre -->       
        <b-form-group
          :state="pNombre_i"
          label-for="PNombre"
          invalid-feedback="Campo Requerido"
        >
        <b-input-group prepend="Primer Nombre:" class="mb-2 mr-sm-2 mb-sm-0">
        <b-form-input
            :state="pNombre_i"
            id="PrimerNombre"
            label="Primer Nombre:" 
            descripcion="Primer Nombre"
            v-model="PrimerNombre_i" 
            type="text"
            required
            >
        </b-form-input>
        </b-input-group>
        </b-form-group>        

         <!-- Segundo Nombre -->       
        <b-form-group
          label-for="SNombre"
          invalid-feedback="Campo Requerido"
        >
        <b-input-group prepend="Segundo Nombre:" class="mb-2 mr-sm-2 mb-sm-0">
        <b-form-input
            id="SegundoNombre"
            label="Segundo Nombre:" 
            descripcion="Segundo Nombre"
            v-model="SegundoNombre_i" 
            type="text"
            >
        </b-form-input>
        </b-input-group>
        </b-form-group>   
        
        <!-- Cursos inscritos -->
        <b-form-group
          :state="EstadoP_i"
          label-for="name-input"
          invalid-feedback="Estado Requerido"
        >
        <b-input-group prepend="Estado:" class="mb-2 mr-sm-2 mb-sm-0">
        <b-form-select
            :state="EstadoP_i"
            id="Estado"
            label="Estado:" 
            descripcion="Estado"
            v-model="selectedEstado" 
            :options="Tipos"                        
            required
            >
        </b-form-select>
        </b-input-group>
      </b-form-group>
      </form>
    </b-modal>
    </div>    



    </b-container>


  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'  
import axios from 'axios'
import SimpleUpload from './SimpleUpload.vue'
import { mdbScrollbar,mdbTbl, mdbTblHead, mdbTblBody,mdbFooter, mdbContainer, mdbRow, mdbCol, mdbIcon} from 'mdbvue';
import VueScrollingTable from "vue-scrolling-table"


const $ = require('jquery')


export default {
  name: 'cursovirtual',
  components:{
      SimpleUpload,
      mdbTbl,
      mdbTblHead,
      mdbTblBody,
      mdbScrollbar,
      VueScrollingTable 

},

  data(){
      return {
      scrollVertical: true,
			scrollHorizontal: true,
			syncHeaderScroll: true,
			syncFooterScroll: true,
			includeFooter: true,
			deadAreaColor: "white",
			maxRows: 100,
			freezeFirstColumn: false,
        //v-model de actualizacion
        selectedparticipante: null,
        NumeroId:null,
        PrimerApellido: '',
        SegundoApellido: '',
        PrimerNombre :'',
        SegundoNombre:'',
        selectedEstado:null,
        //v-model de insercion
        selectedparticipante_i: null,
        NumeroId_i:null,
        PrimerApellido_i: '',
        SegundoApellido_i: '',
        PrimerNombre_i :'',
        SegundoNombre_i:'',
        selectedEstado_i:'',
        //v-model de inscripcion
        selectedCurso:'',
        selectedParticipanteInscripcion:'',
        // : state actualizacion   
        TipoId_e: null,
        NroId: null,
        PApellido:null,
        pNombre: null,
        EstadoP:null,
        // : state insercion
        TipoId_i: null,
        NroId_i: null,
        PApellido_i:null,
        pNombre_i: null, 
        EstadoP_i: null, 
        // state inscripcion
        SeleccionCursoInscripcion: null,
        SeleccionPInscripcion:null,      

        NuevoParticipante:'',
        errors: [],
        //array de participantes
        participanteCurso: [],
        options: [
          { value: null, text: 'Por favor seleccione una opción' },
          { value: 'CC', text: 'CC - Cedula de Ciudadania' },
          { value: 'CE', text: 'CC - Cedula de Extranjeria' },
          { value: 'DNI', text: 'DNI - Documento Nacional Identificación' },
          { value: 'CI', text: 'CI - Documento de Identidad' }
        ],
        Tipos: [
          { value: null, text: 'Por favor seleccione una opción' },
          { value: '1',  text: 'ACTIVO' },
          { value: '0',  text: 'INACTIVO' }
        ],     
        EditParticipante: {},
        valid:false,
        CursosInscripcion:null,
        PInscripcion: [] ,
        //Estado de la grilla
        status: "Activos",
        buscar:'',
        //para el archivo de Excel
        file: '',
        actualiza:0,
        columns: [
                  { id: "Id_Participante", title: "ID", cssClasses: "w3" },
                  { id: "TipoId", title: "Tipo Id", cssClasses: "w3" },
                  { id: "NroId", title: "Nro Id", cssClasses: "NroId" },
                  { id: "PrimerApellido", title: "Primer Apellido", cssClasses: "nombres" },
                  { id: "SegundoApellido", title: "Segundo Apellido", cssClasses: "nombres" },
                  { id: "PrimerNombre", title: "Primer Nombre", cssClasses: "nombres" },
                  { id: "SegundoNombre", title: "Segundo Nombre", cssClasses: "nombres" },
                  { id: "Estado", title: "Estado", cssClasses: "NroId" },
                 ]
      }
  },  
  /***************Se ejecuta cuando el componnete se monte */
  mounted(){
      console.log("montaje participante")
      this.getParticipantes();
      this.getParticipantescombo();
      this.getCursos();      
  },

   methods:{

    resetModal() {
        this.name = ''
        this.TipoId_e = null
        this.NroId = null
        this.PApellido = null
        this.pNombre = null
        this.EstadoP = null
     },
     refrescar(){
       this.getParticipantes();
     },

    getCursos(){
      axios.get('https://cnbcolombia.com/node/ApiACNB/cursos').then (response =>{
        this.CursosInscripcion = response.data
      })
      .catch (e => console.log(e))

    },
     
    /*************Methodo que llama la API para llenar array de cursos virtuales del CNB */
    getParticipantes(){
      axios.get('https://cnbcolombia.com/node/ApiACNB/participantes').then (response =>{
       this.participanteCurso = response.data   
     })
      .catch (e => console.log(e))
    },

    /*************Methodo que llama la API para llenar array de participante virtuales del CNB */
    getParticipantescombo(){
      axios.get('https://cnbcolombia.com/node/ApiACNB/participantes/combo').then (response =>{
        this.PInscripcion = response.data
      })
      .catch (e => console.log(e))
    },
  
    Agregarparticipante()
    {  
      //se limpia el formulario modal
      this.resetModalInsercion();

      //se cargan las cajas de texto con valores en blanco para ser ingresados
      this.Id_Participante_i= ''
      this.selectedparticipante_i= null
      this.NumeroId_i=''
      this.PrimerApellido_i= ''
      this.SegundoApellido_i= ''
      this.PrimerNombre_i=''
      this.SegundoNombre_i=''
      this.selectedEstado_i = null

    },

    EditarParticipante (pid,pTipoId,pNroId,pPApellido,pSApellido,pPNombre,pSNombre,pEstado)
    {  

       if(pEstado =="ACTIVO"){
        pEstado = 1
      }else{
        pEstado = 0
      } 
      
      //se limpia el formulario modal
      this.resetModal();

      //se cargan las cajas de texto con los valores correspondientes para dejar lista la edicion
      this.Id_Participante= pid;
      this.selectedparticipante= pTipoId
      this.NumeroId=pNroId
      this.PrimerApellido= pPApellido
      this.SegundoApellido= pSApellido
      this.PrimerNombre=pPNombre
      this.SegundoNombre=pSNombre
      this.selectedEstado = pEstado
    },


    EliminarParticipante(idDelete)
    {   

      const strMensaje = 'Está seguro de eliminar el Registro?'

            if (confirm(strMensaje)){
                console.log("antes del axios");
                axios.delete(`https://cnbcolombia.com/node/ApiACNB/participantes/${idDelete}`).then (response =>{
                console.log("antes del axios:",idDelete);

                if(response.data.ok)
                {
                  alert("Registro eliminado con éxito");
                  this.getParticipantes(); 
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
     

         this.TipoId_e = valid
         this.NroId = valid
         this.PApellido = valid
         this.pNombre = valid
         this.EstadoP = valid  
         this.valid = valid     
        
        return valid
      },

  


      handleOk(bvModalEvt) {

      
      // se llenan variables con los valores para enviar a la funcion de actualizar del api
      const t_id  = this.selectedparticipante
      const n_id  = this.NumeroId 
      const p_ape = this.PrimerApellido  
      const s_ape = this.SegundoApellido 
      const p_nom = this.PrimerNombre 
      const s_nom = this.SegundoNombre 
      const est   = this.selectedEstado 

      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
      
          if (this.valid){ 
              //Llamado a la API con los valores para realizar la edicion del regitro seleccionado
              axios.put(`https://cnbcolombia.com/node/ApiACNB/participantes/${this.Id_Participante}`,{t_id,n_id,p_ape,s_ape,p_nom,s_nom,est}).then (response =>{
              if(response.data.ok)
              {
                alert("Registro editado con éxito");
                this.getParticipantes(); 
                
              }else{
                alert("Error al tratar de actualizar el registro");
              } 
              })
              .catch (e => console.log(e))  



          } 
      },


      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        // Push the name to submitted names
        //this.submittedNames.push(this.name)
        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('modalEdicion')
        })
      },


 
       /******************************************************************************************************* */
      /****************************** METODOS POPUP DE INSERCION *********************************************/
      /******************************************************************************************************* */

      handleSubmitIns() {
      console.log("holawwww:")
        // Exit when the form isn't valid
        if (!this.checkFormValidityIns()) {
          return
        }
        // Push the name to submitted names
        //this.submittedNames.push(this.name)
        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('modalInsercion')
        })
      },   
      
     /******************************* AÑADIR PARTICIPANTE ***************************************************/
      handleOkIns(bvModalEvt) {
      
      // se llenan variables con los valores para enviar a la funcion de actualizar del api
      const t_id  = this.selectedparticipante_i
      const n_id  = this.NumeroId_i
      const p_ape = this.PrimerApellido_i  
      const s_ape = this.SegundoApellido_i
      const p_nom = this.PrimerNombre_i
      const s_nom = this.SegundoNombre_i 
      const est   = this.selectedEstado_i  

      this.handleSubmitIns()
      bvModalEvt.preventDefault()

            if (this.valid){   
                    axios.post('https://cnbcolombia.com/node/ApiACNB/participantes',{t_id,n_id,p_ape,s_ape,p_nom,s_nom,est}).then (response =>{
                              
                    console.log("response:", response.data)     

                    if(response.data.t_id)
                    {
                      alert("Registro insertado con éxito");
                      this.getParticipantes(); 
                    }else{
                      alert("Error al tratar de insertar el registro");
                    }

                    })
                      .catch (e => function(error){

                    }) 
              }

              getParticipantes()
          },  
          
          
          checkFormValidityIns() {
              const valid = this.$refs.form2.checkValidity()
              console.log("checkFormValidity:",valid)       

              this.TipoId_i = valid
              this.NroId_i = valid
              this.PApellido_i = valid
              this.pNombre_i = valid
              this.EstadoP_i = valid
              this.valid = valid
              return valid

          },  

          resetModalInsercion() {
              this.Id_Participante_i= null
              this.TipoId_i=null
              this.NroId_i=null
              this.PApellido_i= null
              this.pNombre_i=null
              this.EstadoP_i = null
          },
      /******************************************************************************************************* */
      /****************************** METODOS POPUP DE INSCRIPCION *********************************************/
      /******************************************************************************************************* */
     InscribirParticipante(id, estado){
      
      
       if(estado == 0){
         alert("Solo se pueden inscribir participantes en estado ACTIVO")
                
          this.$bvModal.hide('modalinscripcion')
       
       }else{      
          //se limpia el formulario modal
          this.resetInscripcion();
          //se cargan las cajas de texto con los valores correspondientes para dejar lista la edicion
          this.SeleccionCursoInscripcion= null
          this.selectedParticipanteInscripcion= id
        }
    },
 
     handleSubmit_inscripcion() {
        // Exit when the form isn't valid
        if (!this.checkFormValidityInscripcion()) {
          return
        }
        // Push the name to submitted names
        //this.submittedNames.push(this.name)
        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('modalinscripcion')
        })
      },  

     checkFormValidityInscripcion() {
        const valid = this.$refs.form3.checkValidity()
        this.SeleccionCursoInscripcion = valid
        this.SeleccionPInscripcion = valid
        this.valid = valid
        return valid

      },   

      handleOk_inscripcion(bvModalEvt) {
      
      // se llenan variables con los valores para enviar a la funcion de actualizar del api
      const sc = this.selectedCurso
      const sp = this.selectedParticipanteInscripcion

      this.handleSubmit_inscripcion()
      bvModalEvt.preventDefault()

        if (this.valid){   
              axios.post('https://cnbcolombia.com/node/ApiACNB/participantes/Inscripcion',{sc,sp}).then (response =>{
                        
              console.log("response:", response.data)     

              if(response.data.sc)
              {
                alert("Registro insertado con éxito");
                this.getParticipantes(); 
              }else{
                alert("Error al tratar de insertar el registro, verifique que el profesional no este en el curso inscrito");
              }

              })
                .catch (e => function(error){

              }) 
            }
      },


      resetInscripcion() {
        this.selectedCurso= null
        this.SeleccionPInscripcion=null  
      },


      check(value) {

        if (value == "Mostrar Todos"){
          this.participanteCurso =this.participanteCurso.filter(item => {return item.Estado == "ACTIVO"})
        }else{
          this.getParticipantes();
        }     

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
        
        listar: function() {
            console.log("listar", this.inscritos)
            return this.participanteCurso.filter((item) => item.NroId.includes(this.buscar));
        },
        items() {
			    return this.allItems.slice(0, this.maxRows)
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
	height: 60vh;
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

