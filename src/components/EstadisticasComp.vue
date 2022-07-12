<template>

    <div>   
        <h1>ESTADISTICAS RETHUS</h1>     
    <br/>        
    <div>
            <b-form-group id="input-group-2" label-for="input-2">
            <b-input-group prepend="Seleccione tipo de estadística:" class="mb-2 mr-sm-2 mb-sm-0">
                <b-form-select v-model="selected" :options="options" class="mb-2 mr-sm-2 mb-sm-0">
                    <template v-slot:first>
                            <b-form-select-option :value="null" disabled>-- Por favor seleccione tipo de estadística --</b-form-select-option>
                    </template>  
                </b-form-select>
            </b-input-group>         
            </b-form-group>     
    </div>       

    <!-- //Input para buscar por nombre de participanta --> 
    <b-row>
        <b-col md="3">
          <input type="date" placeholder="Fecha Inicial" class="form-control" v-model="fechainicial">                    
        </b-col>
         <b-col md="3">
          <input type="date" placeholder="Fecha Final" class="form-control" v-model="fechafin">                    
        </b-col> 
         <b-col md="3">
                 <b-button variant="outline-success" v-on:click= "getEstadistica" >Consultar</b-button>
        </b-col>      
        <b-col md="6">
            <th scope="col">Cantidad de Resultados<h5 style="color:red ;text-align:center; width:100px margin:1">{{listar.length}}</h5></th>
        </b-col>


    </b-row>

    <br/>
    <b-row class="bg-dark"> 
        <b-col cols="6"><p class="text-light">DESCRIPCIÓN</p></b-col>
        <!-- <b-col ><p class="text-light">CALIFICACION</p></b-col> -->
        <b-col ><p class="text-light">CANTIDAD</p></b-col>
        <!--<b-col ><p class="text-light">NROID</p></b-col>
        <b-col ><p class="text-light"></p></b-col>-->
    </b-row>
    <b-row class="border" v-for="(item,index) of listar" :key='index' >
        <b-col cols="6">{{item.NombreDescripcion}}</b-col>
        <!-- <b-col>{{item.nota}}</b-col> -->
        <b-col>{{item.Cantidad}}</b-col>
        <!--<b-col>{{item.nroid}}</b-col>
        <b-col><router-link :to="{name:'certificado',params: {id: item.nombre + '|'+item.tipoid +'|'+ item.nroid + '|' + item.NombreCurso }}">
                    <button class="bg-danger text-white" @click="Desinscribir(item.tipoid,item.nroid)">Desinscribir</button>
                </router-link>
        </b-col>-->
    </b-row>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>


    <div>
        <b-modal ok-only id="modal-xl" size="xl" title="IMPRESIÓN DE CERTIFICADOS DE CURSOS VIRTUALES"  >
             <div  id ="divRef" ref="content">                  
                <img  src="@/assets/tamano3.png" alt="Certificación" style=”display:none” >  
                      
              </div>                    
               <br/> 
               <button @click="downloadWithCSS($route.params.id)" type="button" class="btn btn-danger">Descargar Certificadoqq</button>
        </b-modal>
    </div>
 
</div>
</template>


<script>
import {mapState,mapMutations} from 'vuex'  
import jsPDF from 'jspdf' 
import html2canvas from "html2canvas"
import axios from 'axios'


