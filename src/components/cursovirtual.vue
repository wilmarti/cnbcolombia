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
              <b-col class="d-flex justify-content-start" sm="auto">
                 <b-button pill variant="outline-success" v-on:click= "Agregarcurso" >Ingresar Evento</b-button>
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
          <td>
            <b-button class= "m-1" size="sm" variant="outline-success" v-b-modal.modalEdicion @click="EditarCurso(item.value,item.text,item.ESTADO,item.NumeroHoras,item.TipoDiploma)">Editar</b-button>          
            <b-button class="m-1" size="sm" variant="outline-danger" @click="EliminarCurso(item.value)" >Eliminar</b-button>
          </td>
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
        v-model="Diploma" 
        id="EstadonDiploma"
        label="Seleccione Diploma:" 
        descripcion="diploma"
        :options="optionsDiploma" 
        @change="CambiaDiploma"
        required
        >
          <template v-slot:first>
              <b-form-select-option :value="null" disabled>-- Por favor seleccione un diploma --</b-form-select-option>
          </template>  
        </b-form-select>
        </b-form-group>

        <!--Elegir archivo-->
        <b-form-group class="col-sm m-2"  label="Cargar Imagen:" label-for="elegirArchivo">

        <b-form-file 
        id="elegirArchivo"
        label="Seleccione Diploma:" 
        descripcion="Cargue una imagen de diploma"
        accept="image/*"
        @change="cargaImagen" 
        
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
        :state=Boolean(SelectedText)
        :options="optionConfiTexto" 
        required
        >
          <template v-slot:first>
              <b-form-select-option :value="null" disabled>-- Por favor seleccione un campo a configuar --</b-form-select-option>
          </template>  
        </b-form-select>
        </b-form-group>
      </div>

          <b-row>
            <!-- ****** VISTA PREVIA***-->
              
                <div class="card text-sm-center mb-5 text-wrap">
                  <!-- <div v-if ="imagenSeleccionada">
                    <img 
                      class="card-img" 
                      :src="SelectDiploma" 
                      alt="certificado"
                      >              
                  </div> -->
               
                <!--Asegura que solo se muestra la imagen seleccionada desde el input de tipo file si SelectDiploma es una URL de datos (Data URL).-->
                <div v-if="typeof SelectDiploma === 'string' && SelectDiploma.startsWith('data:image/')">
                  <img 
                  m
                  class="card-img" 
                  :src="SelectDiploma" 
                  alt="certificado seleccionada" 
                  >
                </div>                
                <!-- Muestra la imagen de fondo -->
                  <div class="card-img-overlay">              
                    <!-- Parrafo nombre curso-->
                    <p :style="textStyle(formData.ColorNombre, formData.TamañoNombre, formData.PosicionNombre)">
                      {{ formData.NombreCurso }}
                    </p>
                    
                    <!-- Otros párrafos -->
                    <p :style="textStyle(formData.ColorCedula, formData.TamañoCedula, formData.PosicionCedula)">
                      {{ formData.Cedula }}
                    </p>
                    <p :style="textStyle(formData.Color1, formData.Tamaño1, formData.Posicion1)">
                      <small>{{ formData.Texto1 }}</small>
                    </p>
                    <p :style="textStyle(formData.Color2, formData.Tamaño2, formData.Posicion2)">
                      <small>{{ formData.Texto2 }}</small>
                    </p>
                    <p :style="textStyle(formData.Color3, formData.Tamaño3, formData.Posicion3)">
                      <small>{{ formData.Texto3 }}</small>
                    </p>
                    <p :style="textStyle(formData.Color4, formData.Tamaño4, formData.Posicion4)">
                      <small>{{ formData.Texto4 }}</small>
                    </p>
                    <p :style="textStyle(formData.ColorFecha, formData.TamañoFecha, formData.PosicionFechaY, formData.PosicionFechaX)">
                      <small>{{ formData.Fecha }}</small>
                    </p>             
                  </div>
                </div>                
              
                    <!-- ******** FORMULARIO CONFIGURACION TEXTO DIPLOMA**********-->
              <b-col>
                <form ref="form" @submit.stop.prevent="handleSubmit">
                <!-- Formulario Inputs Nombre -->
                <div v-if = "SelectedText === 'nombre'">
                  <b-form-group
                    label="Nombre Curso:"
                    label-for="NombreCurso"
                    >                  
                    <b-form-input
                      id="NombreCurso"
                      placeholder="Escriba Nombre Curso..."
                      v-model="formData.NombreCurso"
                      :state=Boolean(formData.NombreCurso)
                      required
                      >
                    </b-form-input>
                  </b-form-group>
                  
                  <div class="form-group">
                    <label for="color" class="form-label">Color:</label>
                    <input
                      class="form-control form-control-color m-3"
                      type="color"
                      id="color"
                      placeholder="Configurar Texto"
                      v-model="formData.ColorNombre"
                    >
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="fontSize">Tamaño de letra:</label>
                    <input
                      class="form-range"
                      type="range"
                      min="20"
                      max="60"
                      id="fontSize"
                      v-model="formData.TamañoNombre"
                    >
                  </div>            
                  <div class="form-group">
                    <label for="position">Posición:</label>
                    <input
                      class="form-range"
                      type="range"
                      min="100"
                      max="900"
                      id="position"
                      v-model="formData.PosicionNombre"
                    >
                  </div>
                </div>
                <!-- Formulario Inputs Identificación -->
                <div v-if="SelectedText === 'identi'">
                  <div class="form-group">
                    <label class="form-label" for="cedula">Cédula:</label>
                    <input
                      class="form-control"
                      type="number"
                      placeholder="Escriba Identificación..."
                      v-model="formData.Cedula"
                      :state=Boolean(formData.Cedula)
                    >
                  </div>
                  <div class="form-group">
                    <label for="colorId" class="form-label">Color:</label>
                    <input
                      class="form-control form-control-color m-3"
                      type="color"
                      id="colorIdenti"
                      placeholder="Configurar Texto"
                      v-model="formData.ColorCedula"                      >
                    </div>
                  <div class="form-group">
                    <label class="form-label" for="fontSizeId">Tamaño de letra:</label>
                    <input
                      class="form-range"
                      type="range"
                      min="20"
                      max="60"
                      id="fontSizeIdenti"
                      v-model="formData.TamañoCedula"
                      >
                    </div>
                  <div class="form-group">
                    <label for="positionIdenti">Posición:</label>
                    <input
                      class="form-range"
                      type="range"
                      min="100"
                      max="900"
                      id="positionIdenti"
                      v-model="formData.PosicionCedula"
                      >
                    </div>
                  </div>
                <!-- Formulario Input Fecha -->
                <div v-if="SelectedText === 'fecha'">
                  <div class="form-group">
                    <label for="date">Fecha:</label>
                    <input
                      class="form-control"
                      type="date"
                      id="date"
                      v-model="formData.Fecha"
                    >
                  </div>
                  <div class="form-group">
                    <label for="colorFecha" class="form-label">Color:</label>
                    <input
                      class="form-control form-control-color m-3"
                      type="color"
                      id="colorFecha"
                      placeholder="Configurar Texto"
                      v-model="formData.ColorFecha"
                    >
                    <div class="form-group">
                      <label class="form-label" for="fontSizeFecha">Tamaño de letra:</label>
                      <input
                        class="form-range"
                        type="range"
                        min="15"
                        max="60"
                        id="fontSizeFecha"
                        v-model="formData.TamañoFecha"
                      >
                    </div>            
                  </div>
                  <div class="form-group">
                    <label for="positionFecha">Posición Vertical:</label>
                    <input
                      class="form-range"
                      min="250"
                      max="900"
                      type="range"
                      id="positionFecha"
                      v-model="formData.PosicionFechaY"
                    >
                  </div>
                  <div class="form-group">
                    <label for="positionFecha">Posición Horizontal:</label>
                    <input
                      class="form-range"
                      type="range"
                      id="positionFecha"
                      v-model="formData.PosicionFechaX"
                    >
                  </div>
                </div>
                <!-- Formulario Input Texto1 -->
                <div v-if="SelectedText === 'texto1'">
                    <div class="form-group">
                      <label for="Texto1">Texto 1:</label>
                      <input
                        class="form-control"
                        type="text"
                        id="Texto1"
                        v-model="formData.Texto1"
                        :state=Boolean(formData.Texto1)
                      >
                    </div>
                    <div class="form-group">
                      <label for="colorTexto1" class="form-label">Color:</label>
                      <input
                        class="form-control form-control-color m-3"
                        type="color"
                        id="colorTexto1"
                        placeholder="Configurar Texto"
                        v-model="formData.Color1"
                      >
                    </div>
                    <div class="form-group">
                      <label class="form-label" for="fontSizeTexto1">Tamaño de letra:</label>
                      <input
                        class="form-range"
                        type="range"
                        min="20"
                        max="60"
                        id="fontSizeTexto1"
                        v-model="formData.Tamaño1"
                      >
                    </div>
                    <div class="form-group">
                      <label for="positionTexto1">Posición:</label>
                      <input
                        class="form-range"
                        type="range"
                        min="250"
                        max="900"
                        id="positionTexto1"
                        v-model="formData.Posicion1"
                      >
                      <input
                        class="form-control"
                        type="input"
                        id="positionTexto1"
                        v-model="formData.Posicion1"
                      >
                    </div>
                  </div>
                <!-- Formulario Input Texto2 --> 
                <div v-if="SelectedText === 'texto2'">
                    <div class="form-group">
                      <label for="Texto1">Texto 2:</label>
                      <input
                        class="form-control"
                        type="text"
                        id="Texto2"
                        v-model="formData.Texto2"
                        :state=Boolean(formData.Texto2)
                      >
                    </div>
                    <div class="form-group">
                      <label for="colorTexto2" class="form-label">Color:</label>
                      <input
                        class="form-control form-control-color m-3"
                        type="color"
                        id="colorTexto2"
                        placeholder="Configurar Texto"
                        v-model="formData.Color2"                      >
                    </div>
                    <div class="form-group">
                      <label class="form-label" for="fontSizeTexto1">Tamaño de letra:</label>
                      <input
                        class="form-range"
                        type="range"
                        min="20"
                        max="60"
                        id="fontSizeTexto1"
                        v-model="formData.Tamaño2"
                      >
                    </div>
                    <div class="form-group">
                      <label for="positionTexto2">Posición:</label>
                      <input
                        class="form-range"
                        type="range"
                        min="300"
                        max="900"
                        id="positionTexto2"
                        v-model="formData.Posicion2"
                      >
                    </div>
                </div>
                        <!-- Formulario Input Texto3 -->
                    <div v-if="SelectedText === 'texto3'">
                    <div class="form-group">
                      <label for="Texto3">Texto 3:</label>
                      <input
                        class="form-control"
                        type="text"
                        id="Texto1"
                        v-model="formData.Texto3"
                        :state=Boolean(formData.Texto3)
                      >
                    </div>
                    <div class="form-group">
                      <label for="colorTexto3" class="form-label">Color:</label>
                      <input
                        class="form-control form-control-color m-3"
                        type="color"
                        id="colorTexto3"
                        placeholder="Configurar Texto"
                        v-model="formData.Color3"
                      >
                    </div>
                    <div class="form-group">
                      <label class="form-label" for="fontSizeTexto3">Tamaño de letra:</label>
                      <input
                        class="form-range"
                        type="range"
                        min="20"
                        max="60"
                        id="fontSizeTexto3"
                        v-model="formData.Tamaño3"
                      >
                    </div>
                    <div class="form-group">
                      <label for="positionTexto3">Posición:</label>
                      <input
                        class="form-range"
                        type="range"
                        min="300"
                        max="900"
                        id="positionTexto3"
                        v-model="formData.Posicion3"
                      >
                    </div>
                  </div> 
                   <!-- Formulario Input Texto4 -->
                   <div v-if="SelectedText === 'texto4'">
                    <div class="form-group">
                      <label for="Texto4">Texto 4:</label>
                      <input
                        class="form-control"
                        type="text"
                        id="Texto1"
                        v-model="formData.Texto4"
                        :state=Boolean(formData.Texto4)
                      >
                    </div>
                    <div class="form-group">
                      <label for="colorTexto4" class="form-label">Color:</label>
                      <input
                        class="form-control form-control-color m-3"
                        type="color"
                        id="colorTexto4"
                        placeholder="Configurar Texto"
                        v-model="formData.Color4"
                      >
                    </div>
                    <div class="form-group">
                      <label class="form-label" for="fontSizeTexto4">Tamaño de letra:</label>
                      <input
                        class="form-range"
                        type="range"
                        min="20"
                        max="60"
                        id="fontSizeTexto4"
                        v-model="formData.Tamaño4"
                      >
                    </div>
                    <div class="form-group">
                      <label for="positionTexto4">Posición:</label>
                      <input
                        class="form-range"
                        type="range"
                        min="300"
                        max="900"
                        id="positionTexto4"
                        v-model="formData.Posicion4"
                      >
                    </div>
                  </div>         
                </form>      
              </b-col>
          </b-row>
      
      

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
      Diploma:"",
      scrollVertical: true,
			scrollHorizontal: true,
			syncHeaderScroll: true,
			syncFooterScroll: true,
			includeFooter: true,
			deadAreaColor: "white",
			maxRows: 100,
      freezeFirstColumn: false,
      //
      //v-model formulario
      formData: {        
        NombreCurso: '',
        TamañoNombre:'20',
        ColorNombre:'#000000',
        PosicionNombre:'0',
        //******** */
        Cedula:'',
        TamañoCedula:'20',
        ColorCedula:'#000000',
        PosicionCedula:'0',
        /********* */
        Fecha:'',
        TamañoFecha:'20',
        ColorFecha:'#000000',
        PosicionFechaY:'0',
        PosicionFechaX:'0',
        /********* */ 
        Texto1: '',
        Tamaño1: '20',
        Color1: '#000000',
        Posicion1: '0',
        /********* */
        Texto2: '',
        Tamaño2: '20',
        Color2: '#000000',
        Posicion2: '0',
        /********* */
        Texto3: '',
        Tamaño3: '20',
        Color3: '#000000',
        Posicion3: '0',
        /********* */
        /********* */
        Texto4: '',
        Tamaño4: '20',
        Color4: '#000000',
        Posicion4: '0',
        /********* */        
        FondoDiploma:[],
      },
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
        SeleccionCursoEstado: null,
        SeleccionDiploma:null,
        SelectEstado:'',
        SelectedText: null,
        valid:false,
        optionsDiploma:[],
        SelectDiploma:null,
        FondoImg:"",
        CodigoDiploma:0,
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

        
        columns: [
                  { id: "value", title: "ID", cssClasses: "w3" },
                  { id: "text", title: "Descripción del Evento", cssClasses: "w4" },
                  { id: "ESTADO", title: "Estado", cssClasses: "NroId" },
                  { id: "NumeroHoras", title: "No. Horas", cssClasses: "NroId" },
                  { id: "TipoDiploma", title: "Tipo Diploma", cssClasses: "NroId" }
                 ],
        nameHora:null,
        optionConfiTexto:[
        {value: null, text: "Seleccione Texto", disabled: true},
        {value:"nombre",text: "Nombre"},
        {value:"identi",text: "Identificación"},
        {value:"texto1",text: "Texto1"},
        {value:"texto2",text: "Texto2"},
        {value:"texto3",text: "Texto3"},
        {value:"texto4",text: "Texto4"},
        {value:"fecha",text:"Fecha"},
       ],
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
        console.log("cursos",response.data)
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
        this.Diploma= diploma

        this.CambiaDiploma()
        

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
      const TipoDiploma = this.Diploma
      const ImgFondoDiploma = this.CodigoDiploma 
      const NombreDiplomaSelect = this.NombreDiploma
      //--
      const Te1 = this.formData.Texto1
      const Ta1 = this.formData.Tamaño1
      const Po1 = this.formData.Posicion1
      const Co1 = this.formData.Color1
      //--
      //--
      const Te2 = this.formData.Texto2
      const Ta2 = this.formData.Tamaño2
      const Po2 = this.formData.Posicion2
      const Co2 = this.formData.Color2
      //--
      //--
      const Te3 = this.formData.Texto3
      const Ta3 = this.formData.Tamaño3
      const Po3 = this.formData.Posicion3
      const Co3 = this.formData.Color3

      
      const Te4 = this.formData.Texto4
      const Ta4 = this.formData.Tamaño4
      const Po4 = this.formData.Posicion4
      const Co4 = this.formData.Color4      
      //--      
      //--
      //const NomCur = formData.NombreCurso
      const TaNom = this.formData.TamañoNombre
      const PoNom = this.formData.PosicionNombre
      const CoNom = this.formData.ColorNombre
      //--
      //--
      //const Cedu = formData.Cedula
      const TaCedu = this.formData.TamañoCedula
      const PoCedu = this.formData.PosicionCedula
      const CoCedu = this.formData.ColorCedula
      //--
      //--
      //const Fec2 = formData.Fecha
      const TaFec2 = this.formData.TamañoFecha
      const PoFec2 = this.formData.PosicionFechaY
      const CoFec2 = this.formData.ColorFecha
      //--

      
      
      
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()

        if (this.valid) {
    console.log("Validación pasada, procesando actualización...");

    const payload = {
        DesEditar: DesEditar,
        EstadoEditar: EstadoEditar,
        HorasEditar: HorasEditar,
        TipoDiploma: TipoDiploma,
        NombreDiploma: NombreDiplomaSelect,
        Texto1:Te1,
        Tamaño1:Ta1,
        Color1:Co1,
        Posicion1:Po1,
        Texto2:Te2,
        Tamaño2 :Ta2,
        Color2:Co2,
        Posicion2:Po2,
        Texto3:Te3,
        Tamaño3 :Ta3,
        Color3:Co3,
        Posicion3:Po3,
        TamañoNombre:TaNom,
        ColorNombre:CoNom,
        PosicionNombre:PoNom,
        TamañoId:TaCedu,
        ColorId:CoCedu,
        PosicionId:PoCedu,
        Texto4:Te4,
        Tamaño4:Ta4,
        Color4:Co4,
        Posicion4:Po4,
        TamañoFecha:TaFec2,
        ColorFecha:CoFec2,
        PosicionFecha:PoFec2

    };
 console.log ("payload:",payload)
    axios
        .put(`https://cnbcolombia.com/node/ApiACNB/cursos/${this.IdEdicion}`, payload)
            .then((response) => {
                if (response.data.ok) {
                    console.log("Actualización exitosa.");
                    alert("Registro editado con éxito.");
                    this.getCursos(); // Actualiza la lista de cursos
                } else {
                    console.error("Error en la respuesta del servidor:", response);
                    alert("Error al tratar de editar el registro.");
                }
            })
            .catch((error) => {
                console.error("Error en la solicitud:", error.message || error);
                alert("Ocurrió un error al intentar editar el registro. Verifica la conexión o intenta más tarde.");
            });
    } else {
        console.warn("Validación fallida, no se puede continuar con la actualización.");
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

      cargaImagen(event) {
        const file = event.target.files[0];//Captura el primer archivo seleccionado en el input de tipo file.
        if (file) {
          const reader = new FileReader(); //Crea una instancia de FileReader, que se utiliza para leer el contenido del archivo.(FileReader) convierte la imagen en base 64
          reader.onload = (e) => {    //función que se ejecuta cuando el FileReader ha terminado de leer el archivo.
            const newImageUrl = e.target.result;//contiene la URL de datos (Data URL) del archivo leído, que es una cadena en formato base64 que representa la imagen.
            this.imgSelect = newImageUrl;//Asigna la URL para ser utilizada
            this.optionsDiploma.push({ value: newImageUrl, text: file.name });

            this.SelectDiploma = newImageUrl;
          };
          reader.readAsDataURL(file); //Inicia la lectura del archivo como una URL de datos (Data URL).
        }
      },
      textStyle(color, size, top, left = 0) {
      return {
        color: color,
        fontSize: size + 'px',
        position: 'relative',
        top: top + 'px',
        left: left + 'px'
      };
    },
     // Función para guardar la imagen
     saveImage() {

      alert("Hola")
/*       const element = this.$refs.imageContainer;

      // Utilizar html2canvas para capturar el DOM
      html2canvas(element).then(canvas => {
        // Convertir el canvas en una imagen en formato base64
        const imageUrl = canvas.toDataURL('image/png');

        // Crear un enlace para descargar la imagen
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = 'certificado.png';
        link.click();
        console.log(link.download)
      }); */
    },

    CambiaDiploma(){

      this.SelectDiploma = this.Diploma

      this.FondoImg = this.ListDiplomas.filter((item) => item.value ===this.SelectDiploma)
      this.SelectDiploma = this.FondoImg[0].FondoDiploma
      this.CodigoDiploma = this.FondoImg[0].value
      this.NombreDiploma = this.FondoImg[0].text

      console.log("valor:",this.CodigoDiploma, "Nombre:",this.NombreDiploma)
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
	width: 10em;
	min-width: 10em;
	max-width: 10em;
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


