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
            <b-button class= "m-1" size="sm" variant="outline-success" v-b-modal.modalEdicion @click="EditarCurso(item.value,item.text,item.ESTADO,item.NumeroHoras,item.TipoDiploma,item)">Editar</b-button>          
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
    <b-container fluid>
      <!-- Hello {{IdEdicion}} -->
      <form ref="form" @submit.stop.prevent="handleSubmit">        
          <div class="row">
            <div class="input-group input-group-sm">
              <div class="input-group-prepend">
                <span class="input-group-text" for="name-input" >Descripción del Evento</span>
             </div>
              <b-form-input
                class="form-control mr-1"
                type="text"
                id="name-input"
                v-model="nameEditar"
                :state=Boolean(nameEditar)
                invalid-feedback="Name is required"
                required
                >
              </b-form-input>
            
            <!-- seleccion de curso -->
            
              <div class="input-group-prepend">
                <span class="input-group-text" for="EstadoCurso">Estado Curso:</span>
              </div>
              <b-form-select
                class="form-control"
                id="EstadoCurso"
                v-model="SelectEstado" 
                :state="SeleccionCursoEstado" 
                :options="options"
                invalid-feedback="Debe seleccionar el estado del curso" 
                required
                >                
              </b-form-select>
            </div>
          </div>
          <!--Diploma curso-->
          <div class="row mt-2">
            <div class="input-group input-group-sm">
              <div class="input-group-prepend">
                <span class="input-group-text" for="diploma">Diploma Curso:</span>
              </div>
              <b-form-select
                class="form-control mr-1"        
                id="diploma"
                v-model="Diploma" 
                descripcion="diploma"
                :options="optionsDiploma"
                :state="SeleccionDiploma" 
                @change="CambiaDiploma"
                 invalid-feedback="Debe seleccionar diploma del curso"
                
                >                     
              </b-form-select>
              <!--Elegir archivo-->
                <b-form-file
                  class="form-control" 
                  id="elegirArchivo"
                  label="Seleccione Diploma:" 
                  descripcion="Cargue una imagen de diploma"
                  accept="image/*"
                  @change="cargaImagen"          
                  >            
                </b-form-file>
            </div>
            </div>
          <!--Horas del curso-->
          <div class="row mt-2">
            <div class="input-group input-group-sm">
              <div class="input-group-prepend">
                <span class="input-group-text" for="horaInput">Horas del Curso:</span>
              </div>
              <b-form-input
                class="form-control mr-1"
                type="number"
                id="horaInput"
                v-model="nameEditarHoras"
                :state="nameHora"
                required
                >
              </b-form-input>
              <!-- Selección de texto a configurar-->
              <div class="input-group-prepend">
                <span class="input-group-text" for="inputconfiText">Seleccione Texto a configurar:</span>
              </div>
              <b-form-select 
                class="form-control"        
                id="inputconfiText"
                v-model="SelectedText"
                :options="optionConfiTexto" 
                required
                >
              </b-form-select>
            </div>
            <div for="horaInput" invalid-feedback="Name is required"></div>
          </div>

         <!-- ******** FORMULARIO CONFIGURACION TEXTO DIPLOMA**********-->
            
        <form id="formConfiDiploma" class="needs-validation" @submit.stop.prevent="handleSubmit">
              <!-- Formulario Inputs Nombre -->
              <div v-if = "SelectedText === 'nombre'">
                <div class="row mt-2">
                  <div class="input-group input-group-sm">
                    <div class="input-group-prepend">
                      <span class="input-group-text" for="NombreCurso">Nombre:</span>
                    </div>
                    <b-form-input 
                      class="form-control mr-2"
                      type="text"
                      id="NombreCurso"
                      placeholder="Escriba Nombre"
                      v-model="formData.NombreCurso"
                    >
                    </b-form-input> 
                    <b-form-input
                    class="form-control mr-2"
                    type="color"
                    id="color"
                    v-model="formData.ColorNombre"
                    >
                    </b-form-input>
                    <div class="input-group-prepend">
                      <span class="input-group-text" for="fontSize">Tamaño Texto:</span>
                    </div>
                    <b-form-input 
                      class="form-control mr-2"
                      type="number"
                      id="fontSize"
                      min="10"
                      max="50"
                      v-model="formData.TamañoNombre"
                      @input="validateInput('TamañoNombre', 10, 50)"
                      :state=Boolean(validateInput)
                     >
                    </b-form-input>
                    <div class="input-group-prepend">
                      <span class="input-group-text" for="positionY">Posición Vertical:</span>
                    </div>
                      <b-form-input
                        class="form-control"
                        type="range"
                        min="0"
                        :max="altoimg"
                        id="positionY"
                        v-model="formData.PosicionNombreY"
                      >
                    </b-form-input>
                    <b-form-input
                      class="form-control"
                      type="number"
                      id="positionY"
                      v-model="formData.PosicionNombreY"
                      @input="validateInput('PosicionNombreY', 0, 'altoimg')"
                      :state=Boolean(validateInput)
                      >
                    </b-form-input>
                    <div class="input-group-prepend">
                      <span class="input-group-text" for="positionX">Posición Horizontal:</span>
                    </div>
                      <b-form-input
                        class="form-control"
                        type="range"
                        min="0"
                        :max="anchoimg"
                        id="positionX"
                        v-model="formData.PosicionNombreX"
                        >
                      </b-form-input>
                      <b-form-input
                        class="form-control"
                        type="number"
                        id="positionX"
                        v-model="formData.PosicionNombreX"
                        @input="validateInput('PosicionNombreX', 0, 'altoimg')"
                        :state=Boolean(validateInput)
                        >
                      </b-form-input>
                  </div>                  
                </div>                
              </div>
              <!-- Formulario Inputs Identificación -->
              <div v-if="SelectedText === 'identi'">
                <div class="row mt-2">
                  <div class="input-group input-group-sm">
                    <div class="input-group-prepend">
                      <span class="input-group-text" for="cedula">Cédula:</span>
                    </div>
                    <b-form-input
                      class="form-control mr-2"
                      type="text"
                      id="cedula"
                      placeholder="Escriba Identificación..."
                      v-model="formData.Cedula"
                      >
                    </b-form-input>                 
                    <b-form-input
                      class="form-control mr-2"
                      type="color"
                      id="colorIdenti"
                      v-model="formData.ColorCedula" 
                      >
                    </b-form-input>
                  <div class="input-group-prepend">
                    <span class="input-group-text" for="fontSizeId">Tamaño Texto:</span>
                  </div>
                    <b-form-input
                      class="form-contol mr-2"
                      type="number"
                      id="fontSizeId"
                      min="10"
                      max="50"
                      v-model="formData.TamañoCedula"
                      @input="validateInput('TamañoCedula', 10, 50)"
                      :state=Boolean(validateInput)
                     >
                    </b-form-input>
                  <div class="input-group-prepend">
                    <span class="input-group-text" for="positionIdY">Posición Vertical:</span>
                  </div>
                    <b-form-input
                      class="form-control"
                      type="range"
                      min="0"
                      :max="altoimg"
                      id="positionIdY"
                      v-model="formData.PosicionCedulaY"
                      >
                    </b-form-input>
                    <b-form-input
                      class="form-control"
                      type="number"
                      id="positionIdY"
                      v-model="formData.PosicionCedulaY"
                      @input="validateInput('PosicionCedulaY', 0, 'altoimg')"
                      :state=Boolean(validateInput)
                      >
                    </b-form-input>
                    <div class="input-group-prepend">
                      <span class="input-group-text" for="positionIdX">Posición Horizontal:</span>
                    </div>
                      <b-form-input
                        class="form-control"
                        type="range"
                        min="0"
                        :max="anchoimg"
                        id="positionIdX"
                        v-model="formData.PosicionCedulaX"
                        >
                      </b-form-input>
                      <b-form-input
                        class="form-control"
                        type="number"
                        id="positionIdX"
                        v-model="formData.PosicionCedulaX"
                        @input="validateInput('PosicionFechaX', 0, 'anchoimg')"
                        :state=Boolean(validateInput)
                        >
                      </b-form-input>
                  </div>
                </div>
              </div>  
              <!-- Formulario Input Texto1 -->
              <div v-if="SelectedText === 'texto1'">
                <div class="row mt-2">
                  <div class="input-group input-group-sm">
                    <div class="input-group-prepend">
                      <span class="input-group-text" for="Texto1">Texto 1:</span>
                    </div>
                      <b-form-input
                        class="form-control mr-2"
                        type="text"
                        id="Texto1"
                        placeholder="Escriba Texto 1"
                        v-model="formData.Texto1"
                        >
                      </b-form-input>
                      <b-form-input
                        class="form-control mr-2"
                        type="color"
                        id="colorTexto1"
                        v-model="formData.Color1"
                        >
                      </b-form-input>                  
                    <div class="input-group-prepend">
                      <span class="input-group-text" for="fontSizeTexto1">Tamaño Texto:</span>
                    </div>
                      <b-form-input
                        class="form-control mr-2"
                        type="number"
                        id="fontSizeTexto1"
                        min="10"
                        max="50"
                        v-model="formData.Tamaño1"
                        @input="validateInput('Tamaño1', 10, 50)"
                        :state=Boolean(validateInput)
                        >
                      </b-form-input>
                    <div class="input-group-prepend">
                      <span class="input-group-text" for="positionTexto1Y">Posición Vertical:</span>
                    </div>
                      <b-form-input
                        class="form-control"
                        type="range"
                        min="0"
                        :max="altoimg"
                        id="positionTexto1Y"
                        v-model="formData.Posicion1Y"
                        >
                      </b-form-input>
                      <b-form-input
                        class="form-control"
                        type="number"
                        id="positionTexto1Y"
                        v-model="formData.Posicion1Y"
                        @input="validateInput('Posicion1Y', 0, 'altoimg')"
                        :state=Boolean(validateInput)
                        >
                      </b-form-input>
                      <div class="input-group-prepend">
                      <span class="input-group-text" for="position1X">Posición Horizontal:</span>
                    </div>
                      <b-form-input
                        class="form-control"
                        type="range"
                        min="0"
                        :max="anchoimg"
                        id="position1X"
                        v-model="formData.Posicion1X"
                        >
                      </b-form-input>
                      <b-form-input
                        class="form-control"
                        type="number"
                        id="position1x"
                        v-model="formData.Posicion1X"
                        @input="validateInput('Posicion1X', 0, 'anchoimg')"
                        :state=Boolean(validateInput)
                        >
                      </b-form-input>  
                  </div>
                </div>
              </div>
              <!-- Formulario Input Texto2 --> 
              <div v-if="SelectedText === 'texto2'">
                <div class="row mt-2">
                  <div class="input-group input-group-sm">
                    <div class="input-group-prepend">
                      <span class="input-group-text" for="Texto1">Texto 2:</span>
                    </div>
                      <b-form-input
                        class="form-control mr-2"
                        type="text"
                        id="Texto2"
                        placeholder="Escriba Texto 2"
                        v-model="formData.Texto2"
                        >
                      </b-form-input>                    
                      <b-form-input
                        class="form-control mr-2"
                        type="color"
                        id="colorTexto2"
                        v-model="formData.Color2"
                        >
                      </b-form-input>
                    <div class="input-group-prepend">
                      <span class="input-group-text" for="fontSizeTexto1">Tamaño Texto:</span>
                    </div>
                      <b-form-input
                        class="form-control mr-2"
                        type="number"
                        id="fontSizeTexto1"
                        min="10"
                        max="50"
                        v-model="formData.Tamaño2"
                        @input="validateInput('Tamaño2', 10, 50)"
                        :state=Boolean(validateInput)
                        >
                      </b-form-input>
                    <div class="input-group-prepend">
                      <span class="input-group-text" for="positionTexto2Y">Posición Vertical:</span>
                    </div>
                      <b-form-input
                        class="form-control"
                        type="range"
                        min="0"
                        :max="altoimg"
                        id="positionTexto2Y"
                        v-model="formData.Posicion2Y"
                        >
                      </b-form-input>
                      <b-form-input
                        class="form-control"
                        type="number"
                        id="positionTexto2"
                        v-model="formData.Posicion2Y"
                        @input="validateInput('Posicion2Y', 0, 'altoimg')"
                        :state=Boolean(validateInput)
                        >
                      </b-form-input>
                      <div class="input-group-prepend">
                      <span class="input-group-text" for="positionTexto2X">Posición Horizontal:</span>
                    </div>
                      <b-form-input
                        class="form-control"
                        type="range"
                        min="0"
                        :max="anchoimg"
                        id="positionTexto2X"
                        v-model="formData.PosicionTexto2X"
                        >
                      </b-form-input>
                      <b-form-input
                        class="form-control"
                        type="number"
                        id="positionFecha"
                        v-model="formData.PosicionTexto2X"
                        @input="validateInput('PosicionTexto2X', 0, 'anchoimg')"
                        :state=Boolean(validateInput)
                        >
                      </b-form-input>
                  </div>
                </div>
              </div>
                      <!-- Formulario Input Texto3 -->
                  <div v-if="SelectedText === 'texto3'">
                    <div class="row mt-2">
                      <div class="input-group input-group-sm">
                        <div class="input-group-prepend">
                          <span class="input-group-text" for="Texto3">Texto 3:</span>
                        </div>
                          <b-form-input
                            class="form-control mr-2"
                            type="text"
                            id="Texto3"
                            placeholder="Escriba Texto 3"
                            v-model="formData.Texto3"
                            >
                          </b-form-input>
                          <b-form-input
                            class="form-control mr-2"
                            type="color"
                            id="colorTexto3"
                            v-model="formData.Color3"
                            >
                          </b-form-input>
                        <div class="input-group-prepend">
                          <span class="input-group-text" for="fontSizeTexto3">Tamaño Texto:</span>
                        </div>
                          <b-form-input
                            class="form-control mr-2"
                            type="number"
                            id="fontSizeTexto3"
                            min="10"
                            max="50"
                            v-model="formData.Tamaño3"
                            @input="validateInput('Tamaño3', 10, 50)"
                            :state=Boolean(validateInput)
                            >
                          </b-form-input>
                        <div class="input-group-prepend">
                          <span class="input-group-text" for="positionTexto3">Posición:</span>
                        </div>
                          <b-form-input
                            class="form-control"
                            type="range"
                            min="0"
                            :max="altoimg"
                            id="positionTexto3"
                            v-model="formData.Posicion3Y"
                            >
                          </b-form-input>
                          <b-form-input
                            class="form-control"
                            type="number"
                            id="positionTexto3"
                            v-model="formData.Posicion3Y"
                            @input="validateInput('Posicion3Y', 0, 'anchoimg')"
                            :state=Boolean(validateInput)
                            >
                          </b-form-input>
                          <div class="input-group-prepend">
                      <span class="input-group-text" for="positionTexto3X">Posición Horizontal:</span>
                    </div>
                      <b-form-input
                        class="form-control"
                        type="range"
                        min="0"
                        :max="anchoimg"
                        id="positionTextoeX"
                        v-model="formData.Posicion3X"
                        >
                      </b-form-input>
                      <b-form-input
                        class="form-control"
                        type="number"
                        id="positionFecha"
                        v-model="formData.Posicion3X"
                        @input="validateInput('Posicion3X', 0, 'anchoimg')"
                        :state=Boolean(validateInput)
                        >
                      </b-form-input>
                      </div>
                    </div>
                  </div> 
                <!-- Formulario Input Texto4 -->
                <div v-if="SelectedText === 'texto4'">
                  <div class="row mt-2">
                    <div class="input-group input-group-sm">
                      <div class="input-group-prepend">
                        <span class="input-group-text" for="Texto4">Texto 4:</span>
                      </div>
                        <b-form-input
                          class="form-control mr-2"
                          type="text"
                          id="Texto4"
                          placeholder="Escriba Texto 4"
                          v-model="formData.Texto4"
                          >
                        </b-form-input>
                        <b-form-input
                          class="form-control mr-2"
                          type="color"
                          id="colorTexto4"
                          v-model="formData.Color4"
                         >
                        </b-form-input>
                      <div class="input-group-prepend">
                        <span class="input-group-text" for="fontSizeTexto4">Tamaño Texto:</span>
                      </div>
                        <b-form-input
                          class="form-control mr-2"
                          type="number"
                          id="fontSizeTexto4"
                          min="10"
                          max="50"
                          v-model="formData.Tamaño4"
                          @input="validateInput('Tamaño4', 10, 50)"
                          :state=Boolean(validateInput)
                          >
                        </b-form-input>
                      <div class="input-group-prepend">
                        <label class="input-group-text" for="positionTexto4">Posición Vertical:</label>
                      </div>
                        <b-form-input
                          class="form-control"
                          type="range"
                          min="0"
                          :max="altoimg"
                          id="positionTexto4"
                          v-model="formData.Posicion4Y"
                          >
                        </b-form-input>
                        <b-form-input
                          class="form-control"
                          type="number"
                          id="positionTexto4"
                          v-model="formData.Posicion4Y"
                          @input="validateInput('Posicion4Y', 0, 'altoimg')"
                          :state=Boolean(validateInput)
                          >
                        </b-form-input>
                        <div class="input-group-prepend">
                      <span class="input-group-text" for="positionFecha">Posición Horizontal:</span>
                    </div>
                      <b-form-input
                        class="form-control"
                        type="range"
                        min="0"
                        :max="anchoimg"
                        id="positionFecha"
                        v-model="formData.Posicion4X"
                        >
                      </b-form-input>
                      <b-form-input
                        class="form-control"
                        type="number"
                        id="positionFecha"
                        v-model="formData.Posicion4X"
                        @input="validateInput('Posicion4X', -500, 500)"
                        :state=Boolean(validateInput)
                        >
                      </b-form-input>
                    </div>
                  </div>
                </div> 
                
              <!-- Formulario Input Fecha -->
              <div v-if="SelectedText === 'fecha'">
                <div class="row mt-2">
                  <div class="input-group input-group-sm">
                    <div class="input-group-prepend">
                      <span class="input-group-text" for="date">Fecha:</span>
                    </div>
                      <b-form-input
                        class="form-control mr-2"
                        type="date"
                        id="date"
                        v-model="formData.Fecha"
                        >
                      </b-form-input>
                      <b-form-input
                        class="form-control mr-2"
                        type="color"
                        id="colorFecha"
                        placeholder="Configurar Texto"
                        v-model="formData.ColorFecha"
                        >
                      </b-form-input>
                    <div class="input-group-prepend">
                      <label class="input-group-text" for="fontSizeFecha">Tamaño de letra:</label>
                    </div>            
                      <b-form-input
                        class="form-controlcmr-2"
                        type="number"
                        id="fontSizeFecha"
                        min="10"
                        max="50"
                        v-model="formData.TamañoFecha"
                        @input="validateInput('TamañoFecha', 10, 50)"
                        :state=Boolean(validateInput)
                        >
                      </b-form-input>
                    <div class="input-group-prepend">
                      <span class="input-group-text" for="positionFecha">Posición Vertical:</span>
                    </div>
                      <b-form-input
                        class="form-control"
                        min="0"
                        :max="altoimg"
                        type="range"
                        id="positionFecha"
                        v-model="formData.PosicionFechaY"
                        >
                      </b-form-input>
                      <b-form-input
                        class="form-control mr-2"
                        type="number"
                        id="positionFecha"
                        v-model="formData.PosicionFechaY"
                        @input="validateInput('PosicionFechaY', 0, this.altoimg)"
                        :state=Boolean(validateInput)
                        >
                      </b-form-input>
                    <div class="input-group-prepend">
                      <span class="input-group-text" for="positionFecha">Posición Horizontal:</span>
                    </div>
                      <b-form-input
                        class="form-control"
                        type="range"
                        min="0"
                        :max="anchoimg"
                        id="positionFecha"
                        v-model="formData.PosicionFechaX"
                        >
                      </b-form-input>
                      <b-form-input
                        class="form-control"
                        type="number"
                        id="positionFecha"
                        v-model="formData.PosicionFechaX"
                        @input="validateInput('PosicionFechaX', -500, 500)"
                        :state=Boolean(validateInput)
                        >
                      </b-form-input>
                  </div>
                </div>
              </div>        
        </form> 

        <!-- ****** VISTA PREVIA***-->
        <b-row class="container justify-content-md-center">
              <div class="card text-sm-center text-wrap">
                
              <!--Asegura que solo se muestra la imagen seleccionada desde el input de tipo file si SelectDiploma es una URL de datos (Data URL).-->
              <div v-if="typeof SelectDiploma === 'string' && SelectDiploma.startsWith('data:image/')">
                <img
                fluid-grow
                class="card-img" 
                :src="SelectDiploma" 
                alt="certificado seleccionada" 
                >
              </div>                
              <!-- Muestra la imagen de fondo -->
                <div class="card-img-overlay p-0">              
                  <!-- Parrafo nombre curso-->
                  <p :style="textStyle(formData.ColorNombre, formData.TamañoNombre, formData.PosicionNombreY, formData.PosicionNombreX)">
                    {{ formData.NombreCurso }}
                  </p>
                  
                  <!-- Otros párrafos -->
                  <p :style="textStyle(formData.ColorCedula, formData.TamañoCedula, formData.PosicionCedulaY, formData.PosicionCedulaX)">
                    {{ formData.Cedula }}
                  </p>
                  <p :style="textStyle(formData.Color1, formData.Tamaño1, formData.Posicion1Y, formData.Posicion1x)">
                    {{ formData.Texto1 }}
                  </p>
                  <p :style="textStyle(formData.Color2, formData.Tamaño2, formData.Posicion2Y, formData.Posicion2x)">
                    {{ formData.Texto2 }}
                  </p>
                  <p :style="textStyle(formData.Color3, formData.Tamaño3, formData.Posicion3Y, formData.Posicion3x)">
                    {{ formData.Texto3 }}
                  </p>
                  <p :style="textStyle(formData.Color4, formData.Tamaño4, formData.Posicion4Y, formData.Posicion4x)">
                    {{ formData.Texto4 }}
                  </p>
                  <p :style="textStyle(formData.ColorFecha, formData.TamañoFecha, formData.PosicionFechaY, formData.PosicionFechaX)">
                    {{ formData.Fecha }}
                  </p>             
                </div>
              </div>   
        </b-row>
      </form>
    </b-container>
    </b-modal>
    

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
      anchoimg:0,
      altoimg:0,
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
        NombreCurso: 'Nombre por defecto',
        TamañoNombre:'10',
        ColorNombre:'#000000',
        PosicionNombreY:'0',
        PosicionNombreX:'',
        //******** */
        Cedula:'XX.XXX.XXX',
        TamañoCedula:'10',
        ColorCedula:'#000000',
        PosicionCedulaY:'0',
        PosicionCedulaX:'',
        /********* */
        Fecha:'DD/MM/AAAA',
        TamañoFecha:'10',
        ColorFecha:'#000000',
        PosicionFechaY:'0',
        PosicionFechaX:'0',
        /********* */ 
        Texto1: '',
        Tamaño1: '10',
        Color1: '#000000',
        Posicion1Y: '0',
        Posicion1X:'0',
        /********* */
        Texto2: '',
        Tamaño2: '10',
        Color2: '#000000',
        Posicion2Y: '0',
        Posicion2X:'0',
        /********* */
        Texto3: '',
        Tamaño3: '10',
        Color3: '#000000',
        Posicion3Y: '0',
        Posicion3X:'0',
        /********* */
        /********* */
        Texto4: '',
        Tamaño4: '10',
        Color4: '#000000',
        Posicion4Y: '0',
        Posicion4X:'0',
        /********* */        
      
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
        {value: null, text: "Por favor seleccione un campo a configuar", disabled: true},
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
      axios.get("https://cnbcolombia.com/node/ApiACNB/cursos"+"/ListaDiploma").then (response =>{
        this.ListDiplomas = response.data
        this.optionsDiploma = response.data
        console.log("ListDiplomas222",process.env.VUE_APP_API_URL)
        console.log("ListDiplomas",response.data)
      })
      .catch (e => console.log("error",e))     
     },

    /*************Methodo que llama la API para llenar array de cursos virtuales del CNB */
    getCursos(){
      axios.get("https://cnbcolombia.com/node/ApiACNB/cursos").then (response =>{
        this.cursovirtual = response.data
        console.log("url",process.env.VUE_APP_API_URL)
        console.log("cursos",response.data)
      })
      .catch (e => console.log("error",e))

    },
    /*************Methodo que llamar a la API utilizado para eliminar el curso seleccionado */
    AñadirCursos(NuevoCurso){
      axios.post("https://cnbcolombia.com/node/ApiACNB/cursos",{NuevoCurso}).then (response =>{
          
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

    EditarCurso (index,text,estado,Horas,diploma,data)
    { 

      //console.log("este es el diploma:", diploma)
      //se limpia el formulario modal
      this.resetModal();

        this.IdEdicion = index      
        this.nameEditar = text
        this.nameEditarHoras = Horas
        this.Diploma= diploma

        this.formData.PosicionNombreY = data.PosicionNombre
        this.formData.ColorNombre = data.ColorNombre
        this.formData.TamañoNombre = data.TamañoNombre

        this.formData.PosicionCedulaY = data.PosicionId
        this.formData.ColorCedula = data.ColorId
        this.formData.TamañoCedula = data.TamañoId

        this.formData.PosicionFechaY = data.PosicionFecha
        this.formData.ColorFecha = data.ColorFecha
        this.formData.TamañoFecha = data.TamañoFecha

        this.formData.Texto1 = data.Texto1
        this.formData.Posicion1Y = data.Posicion1
        this.formData.Color1 = data.Color1
        this.formData.Tamaño1 = data.Tamaño1

        this.formData.Texto2 = data.Texto2
        this.formData.Posicion2Y = data.Posicion2
        this.formData.Color2 = data.Color2
        this.formData.Tamaño2 = data.Tamaño2

        this.formData.Texto3 = data.Texto3
        this.formData.Posicion3Y = data.Posicion3
        this.formData.Color3 = data.Color3
        this.formData.Tamaño3 = data.Tamaño3

        this.formData.Texto4 = data.Texto4
        this.formData.Posicion4Y = data.Posicion4
        this.formData.Color4 = data.Color4
        this.formData.Tamaño4 = data.Tamaño4        




       // this.formData.TamañoNombre = this.cursovirtual 

        console.log("index:",this.formData.PosicionNombreY)


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
      const Po1 = this.formData.Posicion1Y
      const Co1 = this.formData.Color1
      //--
      //--
      const Te2 = this.formData.Texto2
      const Ta2 = this.formData.Tamaño2
      const Po2 = this.formData.Posicion2Y
      const Co2 = this.formData.Color2
      //--
      //--
      const Te3 = this.formData.Texto3
      const Ta3 = this.formData.Tamaño3
      const Po3 = this.formData.Posicion3Y
      const Co3 = this.formData.Color3

      
      const Te4 = this.formData.Texto4
      const Ta4 = this.formData.Tamaño4
      const Po4 = this.formData.Posicion4Y
      const Co4 = this.formData.Color4      
      //--      
      //--
      //const NomCur = formData.NombreCurso
      const TaNom = this.formData.TamañoNombre
      const PoNom = this.formData.PosicionNombreY
      const CoNom = this.formData.ColorNombre
      //--
      //--
      //const Cedu = formData.Cedula
      const TaCedu = this.formData.TamañoCedula
      const PoCedu = this.formData.PosicionCedulaY
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
        position: 'absolute',
        top: top + 'px',
        left: left + 'px',
        marginBottom: '0'
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

    async CambiaDiploma(){

      //console.log("Tamaño:",this.Diploma.length)

    if(this.Diploma.length === undefined)
    {
      this.SelectDiploma = this.Diploma
      console.log("this.SelectDiploma:",this.SelectDiploma)


      this.FondoImg = this.ListDiplomas.filter((item) => item.value ===this.SelectDiploma)
      this.SelectDiploma = this.FondoImg[0].FondoDiploma
      this.CodigoDiploma = this.FondoImg[0].value
      this.NombreDiploma = this.FondoImg[0].text

     
      console.log("this.FondoImg:",this.FondoImg)
      console.log("this.Diploma:",this.Diploma)

      const dimensions = await this.getImageDimensions(this.SelectDiploma);
      this.anchoimg = dimensions.width
      this.altoimg = dimensions.height
      // console.log('Ancho:', dimensions.width, 'px');
      // console.log('Alto:', dimensions.height, 'px');

      //console.log("valor:",this.CodigoDiploma, "Nombre:",this.NombreDiploma)
    }else{
      this.SelectDiploma = this.Diploma
    }



    },


    getImageDimensions(base64Image) {
    return new Promise((resolve, reject) => {
        const img = new Image(); // Crear un elemento de imagen
        
        img.onload = () => {
            // Obtener las dimensiones una vez que la imagen se cargue
            const width = img.width;
            const height = img.height;
            resolve({ width, height });
        };
        
        img.onerror = () => {
            reject(new Error("Error al cargar la imagen"));
        };
        
        // Asignar el contenido Base64 al src del elemento Image
        img.src = base64Image;
    });
},


    validateInput(field, min, max) {
      if (this.formData[field] < min) { 
           this.formData[field] = min; 
      } else if (this.formData[field] > max){
        this.formData[field] = max;
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