export default {
    name: 'Certificadocom',
    data: function () {
        return {
        buscar: '',
        buscarId: '',
        selected: null,
        cursovirtual: [],
        options: [
          //{ value: null, text: 'Por favor seleccione una opción' },
          { value: '1', text: 'TARJETA PRIMERA VEZ' },
          { value: '2', text: 'DUPLICADO' },
          { value: '3', text:'ACTUALIZACIÓN' },
          { value: '4', text:'REGISTRO TOTAL RETHUS ' }        
        ],
        fechainicial:'',
        fechafin:'',
        estadistica:[]
        }
    },

    computed:{
        ...mapState(['participante','curso']),
        
        //Se fitran tipos de estadisticas
        listar: function() {
            //return this.estadistica.filter((item) => item.tipo == this.selected && item.nroid.includes(this.buscarId));
            return this.estadistica.filter((item) => item.Tipo == this.selected);       
        }
    },
    methods: {
        
        /*************Methodo que llama la API para llenar estadisticas */
        getEstadistica(){
                axios.get('https://cnbcolombia.com/node/ApiACNB/participantes/rethus',{
                params: {
                    fechainicial: this.fechainicial,
                    fechafin: this.fechafin
                }
                }).then (response =>{
                    //console.log("esta es la prueba:", response.data)
                    this.estadistica = response.data
                })
                .catch (e => console.log(e))
        },        


        downloadWithCSS(nombre) {

                var arrayDatos = nombre.split('|');

                const doc = new jsPDF("l", "pt", "letter");
                /** WITH CSS */  
                var canvasElement = document.createElement('canvas');
                var width = doc.internal.pageSize.getWidth();
                var height = doc.internal.pageSize.getHeight();
                canvasElement.width = width;
                canvasElement.height = height;
                
            html2canvas(this.$refs.content, { canvas: canvasElement 
            }).then(function (canvas) {
            const img = canvas.toDataURL("image/png", 1.0);
            var doc = new jsPDF("l", "pt", "letter");


            var lMargin=15; //left margin in mm
            var rMargin=15; //right margin in mm
            var pdfInMM=800;  // width of A4 in mm
            var pageCenter=pdfInMM/2;

            
            var paragraph= arrayDatos[0];
            var paragraph2= "Certifica Quesssssss:";
            var paragraph3= "Asistió y completo con éxito el curso de:" + "\n" ;
            var paragraph4 = "realizado por el Colegio Nacional de Bacteriologia CNB COLOMBIA" + "\n"
            var paragraph5 = "A través del Campus Virtual, con una intzzzzzensidad horaria de 25 horas";
            var paragraph6 = arrayDatos[1];
            var paragraph7 = arrayDatos[2];
            var paragraph8 = arrayDatos[3];
            
    
            var otorgado  = doc.splitTextToSize(paragraph, (pdfInMM-lMargin-rMargin));
            var certifica = doc.splitTextToSize(paragraph2, (pdfInMM-lMargin-rMargin));
            var asistio = doc.splitTextToSize(paragraph3, (pdfInMM-lMargin-rMargin));
            var asistio2 = doc.splitTextToSize(paragraph4, (pdfInMM-lMargin-rMargin));
            var atraves = doc.splitTextToSize(paragraph5, (pdfInMM-lMargin-rMargin));
            var tipoid = doc.splitTextToSize(paragraph6, (pdfInMM-lMargin-rMargin));
            var nroid = doc.splitTextToSize(paragraph7, (pdfInMM-lMargin-rMargin));
            var curso = doc.splitTextToSize(paragraph8, (pdfInMM-lMargin-rMargin));

            doc.addImage(img,'png',20,20,770,590);
            //doc.addImage(img,'png',20,20);
            
            doc.setFontSize(18);
            doc.setTextColor(128,128,128);
            //doc.setFontType("bold");
            doc.text(certifica,pageCenter,240,'center'); //see this line
            
            //doc.setFont("Algerian");
            //doc.setFontType("bold");
            doc.setTextColor(0,0,0);
            doc.setFontSize(18);
            doc.text(otorgado,pageCenter,270,'center'); //see this line
            doc.text(tipoid +'. '+nroid,pageCenter,295,'center'); //see this line


            doc.setFontSize(18);
            doc.setTextColor(128,128,128);
            //doc.text(350,240, "Certifica Que:");
            doc.text(asistio,pageCenter,320,'center'); //see this line

            doc.setTextColor(0,0,0);
            doc.setFontType("bold");
            doc.text(curso,pageCenter,345,'center'); //see this line)

            doc.setFontType("normal");
            doc.setFontSize(18);
            doc.setTextColor(128,128,128);
            //doc.text(350,240, "Certifica Que:");
            doc.text(asistio2,pageCenter,370,'center'); //see this line

            doc.setFontSize(13);
            doc.setTextColor(128,128,128);
            //doc.text(350,240, "Certifica Que:");
            doc.text(atraves,pageCenter,400,'center'); //see this line            
            
            doc.save("sample.pdf"); 
        });
        } ,
    },

}
</script>

<style scoped>

 #canvas{
    background: yellow; 
} 




</style>