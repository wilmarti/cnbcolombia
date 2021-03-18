<template>
  <div>
    <button @click="addNode">Add Node</button>
    <vue-tree-list
      @click="onClick"
      @change-name="onChangeName"
      @delete-node="onDel"
      @add-node="onAddNode"
      :model="data"
      default-tree-node-name="new node"
      default-leaf-node-name="new leaf"
      v-bind:default-expanded="false"
    >
      <template v-slot:leafNameDisplay="slotProps">
        <span>
          {{ slotProps.model.name }} <span class="muted">#{{ slotProps.model.id }}</span>
        </span>
      </template>
      <span class="icon" slot="addTreeNodeIcon">📂</span>
      <span class="icon" slot="addLeafNodeIcon">＋</span>
      <span class="icon" slot="editNodeIcon">📃</span>
      <span class="icon" slot="delNodeIcon">✂️</span>
      <span class="icon" slot="leafNodeIcon">🍃</span>
      <span class="icon" slot="treeNodeIcon">🌲</span>
    </vue-tree-list>
    <button @click="getNewTree">Get new tree</button>
    <pre>
      {{newTree}}
    </pre>
  </div>
</template>
 
<script>
  import { VueTreeList, Tree, TreeNode } from 'vue-tree-list'
  export default {
    components: {
      VueTreeList
    },
    data() {
      return {
        newTree: {},
        data: new Tree([
  {
    "id": "0",
    "name": "root",
    "children": [
      {
        "id": "05",
        "isLeaf": 0,
        "name": "ANTIOQUIA",
        "children": [
          {
            "id": "05001",
            "isLeaf": 1,
            "name": "MEDELLÍN"
          },
          {
            "id": "05002",
            "isLeaf": 1,
            "name": "ABEJORRAL"
          },
          {
            "id": "05004",
            "isLeaf": 1,
            "name": "ABRIAQUÍ"
          },
          {
            "id": "05021",
            "isLeaf": 1,
            "name": "ALEJANDRÍA"
          },
          {
            "id": "05030",
            "isLeaf": 1,
            "name": "AMAGÁ"
          },
          {
            "id": "05031",
            "isLeaf": 1,
            "name": "AMALFI"
          },
          {
            "id": "05034",
            "isLeaf": 1,
            "name": "ANDES"
          },
          {
            "id": "05036",
            "isLeaf": 1,
            "name": "ANGELÓPOLIS"
          },
          {
            "id": "05038",
            "isLeaf": 1,
            "name": "ANGOSTURA"
          },
          {
            "id": "05040",
            "isLeaf": 1,
            "name": "ANORÍ"
          },
          {
            "id": "05042",
            "isLeaf": 1,
            "name": "SANTA FÉ DE ANTIOQUIA"
          },
          {
            "id": "05044",
            "isLeaf": 1,
            "name": "ANZÁ"
          },
          {
            "id": "05045",
            "isLeaf": 1,
            "name": "APARTADÓ"
          },
          {
            "id": "05051",
            "isLeaf": 1,
            "name": "ARBOLETES"
          },
          {
            "id": "05055",
            "isLeaf": 1,
            "name": "ARGELIA"
          },
          {
            "id": "05059",
            "isLeaf": 1,
            "name": "ARMENIA"
          },
          {
            "id": "05079",
            "isLeaf": 1,
            "name": "BARBOSA"
          },
          {
            "id": "05086",
            "isLeaf": 1,
            "name": "BELMIRA"
          },
          {
            "id": "05088",
            "isLeaf": 1,
            "name": "BELLO"
          },
          {
            "id": "05091",
            "isLeaf": 1,
            "name": "BETANIA"
          },
          {
            "id": "05093",
            "isLeaf": 1,
            "name": "BETULIA"
          },
          {
            "id": "05101",
            "isLeaf": 1,
            "name": "CIUDAD BOLÍVAR"
          },
          {
            "id": "05107",
            "isLeaf": 1,
            "name": "BRICEÑO"
          },
          {
            "id": "05113",
            "isLeaf": 1,
            "name": "BURITICÁ"
          },
          {
            "id": "05120",
            "isLeaf": 1,
            "name": "CÁCERES"
          },
          {
            "id": "05125",
            "isLeaf": 1,
            "name": "CAICEDO"
          },
          {
            "id": "05129",
            "isLeaf": 1,
            "name": "CALDAS"
          },
          {
            "id": "05134",
            "isLeaf": 1,
            "name": "CAMPAMENTO"
          },
          {
            "id": "05138",
            "isLeaf": 1,
            "name": "CAÑASGORDAS"
          },
          {
            "id": "05142",
            "isLeaf": 1,
            "name": "CARACOLÍ"
          },
          {
            "id": "05145",
            "isLeaf": 1,
            "name": "CARAMANTA"
          },
          {
            "id": "05147",
            "isLeaf": 1,
            "name": "CAREPA"
          },
          {
            "id": "05148",
            "isLeaf": 1,
            "name": "EL CARMEN DE VIBORAL"
          },
          {
            "id": "05150",
            "isLeaf": 1,
            "name": "CAROLINA"
          },
          {
            "id": "05154",
            "isLeaf": 1,
            "name": "CAUCASIA"
          },
          {
            "id": "05172",
            "isLeaf": 1,
            "name": "CHIGORODÓ"
          },
          {
            "id": "05190",
            "isLeaf": 1,
            "name": "CISNEROS"
          },
          {
            "id": "05197",
            "isLeaf": 1,
            "name": "COCORNÁ"
          },
          {
            "id": "05206",
            "isLeaf": 1,
            "name": "CONCEPCIÓN"
          },
          {
            "id": "05209",
            "isLeaf": 1,
            "name": "CONCORDIA"
          },
          {
            "id": "05212",
            "isLeaf": 1,
            "name": "COPACABANA"
          },
          {
            "id": "05234",
            "isLeaf": 1,
            "name": "DABEIBA"
          },
          {
            "id": "05237",
            "isLeaf": 1,
            "name": "DONMATÍAS"
          },
          {
            "id": "05240",
            "isLeaf": 1,
            "name": "EBÉJICO"
          },
          {
            "id": "05250",
            "isLeaf": 1,
            "name": "EL BAGRE"
          },
          {
            "id": "05264",
            "isLeaf": 1,
            "name": "ENTRERRÍOS"
          },
          {
            "id": "05266",
            "isLeaf": 1,
            "name": "ENVIGADO"
          },
          {
            "id": "05282",
            "isLeaf": 1,
            "name": "FREDONIA"
          },
          {
            "id": "05284",
            "isLeaf": 1,
            "name": "FRONTINO"
          },
          {
            "id": "05306",
            "isLeaf": 1,
            "name": "GIRALDO"
          },
          {
            "id": "05308",
            "isLeaf": 1,
            "name": "GIRARDOTA"
          },
          {
            "id": "05310",
            "isLeaf": 1,
            "name": "GÓMEZ PLATA"
          },
          {
            "id": "05313",
            "isLeaf": 1,
            "name": "GRANADA"
          },
          {
            "id": "05315",
            "isLeaf": 1,
            "name": "GUADALUPE"
          },
          {
            "id": "05318",
            "isLeaf": 1,
            "name": "GUARNE"
          },
          {
            "id": "05321",
            "isLeaf": 1,
            "name": "GUATAPÉ"
          },
          {
            "id": "05347",
            "isLeaf": 1,
            "name": "HELICONIA"
          },
          {
            "id": "05353",
            "isLeaf": 1,
            "name": "HISPANIA"
          },
          {
            "id": "05360",
            "isLeaf": 1,
            "name": "ITAGÜÍ"
          },
          {
            "id": "05361",
            "isLeaf": 1,
            "name": "ITUANGO"
          },
          {
            "id": "05364",
            "isLeaf": 1,
            "name": "JARDÍN"
          },
          {
            "id": "05368",
            "isLeaf": 1,
            "name": "JERICÓ"
          },
          {
            "id": "05376",
            "isLeaf": 1,
            "name": "LA CEJA"
          },
          {
            "id": "05380",
            "isLeaf": 1,
            "name": "LA ESTRELLA"
          },
          {
            "id": "05390",
            "isLeaf": 1,
            "name": "LA PINTADA"
          },
          {
            "id": "05400",
            "isLeaf": 1,
            "name": "LA UNIÓN"
          },
          {
            "id": "05411",
            "isLeaf": 1,
            "name": "LIBORINA"
          },
          {
            "id": "05425",
            "isLeaf": 1,
            "name": "MACEO"
          },
          {
            "id": "05440",
            "isLeaf": 1,
            "name": "MARINILLA"
          },
          {
            "id": "05467",
            "isLeaf": 1,
            "name": "MONTEBELLO"
          },
          {
            "id": "05475",
            "isLeaf": 1,
            "name": "MURINDÓ"
          },
          {
            "id": "05480",
            "isLeaf": 1,
            "name": "MUTATÁ"
          },
          {
            "id": "05483",
            "isLeaf": 1,
            "name": "NARIÑO"
          },
          {
            "id": "05490",
            "isLeaf": 1,
            "name": "NECOCLÍ"
          },
          {
            "id": "05495",
            "isLeaf": 1,
            "name": "NECHÍ"
          },
          {
            "id": "05501",
            "isLeaf": 1,
            "name": "OLAYA"
          },
          {
            "id": "05541",
            "isLeaf": 1,
            "name": "PEÑOL"
          },
          {
            "id": "05543",
            "isLeaf": 1,
            "name": "PEQUE"
          },
          {
            "id": "05576",
            "isLeaf": 1,
            "name": "PUEBLORRICO"
          },
          {
            "id": "05579",
            "isLeaf": 1,
            "name": "PUERTO BERRÍO"
          },
          {
            "id": "05585",
            "isLeaf": 1,
            "name": "PUERTO NARE"
          },
          {
            "id": "05591",
            "isLeaf": 1,
            "name": "PUERTO TRIUNFO"
          },
          {
            "id": "05604",
            "isLeaf": 1,
            "name": "REMEDIOS"
          },
          {
            "id": "05607",
            "isLeaf": 1,
            "name": "RETIRO"
          },
          {
            "id": "05615",
            "isLeaf": 1,
            "name": "RIONEGRO"
          },
          {
            "id": "05628",
            "isLeaf": 1,
            "name": "SABANALARGA"
          },
          {
            "id": "05631",
            "isLeaf": 1,
            "name": "SABANETA"
          },
          {
            "id": "05642",
            "isLeaf": 1,
            "name": "SALGAR"
          },
          {
            "id": "05647",
            "isLeaf": 1,
            "name": "SAN ANDRÉS DE CUERQUÍA"
          },
          {
            "id": "05649",
            "isLeaf": 1,
            "name": "SAN CARLOS"
          },
          {
            "id": "05652",
            "isLeaf": 1,
            "name": "SAN FRANCISCO"
          },
          {
            "id": "05656",
            "isLeaf": 1,
            "name": "SAN JERÓNIMO"
          },
          {
            "id": "05658",
            "isLeaf": 1,
            "name": "SAN JOSÉ DE LA MONTAÑA"
          },
          {
            "id": "05659",
            "isLeaf": 1,
            "name": "SAN JUAN DE URABÁ"
          },
          {
            "id": "05660",
            "isLeaf": 1,
            "name": "SAN LUIS"
          },
          {
            "id": "05664",
            "isLeaf": 1,
            "name": "SAN PEDRO DE LOS MILAGROS"
          },
          {
            "id": "05665",
            "isLeaf": 1,
            "name": "SAN PEDRO DE URABÁ"
          },
          {
            "id": "05667",
            "isLeaf": 1,
            "name": "SAN RAFAEL"
          },
          {
            "id": "05670",
            "isLeaf": 1,
            "name": "SAN ROQUE"
          },
          {
            "id": "05674",
            "isLeaf": 1,
            "name": "SAN VICENTE FERRER"
          },
          {
            "id": "05679",
            "isLeaf": 1,
            "name": "SANTA BÁRBARA"
          },
          {
            "id": "05686",
            "isLeaf": 1,
            "name": "SANTA ROSA DE OSOS"
          },
          {
            "id": "05690",
            "isLeaf": 1,
            "name": "SANTO DOMINGO"
          },
          {
            "id": "05697",
            "isLeaf": 1,
            "name": "EL SANTUARIO"
          },
          {
            "id": "05736",
            "isLeaf": 1,
            "name": "SEGOVIA"
          },
          {
            "id": "05756",
            "isLeaf": 1,
            "name": "SONSÓN"
          },
          {
            "id": "05761",
            "isLeaf": 1,
            "name": "SOPETRÁN"
          },
          {
            "id": "05789",
            "isLeaf": 1,
            "name": "TÁMESIS"
          },
          {
            "id": "05790",
            "isLeaf": 1,
            "name": "TARAZÁ"
          },
          {
            "id": "05792",
            "isLeaf": 1,
            "name": "TARSO"
          },
          {
            "id": "05809",
            "isLeaf": 1,
            "name": "TITIRIBÍ"
          },
          {
            "id": "05819",
            "isLeaf": 1,
            "name": "TOLEDO"
          },
          {
            "id": "05837",
            "isLeaf": 1,
            "name": "TURBO"
          },
          {
            "id": "05842",
            "isLeaf": 1,
            "name": "URAMITA"
          },
          {
            "id": "05847",
            "isLeaf": 1,
            "name": "URRAO"
          },
          {
            "id": "05854",
            "isLeaf": 1,
            "name": "VALDIVIA"
          },
          {
            "id": "05856",
            "isLeaf": 1,
            "name": "VALPARAÍSO"
          },
          {
            "id": "05858",
            "isLeaf": 1,
            "name": "VEGACHÍ"
          },
          {
            "id": "05861",
            "isLeaf": 1,
            "name": "VENECIA"
          },
          {
            "id": "05873",
            "isLeaf": 1,
            "name": "VIGÍA DEL FUERTE"
          },
          {
            "id": "05885",
            "isLeaf": 1,
            "name": "YALÍ"
          },
          {
            "id": "05887",
            "isLeaf": 1,
            "name": "YARUMAL"
          },
          {
            "id": "05890",
            "isLeaf": 1,
            "name": "YOLOMBÓ"
          },
          {
            "id": "05893",
            "isLeaf": 1,
            "name": "YONDÓ"
          },
          {
            "id": "05895",
            "isLeaf": 1,
            "name": "ZARAGOZA"
          }
        ]
      },
      {
        "id": "08",
        "isLeaf": 0,
        "name": "ATLÁNTICO",
        "children": [
          {
            "id": "08001",
            "isLeaf": 1,
            "name": "BARRANQUILLA"
          },
          {
            "id": "08078",
            "isLeaf": 1,
            "name": "BARANOA"
          },
          {
            "id": "08137",
            "isLeaf": 1,
            "name": "CAMPO DE LA CRUZ"
          },
          {
            "id": "08141",
            "isLeaf": 1,
            "name": "CANDELARIA"
          },
          {
            "id": "08296",
            "isLeaf": 1,
            "name": "GALAPA"
          },
          {
            "id": "08372",
            "isLeaf": 1,
            "name": "JUAN DE ACOSTA"
          },
          {
            "id": "08421",
            "isLeaf": 1,
            "name": "LURUACO"
          },
          {
            "id": "08433",
            "isLeaf": 1,
            "name": "MALAMBO"
          },
          {
            "id": "08436",
            "isLeaf": 1,
            "name": "MANATÍ"
          },
          {
            "id": "08520",
            "isLeaf": 1,
            "name": "PALMAR DE VARELA"
          },
          {
            "id": "08549",
            "isLeaf": 1,
            "name": "PIOJÓ"
          },
          {
            "id": "08558",
            "isLeaf": 1,
            "name": "POLONUEVO"
          },
          {
            "id": "08560",
            "isLeaf": 1,
            "name": "PONEDERA"
          },
          {
            "id": "08573",
            "isLeaf": 1,
            "name": "PUERTO COLOMBIA"
          },
          {
            "id": "08606",
            "isLeaf": 1,
            "name": "REPELÓN"
          },
          {
            "id": "08634",
            "isLeaf": 1,
            "name": "SABANAGRANDE"
          },
          {
            "id": "08638",
            "isLeaf": 1,
            "name": "SABANALARGA"
          },
          {
            "id": "08675",
            "isLeaf": 1,
            "name": "SANTA LUCÍA"
          },
          {
            "id": "08685",
            "isLeaf": 1,
            "name": "SANTO TOMÁS"
          },
          {
            "id": "08758",
            "isLeaf": 1,
            "name": "SOLEDAD"
          },
          {
            "id": "08770",
            "isLeaf": 1,
            "name": "SUAN"
          },
          {
            "id": "08832",
            "isLeaf": 1,
            "name": "TUBARÁ"
          },
          {
            "id": "08849",
            "isLeaf": 1,
            "name": "USIACURÍ"
          }
        ]
      },
      {
        "id": "11",
        "isLeaf": 0,
        "name": "BOGOTÁ, D.C.",
        "children": [
          {
            "id": "11001",
            "isLeaf": 1,
            "name": "BOGOTÁ, D.C."
          }
        ]
      },
      {
        "id": "13",
        "isLeaf": 0,
        "name": "BOLÍVAR",
        "children": [
          {
            "id": "13001",
            "isLeaf": 1,
            "name": "CARTAGENA DE INDIAS"
          },
          {
            "id": "13006",
            "isLeaf": 1,
            "name": "ACHÍ"
          },
          {
            "id": "13030",
            "isLeaf": 1,
            "name": "ALTOS DEL ROSARIO"
          },
          {
            "id": "13042",
            "isLeaf": 1,
            "name": "ARENAL"
          },
          {
            "id": "13052",
            "isLeaf": 1,
            "name": "ARJONA"
          },
          {
            "id": "13062",
            "isLeaf": 1,
            "name": "ARROYOHONDO"
          },
          {
            "id": "13074",
            "isLeaf": 1,
            "name": "BARRANCO DE LOBA"
          },
          {
            "id": "13140",
            "isLeaf": 1,
            "name": "CALAMAR"
          },
          {
            "id": "13160",
            "isLeaf": 1,
            "name": "CANTAGALLO"
          },
          {
            "id": "13188",
            "isLeaf": 1,
            "name": "CICUCO"
          },
          {
            "id": "13212",
            "isLeaf": 1,
            "name": "CÓRDOBA"
          },
          {
            "id": "13222",
            "isLeaf": 1,
            "name": "CLEMENCIA"
          },
          {
            "id": "13244",
            "isLeaf": 1,
            "name": "EL CARMEN DE BOLÍVAR"
          },
          {
            "id": "13248",
            "isLeaf": 1,
            "name": "EL GUAMO"
          },
          {
            "id": "13268",
            "isLeaf": 1,
            "name": "EL PEÑÓN"
          },
          {
            "id": "13300",
            "isLeaf": 1,
            "name": "HATILLO DE LOBA"
          },
          {
            "id": "13430",
            "isLeaf": 1,
            "name": "MAGANGUÉ"
          },
          {
            "id": "13433",
            "isLeaf": 1,
            "name": "MAHATES"
          },
          {
            "id": "13440",
            "isLeaf": 1,
            "name": "MARGARITA"
          },
          {
            "id": "13442",
            "isLeaf": 1,
            "name": "MARÍA LA BAJA"
          },
          {
            "id": "13458",
            "isLeaf": 1,
            "name": "MONTECRISTO"
          },
          {
            "id": "13468",
            "isLeaf": 1,
            "name": "MOMPÓS"
          },
          {
            "id": "13473",
            "isLeaf": 1,
            "name": "MORALES"
          },
          {
            "id": "13490",
            "isLeaf": 1,
            "name": "NOROSÍ"
          },
          {
            "id": "13549",
            "isLeaf": 1,
            "name": "PINILLOS"
          },
          {
            "id": "13580",
            "isLeaf": 1,
            "name": "REGIDOR"
          },
          {
            "id": "13600",
            "isLeaf": 1,
            "name": "RÍO VIEJO"
          },
          {
            "id": "13620",
            "isLeaf": 1,
            "name": "SAN CRISTÓBAL"
          },
          {
            "id": "13647",
            "isLeaf": 1,
            "name": "SAN ESTANISLAO"
          },
          {
            "id": "13650",
            "isLeaf": 1,
            "name": "SAN FERNANDO"
          },
          {
            "id": "13654",
            "isLeaf": 1,
            "name": "SAN JACINTO"
          },
          {
            "id": "13655",
            "isLeaf": 1,
            "name": "SAN JACINTO DEL CAUCA"
          },
          {
            "id": "13657",
            "isLeaf": 1,
            "name": "SAN JUAN NEPOMUCENO"
          },
          {
            "id": "13667",
            "isLeaf": 1,
            "name": "SAN MARTÍN DE LOBA"
          },
          {
            "id": "13670",
            "isLeaf": 1,
            "name": "SAN PABLO"
          },
          {
            "id": "13673",
            "isLeaf": 1,
            "name": "SANTA CATALINA"
          },
          {
            "id": "13683",
            "isLeaf": 1,
            "name": "SANTA ROSA"
          },
          {
            "id": "13688",
            "isLeaf": 1,
            "name": "SANTA ROSA DEL SUR"
          },
          {
            "id": "13744",
            "isLeaf": 1,
            "name": "SIMITÍ"
          },
          {
            "id": "13760",
            "isLeaf": 1,
            "name": "SOPLAVIENTO"
          },
          {
            "id": "13780",
            "isLeaf": 1,
            "name": "TALAIGUA NUEVO"
          },
          {
            "id": "13810",
            "isLeaf": 1,
            "name": "TIQUISIO"
          },
          {
            "id": "13836",
            "isLeaf": 1,
            "name": "TURBACO"
          },
          {
            "id": "13838",
            "isLeaf": 1,
            "name": "TURBANÁ"
          },
          {
            "id": "13873",
            "isLeaf": 1,
            "name": "VILLANUEVA"
          },
          {
            "id": "13894",
            "isLeaf": 1,
            "name": "ZAMBRANO"
          }
        ]
      },
      {
        "id": "15",
        "isLeaf": 0,
        "name": "BOYACÁ",
        "children": [
          {
            "id": "15001",
            "isLeaf": 1,
            "name": "TUNJA"
          },
          {
            "id": "15022",
            "isLeaf": 1,
            "name": "ALMEIDA"
          },
          {
            "id": "15047",
            "isLeaf": 1,
            "name": "AQUITANIA"
          },
          {
            "id": "15051",
            "isLeaf": 1,
            "name": "ARCABUCO"
          },
          {
            "id": "15087",
            "isLeaf": 1,
            "name": "BELÉN"
          },
          {
            "id": "15090",
            "isLeaf": 1,
            "name": "BERBEO"
          },
          {
            "id": "15092",
            "isLeaf": 1,
            "name": "BETÉITIVA"
          },
          {
            "id": "15097",
            "isLeaf": 1,
            "name": "BOAVITA"
          },
          {
            "id": "15104",
            "isLeaf": 1,
            "name": "BOYACÁ"
          },
          {
            "id": "15106",
            "isLeaf": 1,
            "name": "BRICEÑO"
          },
          {
            "id": "15109",
            "isLeaf": 1,
            "name": "BUENAVISTA"
          },
          {
            "id": "15114",
            "isLeaf": 1,
            "name": "BUSBANZÁ"
          },
          {
            "id": "15131",
            "isLeaf": 1,
            "name": "CALDAS"
          },
          {
            "id": "15135",
            "isLeaf": 1,
            "name": "CAMPOHERMOSO"
          },
          {
            "id": "15162",
            "isLeaf": 1,
            "name": "CERINZA"
          },
          {
            "id": "15172",
            "isLeaf": 1,
            "name": "CHINAVITA"
          },
          {
            "id": "15176",
            "isLeaf": 1,
            "name": "CHIQUINQUIRÁ"
          },
          {
            "id": "15180",
            "isLeaf": 1,
            "name": "CHISCAS"
          },
          {
            "id": "15183",
            "isLeaf": 1,
            "name": "CHITA"
          },
          {
            "id": "15185",
            "isLeaf": 1,
            "name": "CHITARAQUE"
          },
          {
            "id": "15187",
            "isLeaf": 1,
            "name": "CHIVATÁ"
          },
          {
            "id": "15189",
            "isLeaf": 1,
            "name": "CIÉNEGA"
          },
          {
            "id": "15204",
            "isLeaf": 1,
            "name": "CÓMBITA"
          },
          {
            "id": "15212",
            "isLeaf": 1,
            "name": "COPER"
          },
          {
            "id": "15215",
            "isLeaf": 1,
            "name": "CORRALES"
          },
          {
            "id": "15218",
            "isLeaf": 1,
            "name": "COVARACHÍA"
          },
          {
            "id": "15223",
            "isLeaf": 1,
            "name": "CUBARÁ"
          },
          {
            "id": "15224",
            "isLeaf": 1,
            "name": "CUCAITA"
          },
          {
            "id": "15226",
            "isLeaf": 1,
            "name": "CUÍTIVA"
          },
          {
            "id": "15232",
            "isLeaf": 1,
            "name": "CHÍQUIZA"
          },
          {
            "id": "15236",
            "isLeaf": 1,
            "name": "CHIVOR"
          },
          {
            "id": "15238",
            "isLeaf": 1,
            "name": "DUITAMA"
          },
          {
            "id": "15244",
            "isLeaf": 1,
            "name": "EL COCUY"
          },
          {
            "id": "15248",
            "isLeaf": 1,
            "name": "EL ESPINO"
          },
          {
            "id": "15272",
            "isLeaf": 1,
            "name": "FIRAVITOBA"
          },
          {
            "id": "15276",
            "isLeaf": 1,
            "name": "FLORESTA"
          },
          {
            "id": "15293",
            "isLeaf": 1,
            "name": "GACHANTIVÁ"
          },
          {
            "id": "15296",
            "isLeaf": 1,
            "name": "GÁMEZA"
          },
          {
            "id": "15299",
            "isLeaf": 1,
            "name": "GARAGOA"
          },
          {
            "id": "15317",
            "isLeaf": 1,
            "name": "GUACAMAYAS"
          },
          {
            "id": "15322",
            "isLeaf": 1,
            "name": "GUATEQUE"
          },
          {
            "id": "15325",
            "isLeaf": 1,
            "name": "GUAYATÁ"
          },
          {
            "id": "15332",
            "isLeaf": 1,
            "name": "GÜICÁN DE LA SIERRA"
          },
          {
            "id": "15362",
            "isLeaf": 1,
            "name": "IZA"
          },
          {
            "id": "15367",
            "isLeaf": 1,
            "name": "JENESANO"
          },
          {
            "id": "15368",
            "isLeaf": 1,
            "name": "JERICÓ"
          },
          {
            "id": "15377",
            "isLeaf": 1,
            "name": "LABRANZAGRANDE"
          },
          {
            "id": "15380",
            "isLeaf": 1,
            "name": "LA CAPILLA"
          },
          {
            "id": "15401",
            "isLeaf": 1,
            "name": "LA VICTORIA"
          },
          {
            "id": "15403",
            "isLeaf": 1,
            "name": "LA UVITA"
          },
          {
            "id": "15407",
            "isLeaf": 1,
            "name": "VILLA DE LEYVA"
          },
          {
            "id": "15425",
            "isLeaf": 1,
            "name": "MACANAL"
          },
          {
            "id": "15442",
            "isLeaf": 1,
            "name": "MARIPÍ"
          },
          {
            "id": "15455",
            "isLeaf": 1,
            "name": "MIRAFLORES"
          },
          {
            "id": "15464",
            "isLeaf": 1,
            "name": "MONGUA"
          },
          {
            "id": "15466",
            "isLeaf": 1,
            "name": "MONGUÍ"
          },
          {
            "id": "15469",
            "isLeaf": 1,
            "name": "MONIQUIRÁ"
          },
          {
            "id": "15476",
            "isLeaf": 1,
            "name": "MOTAVITA"
          },
          {
            "id": "15480",
            "isLeaf": 1,
            "name": "MUZO"
          },
          {
            "id": "15491",
            "isLeaf": 1,
            "name": "NOBSA"
          },
          {
            "id": "15494",
            "isLeaf": 1,
            "name": "NUEVO COLÓN"
          },
          {
            "id": "15500",
            "isLeaf": 1,
            "name": "OICATÁ"
          },
          {
            "id": "15507",
            "isLeaf": 1,
            "name": "OTANCHE"
          },
          {
            "id": "15511",
            "isLeaf": 1,
            "name": "PACHAVITA"
          },
          {
            "id": "15514",
            "isLeaf": 1,
            "name": "PÁEZ"
          },
          {
            "id": "15516",
            "isLeaf": 1,
            "name": "PAIPA"
          },
          {
            "id": "15518",
            "isLeaf": 1,
            "name": "PAJARITO"
          },
          {
            "id": "15522",
            "isLeaf": 1,
            "name": "PANQUEBA"
          },
          {
            "id": "15531",
            "isLeaf": 1,
            "name": "PAUNA"
          },
          {
            "id": "15533",
            "isLeaf": 1,
            "name": "PAYA"
          },
          {
            "id": "15537",
            "isLeaf": 1,
            "name": "PAZ DE RÍO"
          },
          {
            "id": "15542",
            "isLeaf": 1,
            "name": "PESCA"
          },
          {
            "id": "15550",
            "isLeaf": 1,
            "name": "PISBA"
          },
          {
            "id": "15572",
            "isLeaf": 1,
            "name": "PUERTO BOYACÁ"
          },
          {
            "id": "15580",
            "isLeaf": 1,
            "name": "QUÍPAMA"
          },
          {
            "id": "15599",
            "isLeaf": 1,
            "name": "RAMIRIQUÍ"
          },
          {
            "id": "15600",
            "isLeaf": 1,
            "name": "RÁQUIRA"
          },
          {
            "id": "15621",
            "isLeaf": 1,
            "name": "RONDÓN"
          },
          {
            "id": "15632",
            "isLeaf": 1,
            "name": "SABOYÁ"
          },
          {
            "id": "15638",
            "isLeaf": 1,
            "name": "SÁCHICA"
          },
          {
            "id": "15646",
            "isLeaf": 1,
            "name": "SAMACÁ"
          },
          {
            "id": "15660",
            "isLeaf": 1,
            "name": "SAN EDUARDO"
          },
          {
            "id": "15664",
            "isLeaf": 1,
            "name": "SAN JOSÉ DE PARE"
          },
          {
            "id": "15667",
            "isLeaf": 1,
            "name": "SAN LUIS DE GACENO"
          },
          {
            "id": "15673",
            "isLeaf": 1,
            "name": "SAN MATEO"
          },
          {
            "id": "15676",
            "isLeaf": 1,
            "name": "SAN MIGUEL DE SEMA"
          },
          {
            "id": "15681",
            "isLeaf": 1,
            "name": "SAN PABLO DE BORBUR"
          },
          {
            "id": "15686",
            "isLeaf": 1,
            "name": "SANTANA"
          },
          {
            "id": "15690",
            "isLeaf": 1,
            "name": "SANTA MARÍA"
          },
          {
            "id": "15693",
            "isLeaf": 1,
            "name": "SANTA ROSA DE VITERBO"
          },
          {
            "id": "15696",
            "isLeaf": 1,
            "name": "SANTA SOFÍA"
          },
          {
            "id": "15720",
            "isLeaf": 1,
            "name": "SATIVANORTE"
          },
          {
            "id": "15723",
            "isLeaf": 1,
            "name": "SATIVASUR"
          },
          {
            "id": "15740",
            "isLeaf": 1,
            "name": "SIACHOQUE"
          },
          {
            "id": "15753",
            "isLeaf": 1,
            "name": "SOATÁ"
          },
          {
            "id": "15755",
            "isLeaf": 1,
            "name": "SOCOTÁ"
          },
          {
            "id": "15757",
            "isLeaf": 1,
            "name": "SOCHA"
          },
          {
            "id": "15759",
            "isLeaf": 1,
            "name": "SOGAMOSO"
          },
          {
            "id": "15761",
            "isLeaf": 1,
            "name": "SOMONDOCO"
          },
          {
            "id": "15762",
            "isLeaf": 1,
            "name": "SORA"
          },
          {
            "id": "15763",
            "isLeaf": 1,
            "name": "SOTAQUIRÁ"
          },
          {
            "id": "15764",
            "isLeaf": 1,
            "name": "SORACÁ"
          },
          {
            "id": "15774",
            "isLeaf": 1,
            "name": "SUSACÓN"
          },
          {
            "id": "15776",
            "isLeaf": 1,
            "name": "SUTAMARCHÁN"
          },
          {
            "id": "15778",
            "isLeaf": 1,
            "name": "SUTATENZA"
          },
          {
            "id": "15790",
            "isLeaf": 1,
            "name": "TASCO"
          },
          {
            "id": "15798",
            "isLeaf": 1,
            "name": "TENZA"
          },
          {
            "id": "15804",
            "isLeaf": 1,
            "name": "TIBANÁ"
          },
          {
            "id": "15806",
            "isLeaf": 1,
            "name": "TIBASOSA"
          },
          {
            "id": "15808",
            "isLeaf": 1,
            "name": "TINJACÁ"
          },
          {
            "id": "15810",
            "isLeaf": 1,
            "name": "TIPACOQUE"
          },
          {
            "id": "15814",
            "isLeaf": 1,
            "name": "TOCA"
          },
          {
            "id": "15816",
            "isLeaf": 1,
            "name": "TOGÜÍ"
          },
          {
            "id": "15820",
            "isLeaf": 1,
            "name": "TÓPAGA"
          },
          {
            "id": "15822",
            "isLeaf": 1,
            "name": "TOTA"
          },
          {
            "id": "15832",
            "isLeaf": 1,
            "name": "TUNUNGUÁ"
          },
          {
            "id": "15835",
            "isLeaf": 1,
            "name": "TURMEQUÉ"
          },
          {
            "id": "15837",
            "isLeaf": 1,
            "name": "TUTA"
          },
          {
            "id": "15839",
            "isLeaf": 1,
            "name": "TUTAZÁ"
          },
          {
            "id": "15842",
            "isLeaf": 1,
            "name": "ÚMBITA"
          },
          {
            "id": "15861",
            "isLeaf": 1,
            "name": "VENTAQUEMADA"
          },
          {
            "id": "15879",
            "isLeaf": 1,
            "name": "VIRACACHÁ"
          },
          {
            "id": "15897",
            "isLeaf": 1,
            "name": "ZETAQUIRA"
          }
        ]
      },
      {
        "id": "17",
        "isLeaf": 0,
        "name": "CALDAS",
        "children": [
          {
            "id": "17001",
            "isLeaf": 1,
            "name": "MANIZALES"
          },
          {
            "id": "17013",
            "isLeaf": 1,
            "name": "AGUADAS"
          },
          {
            "id": "17042",
            "isLeaf": 1,
            "name": "ANSERMA"
          },
          {
            "id": "17050",
            "isLeaf": 1,
            "name": "ARANZAZU"
          },
          {
            "id": "17088",
            "isLeaf": 1,
            "name": "BELALCÁZAR"
          },
          {
            "id": "17174",
            "isLeaf": 1,
            "name": "CHINCHINÁ"
          },
          {
            "id": "17272",
            "isLeaf": 1,
            "name": "FILADELFIA"
          },
          {
            "id": "17380",
            "isLeaf": 1,
            "name": "LA DORADA"
          },
          {
            "id": "17388",
            "isLeaf": 1,
            "name": "LA MERCED"
          },
          {
            "id": "17433",
            "isLeaf": 1,
            "name": "MANZANARES"
          },
          {
            "id": "17442",
            "isLeaf": 1,
            "name": "MARMATO"
          },
          {
            "id": "17444",
            "isLeaf": 1,
            "name": "MARQUETALIA"
          },
          {
            "id": "17446",
            "isLeaf": 1,
            "name": "MARULANDA"
          },
          {
            "id": "17486",
            "isLeaf": 1,
            "name": "NEIRA"
          },
          {
            "id": "17495",
            "isLeaf": 1,
            "name": "NORCASIA"
          },
          {
            "id": "17513",
            "isLeaf": 1,
            "name": "PÁCORA"
          },
          {
            "id": "17524",
            "isLeaf": 1,
            "name": "PALESTINA"
          },
          {
            "id": "17541",
            "isLeaf": 1,
            "name": "PENSILVANIA"
          },
          {
            "id": "17614",
            "isLeaf": 1,
            "name": "RIOSUCIO"
          },
          {
            "id": "17616",
            "isLeaf": 1,
            "name": "RISARALDA"
          },
          {
            "id": "17653",
            "isLeaf": 1,
            "name": "SALAMINA"
          },
          {
            "id": "17662",
            "isLeaf": 1,
            "name": "SAMANÁ"
          },
          {
            "id": "17665",
            "isLeaf": 1,
            "name": "SAN JOSÉ"
          },
          {
            "id": "17777",
            "isLeaf": 1,
            "name": "SUPÍA"
          },
          {
            "id": "17867",
            "isLeaf": 1,
            "name": "VICTORIA"
          },
          {
            "id": "17873",
            "isLeaf": 1,
            "name": "VILLAMARÍA"
          },
          {
            "id": "17877",
            "isLeaf": 1,
            "name": "VITERBO"
          }
        ]
      },
      {
        "id": "18",
        "isLeaf": 0,
        "name": "CAQUETÁ",
        "children": [
          {
            "id": "18001",
            "isLeaf": 1,
            "name": "FLORENCIA"
          },
          {
            "id": "18029",
            "isLeaf": 1,
            "name": "ALBANIA"
          },
          {
            "id": "18094",
            "isLeaf": 1,
            "name": "BELÉN DE LOS ANDAQUÍES"
          },
          {
            "id": "18150",
            "isLeaf": 1,
            "name": "CARTAGENA DEL CHAIRÁ"
          },
          {
            "id": "18205",
            "isLeaf": 1,
            "name": "CURILLO"
          },
          {
            "id": "18247",
            "isLeaf": 1,
            "name": "EL DONCELLO"
          },
          {
            "id": "18256",
            "isLeaf": 1,
            "name": "EL PAUJÍL"
          },
          {
            "id": "18410",
            "isLeaf": 1,
            "name": "LA MONTAÑITA"
          },
          {
            "id": "18460",
            "isLeaf": 1,
            "name": "MILÁN"
          },
          {
            "id": "18479",
            "isLeaf": 1,
            "name": "MORELIA"
          },
          {
            "id": "18592",
            "isLeaf": 1,
            "name": "PUERTO RICO"
          },
          {
            "id": "18610",
            "isLeaf": 1,
            "name": "SAN JOSÉ DEL FRAGUA"
          },
          {
            "id": "18753",
            "isLeaf": 1,
            "name": "SAN VICENTE DEL CAGUÁN"
          },
          {
            "id": "18756",
            "isLeaf": 1,
            "name": "SOLANO"
          },
          {
            "id": "18785",
            "isLeaf": 1,
            "name": "SOLITA"
          },
          {
            "id": "18860",
            "isLeaf": 1,
            "name": "VALPARAÍSO"
          }
        ]
      },
      {
        "id": "19",
        "isLeaf": 0,
        "name": "CAUCA",
        "children": [
          {
            "id": "19001",
            "isLeaf": 1,
            "name": "POPAYÁN"
          },
          {
            "id": "19022",
            "isLeaf": 1,
            "name": "ALMAGUER"
          },
          {
            "id": "19050",
            "isLeaf": 1,
            "name": "ARGELIA"
          },
          {
            "id": "19075",
            "isLeaf": 1,
            "name": "BALBOA"
          },
          {
            "id": "19100",
            "isLeaf": 1,
            "name": "BOLÍVAR"
          },
          {
            "id": "19110",
            "isLeaf": 1,
            "name": "BUENOS AIRES"
          },
          {
            "id": "19130",
            "isLeaf": 1,
            "name": "CAJIBÍO"
          },
          {
            "id": "19137",
            "isLeaf": 1,
            "name": "CALDONO"
          },
          {
            "id": "19142",
            "isLeaf": 1,
            "name": "CALOTO"
          },
          {
            "id": "19212",
            "isLeaf": 1,
            "name": "CORINTO"
          },
          {
            "id": "19256",
            "isLeaf": 1,
            "name": "EL TAMBO"
          },
          {
            "id": "19290",
            "isLeaf": 1,
            "name": "FLORENCIA"
          },
          {
            "id": "19300",
            "isLeaf": 1,
            "name": "GUACHENÉ"
          },
          {
            "id": "19318",
            "isLeaf": 1,
            "name": "GUAPÍ"
          },
          {
            "id": "19355",
            "isLeaf": 1,
            "name": "INZÁ"
          },
          {
            "id": "19364",
            "isLeaf": 1,
            "name": "JAMBALÓ"
          },
          {
            "id": "19392",
            "isLeaf": 1,
            "name": "LA SIERRA"
          },
          {
            "id": "19397",
            "isLeaf": 1,
            "name": "LA VEGA"
          },
          {
            "id": "19418",
            "isLeaf": 1,
            "name": "LÓPEZ DE MICAY"
          },
          {
            "id": "19450",
            "isLeaf": 1,
            "name": "MERCADERES"
          },
          {
            "id": "19455",
            "isLeaf": 1,
            "name": "MIRANDA"
          },
          {
            "id": "19473",
            "isLeaf": 1,
            "name": "MORALES"
          },
          {
            "id": "19513",
            "isLeaf": 1,
            "name": "PADILLA"
          },
          {
            "id": "19517",
            "isLeaf": 1,
            "name": "PÁEZ"
          },
          {
            "id": "19532",
            "isLeaf": 1,
            "name": "PATÍA"
          },
          {
            "id": "19533",
            "isLeaf": 1,
            "name": "PIAMONTE"
          },
          {
            "id": "19548",
            "isLeaf": 1,
            "name": "PIENDAMÓ - TUNÍA"
          },
          {
            "id": "19573",
            "isLeaf": 1,
            "name": "PUERTO TEJADA"
          },
          {
            "id": "19585",
            "isLeaf": 1,
            "name": "PURACÉ"
          },
          {
            "id": "19622",
            "isLeaf": 1,
            "name": "ROSAS"
          },
          {
            "id": "19693",
            "isLeaf": 1,
            "name": "SAN SEBASTIÁN"
          },
          {
            "id": "19698",
            "isLeaf": 1,
            "name": "SANTANDER DE QUILICHAO"
          },
          {
            "id": "19701",
            "isLeaf": 1,
            "name": "SANTA ROSA"
          },
          {
            "id": "19743",
            "isLeaf": 1,
            "name": "SILVIA"
          },
          {
            "id": "19760",
            "isLeaf": 1,
            "name": "SOTARA"
          },
          {
            "id": "19780",
            "isLeaf": 1,
            "name": "SUÁREZ"
          },
          {
            "id": "19785",
            "isLeaf": 1,
            "name": "SUCRE"
          },
          {
            "id": "19807",
            "isLeaf": 1,
            "name": "TIMBÍO"
          },
          {
            "id": "19809",
            "isLeaf": 1,
            "name": "TIMBIQUÍ"
          },
          {
            "id": "19821",
            "isLeaf": 1,
            "name": "TORIBÍO"
          },
          {
            "id": "19824",
            "isLeaf": 1,
            "name": "TOTORÓ"
          },
          {
            "id": "19845",
            "isLeaf": 1,
            "name": "VILLA RICA"
          }
        ]
      },
      {
        "id": "20",
        "isLeaf": 0,
        "name": "CESAR",
        "children": [
          {
            "id": "20001",
            "isLeaf": 1,
            "name": "VALLEDUPAR"
          },
          {
            "id": "20011",
            "isLeaf": 1,
            "name": "AGUACHICA"
          },
          {
            "id": "20013",
            "isLeaf": 1,
            "name": "AGUSTÍN CODAZZI"
          },
          {
            "id": "20032",
            "isLeaf": 1,
            "name": "ASTREA"
          },
          {
            "id": "20045",
            "isLeaf": 1,
            "name": "BECERRIL"
          },
          {
            "id": "20060",
            "isLeaf": 1,
            "name": "BOSCONIA"
          },
          {
            "id": "20175",
            "isLeaf": 1,
            "name": "CHIMICHAGUA"
          },
          {
            "id": "20178",
            "isLeaf": 1,
            "name": "CHIRIGUANÁ"
          },
          {
            "id": "20228",
            "isLeaf": 1,
            "name": "CURUMANÍ"
          },
          {
            "id": "20238",
            "isLeaf": 1,
            "name": "EL COPEY"
          },
          {
            "id": "20250",
            "isLeaf": 1,
            "name": "EL PASO"
          },
          {
            "id": "20295",
            "isLeaf": 1,
            "name": "GAMARRA"
          },
          {
            "id": "20310",
            "isLeaf": 1,
            "name": "GONZÁLEZ"
          },
          {
            "id": "20383",
            "isLeaf": 1,
            "name": "LA GLORIA"
          },
          {
            "id": "20400",
            "isLeaf": 1,
            "name": "LA JAGUA DE IBIRICO"
          },
          {
            "id": "20443",
            "isLeaf": 1,
            "name": "MANAURE BALCÓN DEL CESAR"
          },
          {
            "id": "20517",
            "isLeaf": 1,
            "name": "PAILITAS"
          },
          {
            "id": "20550",
            "isLeaf": 1,
            "name": "PELAYA"
          },
          {
            "id": "20570",
            "isLeaf": 1,
            "name": "PUEBLO BELLO"
          },
          {
            "id": "20614",
            "isLeaf": 1,
            "name": "RÍO DE ORO"
          },
          {
            "id": "20621",
            "isLeaf": 1,
            "name": "LA PAZ"
          },
          {
            "id": "20710",
            "isLeaf": 1,
            "name": "SAN ALBERTO"
          },
          {
            "id": "20750",
            "isLeaf": 1,
            "name": "SAN DIEGO"
          },
          {
            "id": "20770",
            "isLeaf": 1,
            "name": "SAN MARTÍN"
          },
          {
            "id": "20787",
            "isLeaf": 1,
            "name": "TAMALAMEQUE"
          }
        ]
      },
      {
        "id": "23",
        "isLeaf": 0,
        "name": "CÓRDOBA",
        "children": [
          {
            "id": "23001",
            "isLeaf": 1,
            "name": "MONTERÍA"
          },
          {
            "id": "23068",
            "isLeaf": 1,
            "name": "AYAPEL"
          },
          {
            "id": "23079",
            "isLeaf": 1,
            "name": "BUENAVISTA"
          },
          {
            "id": "23090",
            "isLeaf": 1,
            "name": "CANALETE"
          },
          {
            "id": "23162",
            "isLeaf": 1,
            "name": "CERETÉ"
          },
          {
            "id": "23168",
            "isLeaf": 1,
            "name": "CHIMÁ"
          },
          {
            "id": "23182",
            "isLeaf": 1,
            "name": "CHINÚ"
          },
          {
            "id": "23189",
            "isLeaf": 1,
            "name": "CIÉNAGA DE ORO"
          },
          {
            "id": "23300",
            "isLeaf": 1,
            "name": "COTORRA"
          },
          {
            "id": "23350",
            "isLeaf": 1,
            "name": "LA APARTADA"
          },
          {
            "id": "23417",
            "isLeaf": 1,
            "name": "LORICA"
          },
          {
            "id": "23419",
            "isLeaf": 1,
            "name": "LOS CÓRDOBAS"
          },
          {
            "id": "23464",
            "isLeaf": 1,
            "name": "MOMIL"
          },
          {
            "id": "23466",
            "isLeaf": 1,
            "name": "MONTELÍBANO"
          },
          {
            "id": "23500",
            "isLeaf": 1,
            "name": "MOÑITOS"
          },
          {
            "id": "23555",
            "isLeaf": 1,
            "name": "PLANETA RICA"
          },
          {
            "id": "23570",
            "isLeaf": 1,
            "name": "PUEBLO NUEVO"
          },
          {
            "id": "23574",
            "isLeaf": 1,
            "name": "PUERTO ESCONDIDO"
          },
          {
            "id": "23580",
            "isLeaf": 1,
            "name": "PUERTO LIBERTADOR"
          },
          {
            "id": "23586",
            "isLeaf": 1,
            "name": "PURÍSIMA DE LA CONCEPCIÓN"
          },
          {
            "id": "23660",
            "isLeaf": 1,
            "name": "SAHAGÚN"
          },
          {
            "id": "23670",
            "isLeaf": 1,
            "name": "SAN ANDRÉS DE SOTAVENTO"
          },
          {
            "id": "23672",
            "isLeaf": 1,
            "name": "SAN ANTERO"
          },
          {
            "id": "23675",
            "isLeaf": 1,
            "name": "SAN BERNARDO DEL VIENTO"
          },
          {
            "id": "23678",
            "isLeaf": 1,
            "name": "SAN CARLOS"
          },
          {
            "id": "23682",
            "isLeaf": 1,
            "name": "SAN JOSÉ DE URÉ"
          },
          {
            "id": "23686",
            "isLeaf": 1,
            "name": "SAN PELAYO"
          },
          {
            "id": "23807",
            "isLeaf": 1,
            "name": "TIERRALTA"
          },
          {
            "id": "23815",
            "isLeaf": 1,
            "name": "TUCHÍN"
          },
          {
            "id": "23855",
            "isLeaf": 1,
            "name": "VALENCIA"
          }
        ]
      },
      {
        "id": "25",
        "isLeaf": 0,
        "name": "CUNDINAMARCA",
        "children": [
          {
            "id": "25001",
            "isLeaf": 1,
            "name": "AGUA DE DIOS"
          },
          {
            "id": "25019",
            "isLeaf": 1,
            "name": "ALBÁN"
          },
          {
            "id": "25035",
            "isLeaf": 1,
            "name": "ANAPOIMA"
          },
          {
            "id": "25040",
            "isLeaf": 1,
            "name": "ANOLAIMA"
          },
          {
            "id": "25053",
            "isLeaf": 1,
            "name": "ARBELÁEZ"
          },
          {
            "id": "25086",
            "isLeaf": 1,
            "name": "BELTRÁN"
          },
          {
            "id": "25095",
            "isLeaf": 1,
            "name": "BITUIMA"
          },
          {
            "id": "25099",
            "isLeaf": 1,
            "name": "BOJACÁ"
          },
          {
            "id": "25120",
            "isLeaf": 1,
            "name": "CABRERA"
          },
          {
            "id": "25123",
            "isLeaf": 1,
            "name": "CACHIPAY"
          },
          {
            "id": "25126",
            "isLeaf": 1,
            "name": "CAJICÁ"
          },
          {
            "id": "25148",
            "isLeaf": 1,
            "name": "CAPARRAPÍ"
          },
          {
            "id": "25151",
            "isLeaf": 1,
            "name": "CÁQUEZA"
          },
          {
            "id": "25154",
            "isLeaf": 1,
            "name": "CARMEN DE CARUPA"
          },
          {
            "id": "25168",
            "isLeaf": 1,
            "name": "CHAGUANÍ"
          },
          {
            "id": "25175",
            "isLeaf": 1,
            "name": "CHÍA"
          },
          {
            "id": "25178",
            "isLeaf": 1,
            "name": "CHIPAQUE"
          },
          {
            "id": "25181",
            "isLeaf": 1,
            "name": "CHOACHÍ"
          },
          {
            "id": "25183",
            "isLeaf": 1,
            "name": "CHOCONTÁ"
          },
          {
            "id": "25200",
            "isLeaf": 1,
            "name": "COGUA"
          },
          {
            "id": "25214",
            "isLeaf": 1,
            "name": "COTA"
          },
          {
            "id": "25224",
            "isLeaf": 1,
            "name": "CUCUNUBÁ"
          },
          {
            "id": "25245",
            "isLeaf": 1,
            "name": "EL COLEGIO"
          },
          {
            "id": "25258",
            "isLeaf": 1,
            "name": "EL PEÑÓN"
          },
          {
            "id": "25260",
            "isLeaf": 1,
            "name": "EL ROSAL"
          },
          {
            "id": "25269",
            "isLeaf": 1,
            "name": "FACATATIVÁ"
          },
          {
            "id": "25279",
            "isLeaf": 1,
            "name": "FÓMEQUE"
          },
          {
            "id": "25281",
            "isLeaf": 1,
            "name": "FOSCA"
          },
          {
            "id": "25286",
            "isLeaf": 1,
            "name": "FUNZA"
          },
          {
            "id": "25288",
            "isLeaf": 1,
            "name": "FÚQUENE"
          },
          {
            "id": "25290",
            "isLeaf": 1,
            "name": "FUSAGASUGÁ"
          },
          {
            "id": "25293",
            "isLeaf": 1,
            "name": "GACHALÁ"
          },
          {
            "id": "25295",
            "isLeaf": 1,
            "name": "GACHANCIPÁ"
          },
          {
            "id": "25297",
            "isLeaf": 1,
            "name": "GACHETÁ"
          },
          {
            "id": "25299",
            "isLeaf": 1,
            "name": "GAMA"
          },
          {
            "id": "25307",
            "isLeaf": 1,
            "name": "GIRARDOT"
          },
          {
            "id": "25312",
            "isLeaf": 1,
            "name": "GRANADA"
          },
          {
            "id": "25317",
            "isLeaf": 1,
            "name": "GUACHETÁ"
          },
          {
            "id": "25320",
            "isLeaf": 1,
            "name": "GUADUAS"
          },
          {
            "id": "25322",
            "isLeaf": 1,
            "name": "GUASCA"
          },
          {
            "id": "25324",
            "isLeaf": 1,
            "name": "GUATAQUÍ"
          },
          {
            "id": "25326",
            "isLeaf": 1,
            "name": "GUATAVITA"
          },
          {
            "id": "25328",
            "isLeaf": 1,
            "name": "GUAYABAL DE SÍQUIMA"
          },
          {
            "id": "25335",
            "isLeaf": 1,
            "name": "GUAYABETAL"
          },
          {
            "id": "25339",
            "isLeaf": 1,
            "name": "GUTIÉRREZ"
          },
          {
            "id": "25368",
            "isLeaf": 1,
            "name": "JERUSALÉN"
          },
          {
            "id": "25372",
            "isLeaf": 1,
            "name": "JUNÍN"
          },
          {
            "id": "25377",
            "isLeaf": 1,
            "name": "LA CALERA"
          },
          {
            "id": "25386",
            "isLeaf": 1,
            "name": "LA MESA"
          },
          {
            "id": "25394",
            "isLeaf": 1,
            "name": "LA PALMA"
          },
          {
            "id": "25398",
            "isLeaf": 1,
            "name": "LA PEÑA"
          },
          {
            "id": "25402",
            "isLeaf": 1,
            "name": "LA VEGA"
          },
          {
            "id": "25407",
            "isLeaf": 1,
            "name": "LENGUAZAQUE"
          },
          {
            "id": "25426",
            "isLeaf": 1,
            "name": "MACHETÁ"
          },
          {
            "id": "25430",
            "isLeaf": 1,
            "name": "MADRID"
          },
          {
            "id": "25436",
            "isLeaf": 1,
            "name": "MANTA"
          },
          {
            "id": "25438",
            "isLeaf": 1,
            "name": "MEDINA"
          },
          {
            "id": "25473",
            "isLeaf": 1,
            "name": "MOSQUERA"
          },
          {
            "id": "25483",
            "isLeaf": 1,
            "name": "NARIÑO"
          },
          {
            "id": "25486",
            "isLeaf": 1,
            "name": "NEMOCÓN"
          },
          {
            "id": "25488",
            "isLeaf": 1,
            "name": "NILO"
          },
          {
            "id": "25489",
            "isLeaf": 1,
            "name": "NIMAIMA"
          },
          {
            "id": "25491",
            "isLeaf": 1,
            "name": "NOCAIMA"
          },
          {
            "id": "25506",
            "isLeaf": 1,
            "name": "VENECIA"
          },
          {
            "id": "25513",
            "isLeaf": 1,
            "name": "PACHO"
          },
          {
            "id": "25518",
            "isLeaf": 1,
            "name": "PAIME"
          },
          {
            "id": "25524",
            "isLeaf": 1,
            "name": "PANDI"
          },
          {
            "id": "25530",
            "isLeaf": 1,
            "name": "PARATEBUENO"
          },
          {
            "id": "25535",
            "isLeaf": 1,
            "name": "PASCA"
          },
          {
            "id": "25572",
            "isLeaf": 1,
            "name": "PUERTO SALGAR"
          },
          {
            "id": "25580",
            "isLeaf": 1,
            "name": "PULÍ"
          },
          {
            "id": "25592",
            "isLeaf": 1,
            "name": "QUEBRADANEGRA"
          },
          {
            "id": "25594",
            "isLeaf": 1,
            "name": "QUETAME"
          },
          {
            "id": "25596",
            "isLeaf": 1,
            "name": "QUIPILE"
          },
          {
            "id": "25599",
            "isLeaf": 1,
            "name": "APULO"
          },
          {
            "id": "25612",
            "isLeaf": 1,
            "name": "RICAURTE"
          },
          {
            "id": "25645",
            "isLeaf": 1,
            "name": "SAN ANTONIO DEL TEQUENDAMA"
          },
          {
            "id": "25649",
            "isLeaf": 1,
            "name": "SAN BERNARDO"
          },
          {
            "id": "25653",
            "isLeaf": 1,
            "name": "SAN CAYETANO"
          },
          {
            "id": "25658",
            "isLeaf": 1,
            "name": "SAN FRANCISCO"
          },
          {
            "id": "25662",
            "isLeaf": 1,
            "name": "SAN JUAN DE RIOSECO"
          },
          {
            "id": "25718",
            "isLeaf": 1,
            "name": "SASAIMA"
          },
          {
            "id": "25736",
            "isLeaf": 1,
            "name": "SESQUILÉ"
          },
          {
            "id": "25740",
            "isLeaf": 1,
            "name": "SIBATÉ"
          },
          {
            "id": "25743",
            "isLeaf": 1,
            "name": "SILVANIA"
          },
          {
            "id": "25745",
            "isLeaf": 1,
            "name": "SIMIJACA"
          },
          {
            "id": "25754",
            "isLeaf": 1,
            "name": "SOACHA"
          },
          {
            "id": "25758",
            "isLeaf": 1,
            "name": "SOPÓ"
          },
          {
            "id": "25769",
            "isLeaf": 1,
            "name": "SUBACHOQUE"
          },
          {
            "id": "25772",
            "isLeaf": 1,
            "name": "SUESCA"
          },
          {
            "id": "25777",
            "isLeaf": 1,
            "name": "SUPATÁ"
          },
          {
            "id": "25779",
            "isLeaf": 1,
            "name": "SUSA"
          },
          {
            "id": "25781",
            "isLeaf": 1,
            "name": "SUTATAUSA"
          },
          {
            "id": "25785",
            "isLeaf": 1,
            "name": "TABIO"
          },
          {
            "id": "25793",
            "isLeaf": 1,
            "name": "TAUSA"
          },
          {
            "id": "25797",
            "isLeaf": 1,
            "name": "TENA"
          },
          {
            "id": "25799",
            "isLeaf": 1,
            "name": "TENJO"
          },
          {
            "id": "25805",
            "isLeaf": 1,
            "name": "TIBACUY"
          },
          {
            "id": "25807",
            "isLeaf": 1,
            "name": "TIBIRITA"
          },
          {
            "id": "25815",
            "isLeaf": 1,
            "name": "TOCAIMA"
          },
          {
            "id": "25817",
            "isLeaf": 1,
            "name": "TOCANCIPÁ"
          },
          {
            "id": "25823",
            "isLeaf": 1,
            "name": "TOPAIPÍ"
          },
          {
            "id": "25839",
            "isLeaf": 1,
            "name": "UBALÁ"
          },
          {
            "id": "25841",
            "isLeaf": 1,
            "name": "UBAQUE"
          },
          {
            "id": "25843",
            "isLeaf": 1,
            "name": "VILLA DE SAN DIEGO DE UBATÉ"
          },
          {
            "id": "25845",
            "isLeaf": 1,
            "name": "UNE"
          },
          {
            "id": "25851",
            "isLeaf": 1,
            "name": "ÚTICA"
          },
          {
            "id": "25862",
            "isLeaf": 1,
            "name": "VERGARA"
          },
          {
            "id": "25867",
            "isLeaf": 1,
            "name": "VIANÍ"
          },
          {
            "id": "25871",
            "isLeaf": 1,
            "name": "VILLAGÓMEZ"
          },
          {
            "id": "25873",
            "isLeaf": 1,
            "name": "VILLAPINZÓN"
          },
          {
            "id": "25875",
            "isLeaf": 1,
            "name": "VILLETA"
          },
          {
            "id": "25878",
            "isLeaf": 1,
            "name": "VIOTÁ"
          },
          {
            "id": "25885",
            "isLeaf": 1,
            "name": "YACOPÍ"
          },
          {
            "id": "25898",
            "isLeaf": 1,
            "name": "ZIPACÓN"
          },
          {
            "id": "25899",
            "isLeaf": 1,
            "name": "ZIPAQUIRÁ"
          }
        ]
      },
      {
        "id": "27",
        "isLeaf": 0,
        "name": "CHOCÓ",
        "children": [
          {
            "id": "27001",
            "isLeaf": 1,
            "name": "QUIBDÓ"
          },
          {
            "id": "27006",
            "isLeaf": 1,
            "name": "ACANDÍ"
          },
          {
            "id": "27025",
            "isLeaf": 1,
            "name": "ALTO BAUDÓ"
          },
          {
            "id": "27050",
            "isLeaf": 1,
            "name": "ATRATO"
          },
          {
            "id": "27073",
            "isLeaf": 1,
            "name": "BAGADÓ"
          },
          {
            "id": "27075",
            "isLeaf": 1,
            "name": "BAHÍA SOLANO"
          },
          {
            "id": "27077",
            "isLeaf": 1,
            "name": "BAJO BAUDÓ"
          },
          {
            "id": "27086",
            "isLeaf": 1,
            "name": "Belén De Bajira"
          },
          {
            "id": "27099",
            "isLeaf": 1,
            "name": "BOJAYÁ"
          },
          {
            "id": "27135",
            "isLeaf": 1,
            "name": "EL CANTÓN DEL SAN PABLO"
          },
          {
            "id": "27150",
            "isLeaf": 1,
            "name": "CARMEN DEL DARIÉN"
          },
          {
            "id": "27160",
            "isLeaf": 1,
            "name": "CÉRTEGUI"
          },
          {
            "id": "27205",
            "isLeaf": 1,
            "name": "CONDOTO"
          },
          {
            "id": "27245",
            "isLeaf": 1,
            "name": "EL CARMEN DE ATRATO"
          },
          {
            "id": "27250",
            "isLeaf": 1,
            "name": "EL LITORAL DEL SAN JUAN"
          },
          {
            "id": "27361",
            "isLeaf": 1,
            "name": "ISTMINA"
          },
          {
            "id": "27372",
            "isLeaf": 1,
            "name": "JURADÓ"
          },
          {
            "id": "27413",
            "isLeaf": 1,
            "name": "LLORÓ"
          },
          {
            "id": "27425",
            "isLeaf": 1,
            "name": "MEDIO ATRATO"
          },
          {
            "id": "27430",
            "isLeaf": 1,
            "name": "MEDIO BAUDÓ"
          },
          {
            "id": "27450",
            "isLeaf": 1,
            "name": "MEDIO SAN JUAN"
          },
          {
            "id": "27491",
            "isLeaf": 1,
            "name": "NÓVITA"
          },
          {
            "id": "27495",
            "isLeaf": 1,
            "name": "NUQUÍ"
          },
          {
            "id": "27580",
            "isLeaf": 1,
            "name": "RÍO IRÓ"
          },
          {
            "id": "27600",
            "isLeaf": 1,
            "name": "RÍO QUITO"
          },
          {
            "id": "27615",
            "isLeaf": 1,
            "name": "RIOSUCIO"
          },
          {
            "id": "27660",
            "isLeaf": 1,
            "name": "SAN JOSÉ DEL PALMAR"
          },
          {
            "id": "27745",
            "isLeaf": 1,
            "name": "SIPÍ"
          },
          {
            "id": "27787",
            "isLeaf": 1,
            "name": "TADÓ"
          },
          {
            "id": "27800",
            "isLeaf": 1,
            "name": "UNGUÍA"
          },
          {
            "id": "27810",
            "isLeaf": 1,
            "name": "UNIÓN PANAMERICANA"
          }
        ]
      },
      {
        "id": "41",
        "isLeaf": 0,
        "name": "HUILA",
        "children": [
          {
            "id": "41001",
            "isLeaf": 1,
            "name": "NEIVA"
          },
          {
            "id": "41006",
            "isLeaf": 1,
            "name": "ACEVEDO"
          },
          {
            "id": "41013",
            "isLeaf": 1,
            "name": "AGRADO"
          },
          {
            "id": "41016",
            "isLeaf": 1,
            "name": "AIPE"
          },
          {
            "id": "41020",
            "isLeaf": 1,
            "name": "ALGECIRAS"
          },
          {
            "id": "41026",
            "isLeaf": 1,
            "name": "ALTAMIRA"
          },
          {
            "id": "41078",
            "isLeaf": 1,
            "name": "BARAYA"
          },
          {
            "id": "41132",
            "isLeaf": 1,
            "name": "CAMPOALEGRE"
          },
          {
            "id": "41206",
            "isLeaf": 1,
            "name": "COLOMBIA"
          },
          {
            "id": "41244",
            "isLeaf": 1,
            "name": "ELÍAS"
          },
          {
            "id": "41298",
            "isLeaf": 1,
            "name": "GARZÓN"
          },
          {
            "id": "41306",
            "isLeaf": 1,
            "name": "GIGANTE"
          },
          {
            "id": "41319",
            "isLeaf": 1,
            "name": "GUADALUPE"
          },
          {
            "id": "41349",
            "isLeaf": 1,
            "name": "HOBO"
          },
          {
            "id": "41357",
            "isLeaf": 1,
            "name": "ÍQUIRA"
          },
          {
            "id": "41359",
            "isLeaf": 1,
            "name": "ISNOS"
          },
          {
            "id": "41378",
            "isLeaf": 1,
            "name": "LA ARGENTINA"
          },
          {
            "id": "41396",
            "isLeaf": 1,
            "name": "LA PLATA"
          },
          {
            "id": "41483",
            "isLeaf": 1,
            "name": "NÁTAGA"
          },
          {
            "id": "41503",
            "isLeaf": 1,
            "name": "OPORAPA"
          },
          {
            "id": "41518",
            "isLeaf": 1,
            "name": "PAICOL"
          },
          {
            "id": "41524",
            "isLeaf": 1,
            "name": "PALERMO"
          },
          {
            "id": "41530",
            "isLeaf": 1,
            "name": "PALESTINA"
          },
          {
            "id": "41548",
            "isLeaf": 1,
            "name": "PITAL"
          },
          {
            "id": "41551",
            "isLeaf": 1,
            "name": "PITALITO"
          },
          {
            "id": "41615",
            "isLeaf": 1,
            "name": "RIVERA"
          },
          {
            "id": "41660",
            "isLeaf": 1,
            "name": "SALADOBLANCO"
          },
          {
            "id": "41668",
            "isLeaf": 1,
            "name": "SAN AGUSTÍN"
          },
          {
            "id": "41676",
            "isLeaf": 1,
            "name": "SANTA MARÍA"
          },
          {
            "id": "41770",
            "isLeaf": 1,
            "name": "SUAZA"
          },
          {
            "id": "41791",
            "isLeaf": 1,
            "name": "TARQUI"
          },
          {
            "id": "41797",
            "isLeaf": 1,
            "name": "TESALIA"
          },
          {
            "id": "41799",
            "isLeaf": 1,
            "name": "TELLO"
          },
          {
            "id": "41801",
            "isLeaf": 1,
            "name": "TERUEL"
          },
          {
            "id": "41807",
            "isLeaf": 1,
            "name": "TIMANÁ"
          },
          {
            "id": "41872",
            "isLeaf": 1,
            "name": "VILLAVIEJA"
          },
          {
            "id": "41885",
            "isLeaf": 1,
            "name": "YAGUARÁ"
          }
        ]
      },
      {
        "id": "44",
        "isLeaf": 0,
        "name": "LA GUAJIRA",
        "children": [
          {
            "id": "44001",
            "isLeaf": 1,
            "name": "RIOHACHA"
          },
          {
            "id": "44035",
            "isLeaf": 1,
            "name": "ALBANIA"
          },
          {
            "id": "44078",
            "isLeaf": 1,
            "name": "BARRANCAS"
          },
          {
            "id": "44090",
            "isLeaf": 1,
            "name": "DIBULLA"
          },
          {
            "id": "44098",
            "isLeaf": 1,
            "name": "DISTRACCIÓN"
          },
          {
            "id": "44110",
            "isLeaf": 1,
            "name": "EL MOLINO"
          },
          {
            "id": "44279",
            "isLeaf": 1,
            "name": "FONSECA"
          },
          {
            "id": "44378",
            "isLeaf": 1,
            "name": "HATONUEVO"
          },
          {
            "id": "44420",
            "isLeaf": 1,
            "name": "LA JAGUA DEL PILAR"
          },
          {
            "id": "44430",
            "isLeaf": 1,
            "name": "MAICAO"
          },
          {
            "id": "44560",
            "isLeaf": 1,
            "name": "MANAURE"
          },
          {
            "id": "44650",
            "isLeaf": 1,
            "name": "SAN JUAN DEL CESAR"
          },
          {
            "id": "44847",
            "isLeaf": 1,
            "name": "URIBIA"
          },
          {
            "id": "44855",
            "isLeaf": 1,
            "name": "URUMITA"
          },
          {
            "id": "44874",
            "isLeaf": 1,
            "name": "VILLANUEVA"
          }
        ]
      },
      {
        "id": "47",
        "isLeaf": 0,
        "name": "MAGDALENA",
        "children": [
          {
            "id": "47001",
            "isLeaf": 1,
            "name": "SANTA MARTA"
          },
          {
            "id": "47030",
            "isLeaf": 1,
            "name": "ALGARROBO"
          },
          {
            "id": "47053",
            "isLeaf": 1,
            "name": "ARACATACA"
          },
          {
            "id": "47058",
            "isLeaf": 1,
            "name": "ARIGUANÍ"
          },
          {
            "id": "47161",
            "isLeaf": 1,
            "name": "CERRO DE SAN ANTONIO"
          },
          {
            "id": "47170",
            "isLeaf": 1,
            "name": "CHIVOLO"
          },
          {
            "id": "47189",
            "isLeaf": 1,
            "name": "CIÉNAGA"
          },
          {
            "id": "47205",
            "isLeaf": 1,
            "name": "CONCORDIA"
          },
          {
            "id": "47245",
            "isLeaf": 1,
            "name": "EL BANCO"
          },
          {
            "id": "47258",
            "isLeaf": 1,
            "name": "EL PIÑÓN"
          },
          {
            "id": "47268",
            "isLeaf": 1,
            "name": "EL RETÉN"
          },
          {
            "id": "47288",
            "isLeaf": 1,
            "name": "FUNDACIÓN"
          },
          {
            "id": "47318",
            "isLeaf": 1,
            "name": "GUAMAL"
          },
          {
            "id": "47460",
            "isLeaf": 1,
            "name": "NUEVA GRANADA"
          },
          {
            "id": "47541",
            "isLeaf": 1,
            "name": "PEDRAZA"
          },
          {
            "id": "47545",
            "isLeaf": 1,
            "name": "PIJIÑO DEL CARMEN"
          },
          {
            "id": "47551",
            "isLeaf": 1,
            "name": "PIVIJAY"
          },
          {
            "id": "47555",
            "isLeaf": 1,
            "name": "PLATO"
          },
          {
            "id": "47570",
            "isLeaf": 1,
            "name": "PUEBLOVIEJO"
          },
          {
            "id": "47605",
            "isLeaf": 1,
            "name": "REMOLINO"
          },
          {
            "id": "47660",
            "isLeaf": 1,
            "name": "SABANAS DE SAN ÁNGEL"
          },
          {
            "id": "47675",
            "isLeaf": 1,
            "name": "SALAMINA"
          },
          {
            "id": "47692",
            "isLeaf": 1,
            "name": "SAN SEBASTIÁN DE BUENAVISTA"
          },
          {
            "id": "47703",
            "isLeaf": 1,
            "name": "SAN ZENÓN"
          },
          {
            "id": "47707",
            "isLeaf": 1,
            "name": "SANTA ANA"
          },
          {
            "id": "47720",
            "isLeaf": 1,
            "name": "SANTA BÁRBARA DE PINTO"
          },
          {
            "id": "47745",
            "isLeaf": 1,
            "name": "SITIONUEVO"
          },
          {
            "id": "47798",
            "isLeaf": 1,
            "name": "TENERIFE"
          },
          {
            "id": "47960",
            "isLeaf": 1,
            "name": "ZAPAYÁN"
          },
          {
            "id": "47980",
            "isLeaf": 1,
            "name": "ZONA BANANERA"
          }
        ]
      },
      {
        "id": "50",
        "isLeaf": 0,
        "name": "META",
        "children": [
          {
            "id": "50001",
            "isLeaf": 1,
            "name": "VILLAVICENCIO"
          },
          {
            "id": "50006",
            "isLeaf": 1,
            "name": "ACACÍAS"
          },
          {
            "id": "50110",
            "isLeaf": 1,
            "name": "BARRANCA DE UPÍA"
          },
          {
            "id": "50124",
            "isLeaf": 1,
            "name": "CABUYARO"
          },
          {
            "id": "50150",
            "isLeaf": 1,
            "name": "CASTILLA LA NUEVA"
          },
          {
            "id": "50223",
            "isLeaf": 1,
            "name": "CUBARRAL"
          },
          {
            "id": "50226",
            "isLeaf": 1,
            "name": "CUMARAL"
          },
          {
            "id": "50245",
            "isLeaf": 1,
            "name": "EL CALVARIO"
          },
          {
            "id": "50251",
            "isLeaf": 1,
            "name": "EL CASTILLO"
          },
          {
            "id": "50270",
            "isLeaf": 1,
            "name": "EL DORADO"
          },
          {
            "id": "50287",
            "isLeaf": 1,
            "name": "FUENTE DE ORO"
          },
          {
            "id": "50313",
            "isLeaf": 1,
            "name": "GRANADA"
          },
          {
            "id": "50318",
            "isLeaf": 1,
            "name": "GUAMAL"
          },
          {
            "id": "50325",
            "isLeaf": 1,
            "name": "MAPIRIPÁN"
          },
          {
            "id": "50330",
            "isLeaf": 1,
            "name": "MESETAS"
          },
          {
            "id": "50350",
            "isLeaf": 1,
            "name": "LA MACARENA"
          },
          {
            "id": "50370",
            "isLeaf": 1,
            "name": "URIBE"
          },
          {
            "id": "50400",
            "isLeaf": 1,
            "name": "LEJANÍAS"
          },
          {
            "id": "50450",
            "isLeaf": 1,
            "name": "PUERTO CONCORDIA"
          },
          {
            "id": "50568",
            "isLeaf": 1,
            "name": "PUERTO GAITÁN"
          },
          {
            "id": "50573",
            "isLeaf": 1,
            "name": "PUERTO LÓPEZ"
          },
          {
            "id": "50577",
            "isLeaf": 1,
            "name": "PUERTO LLERAS"
          },
          {
            "id": "50590",
            "isLeaf": 1,
            "name": "PUERTO RICO"
          },
          {
            "id": "50606",
            "isLeaf": 1,
            "name": "RESTREPO"
          },
          {
            "id": "50680",
            "isLeaf": 1,
            "name": "SAN CARLOS DE GUAROA"
          },
          {
            "id": "50683",
            "isLeaf": 1,
            "name": "SAN JUAN DE ARAMA"
          },
          {
            "id": "50686",
            "isLeaf": 1,
            "name": "SAN JUANITO"
          },
          {
            "id": "50689",
            "isLeaf": 1,
            "name": "SAN MARTÍN"
          },
          {
            "id": "50711",
            "isLeaf": 1,
            "name": "VISTAHERMOSA"
          }
        ]
      },
      {
        "id": "52",
        "isLeaf": 0,
        "name": "NARIÑO",
        "children": [
          {
            "id": "52001",
            "isLeaf": 1,
            "name": "PASTO"
          },
          {
            "id": "52019",
            "isLeaf": 1,
            "name": "ALBÁN"
          },
          {
            "id": "52022",
            "isLeaf": 1,
            "name": "ALDANA"
          },
          {
            "id": "52036",
            "isLeaf": 1,
            "name": "ANCUYÁ"
          },
          {
            "id": "52051",
            "isLeaf": 1,
            "name": "ARBOLEDA"
          },
          {
            "id": "52079",
            "isLeaf": 1,
            "name": "BARBACOAS"
          },
          {
            "id": "52083",
            "isLeaf": 1,
            "name": "BELÉN"
          },
          {
            "id": "52110",
            "isLeaf": 1,
            "name": "BUESACO"
          },
          {
            "id": "52203",
            "isLeaf": 1,
            "name": "COLÓN"
          },
          {
            "id": "52207",
            "isLeaf": 1,
            "name": "CONSACÁ"
          },
          {
            "id": "52210",
            "isLeaf": 1,
            "name": "CONTADERO"
          },
          {
            "id": "52215",
            "isLeaf": 1,
            "name": "CÓRDOBA"
          },
          {
            "id": "52224",
            "isLeaf": 1,
            "name": "CUASPÚD"
          },
          {
            "id": "52227",
            "isLeaf": 1,
            "name": "CUMBAL"
          },
          {
            "id": "52233",
            "isLeaf": 1,
            "name": "CUMBITARA"
          },
          {
            "id": "52240",
            "isLeaf": 1,
            "name": "CHACHAGÜÍ"
          },
          {
            "id": "52250",
            "isLeaf": 1,
            "name": "EL CHARCO"
          },
          {
            "id": "52254",
            "isLeaf": 1,
            "name": "EL PEÑOL"
          },
          {
            "id": "52256",
            "isLeaf": 1,
            "name": "EL ROSARIO"
          },
          {
            "id": "52258",
            "isLeaf": 1,
            "name": "EL TABLÓN DE GÓMEZ"
          },
          {
            "id": "52260",
            "isLeaf": 1,
            "name": "EL TAMBO"
          },
          {
            "id": "52287",
            "isLeaf": 1,
            "name": "FUNES"
          },
          {
            "id": "52317",
            "isLeaf": 1,
            "name": "GUACHUCAL"
          },
          {
            "id": "52320",
            "isLeaf": 1,
            "name": "GUAITARILLA"
          },
          {
            "id": "52323",
            "isLeaf": 1,
            "name": "GUALMATÁN"
          },
          {
            "id": "52352",
            "isLeaf": 1,
            "name": "ILES"
          },
          {
            "id": "52354",
            "isLeaf": 1,
            "name": "IMUÉS"
          },
          {
            "id": "52356",
            "isLeaf": 1,
            "name": "IPIALES"
          },
          {
            "id": "52378",
            "isLeaf": 1,
            "name": "LA CRUZ"
          },
          {
            "id": "52381",
            "isLeaf": 1,
            "name": "LA FLORIDA"
          },
          {
            "id": "52385",
            "isLeaf": 1,
            "name": "LA LLANADA"
          },
          {
            "id": "52390",
            "isLeaf": 1,
            "name": "LA TOLA"
          },
          {
            "id": "52399",
            "isLeaf": 1,
            "name": "LA UNIÓN"
          },
          {
            "id": "52405",
            "isLeaf": 1,
            "name": "LEIVA"
          },
          {
            "id": "52411",
            "isLeaf": 1,
            "name": "LINARES"
          },
          {
            "id": "52418",
            "isLeaf": 1,
            "name": "LOS ANDES"
          },
          {
            "id": "52427",
            "isLeaf": 1,
            "name": "MAGÜÍ"
          },
          {
            "id": "52435",
            "isLeaf": 1,
            "name": "MALLAMA"
          },
          {
            "id": "52473",
            "isLeaf": 1,
            "name": "MOSQUERA"
          },
          {
            "id": "52480",
            "isLeaf": 1,
            "name": "NARIÑO"
          },
          {
            "id": "52490",
            "isLeaf": 1,
            "name": "OLAYA HERRERA"
          },
          {
            "id": "52506",
            "isLeaf": 1,
            "name": "OSPINA"
          },
          {
            "id": "52520",
            "isLeaf": 1,
            "name": "FRANCISCO PIZARRO"
          },
          {
            "id": "52540",
            "isLeaf": 1,
            "name": "POLICARPA"
          },
          {
            "id": "52560",
            "isLeaf": 1,
            "name": "POTOSÍ"
          },
          {
            "id": "52565",
            "isLeaf": 1,
            "name": "PROVIDENCIA"
          },
          {
            "id": "52573",
            "isLeaf": 1,
            "name": "PUERRES"
          },
          {
            "id": "52585",
            "isLeaf": 1,
            "name": "PUPIALES"
          },
          {
            "id": "52612",
            "isLeaf": 1,
            "name": "RICAURTE"
          },
          {
            "id": "52621",
            "isLeaf": 1,
            "name": "ROBERTO PAYÁN"
          },
          {
            "id": "52678",
            "isLeaf": 1,
            "name": "SAMANIEGO"
          },
          {
            "id": "52683",
            "isLeaf": 1,
            "name": "SANDONÁ"
          },
          {
            "id": "52685",
            "isLeaf": 1,
            "name": "SAN BERNARDO"
          },
          {
            "id": "52687",
            "isLeaf": 1,
            "name": "SAN LORENZO"
          },
          {
            "id": "52693",
            "isLeaf": 1,
            "name": "SAN PABLO"
          },
          {
            "id": "52694",
            "isLeaf": 1,
            "name": "SAN PEDRO DE CARTAGO"
          },
          {
            "id": "52696",
            "isLeaf": 1,
            "name": "SANTA BÁRBARA"
          },
          {
            "id": "52699",
            "isLeaf": 1,
            "name": "SANTACRUZ"
          },
          {
            "id": "52720",
            "isLeaf": 1,
            "name": "SAPUYES"
          },
          {
            "id": "52786",
            "isLeaf": 1,
            "name": "TAMINANGO"
          },
          {
            "id": "52788",
            "isLeaf": 1,
            "name": "TANGUA"
          },
          {
            "id": "52835",
            "isLeaf": 1,
            "name": "SAN ANDRÉS DE TUMACO"
          },
          {
            "id": "52838",
            "isLeaf": 1,
            "name": "TÚQUERRES"
          },
          {
            "id": "52885",
            "isLeaf": 1,
            "name": "YACUANQUER"
          }
        ]
      },
      {
        "id": "54",
        "isLeaf": 0,
        "name": "NORTE DE SANTANDER",
        "children": [
          {
            "id": "54001",
            "isLeaf": 1,
            "name": "SAN JOSÉ DE CÚCUTA"
          },
          {
            "id": "54003",
            "isLeaf": 1,
            "name": "ÁBREGO"
          },
          {
            "id": "54051",
            "isLeaf": 1,
            "name": "ARBOLEDAS"
          },
          {
            "id": "54099",
            "isLeaf": 1,
            "name": "BOCHALEMA"
          },
          {
            "id": "54109",
            "isLeaf": 1,
            "name": "BUCARASICA"
          },
          {
            "id": "54125",
            "isLeaf": 1,
            "name": "CÁCOTA"
          },
          {
            "id": "54128",
            "isLeaf": 1,
            "name": "CÁCHIRA"
          },
          {
            "id": "54172",
            "isLeaf": 1,
            "name": "CHINÁCOTA"
          },
          {
            "id": "54174",
            "isLeaf": 1,
            "name": "CHITAGÁ"
          },
          {
            "id": "54206",
            "isLeaf": 1,
            "name": "CONVENCIÓN"
          },
          {
            "id": "54223",
            "isLeaf": 1,
            "name": "CUCUTILLA"
          },
          {
            "id": "54239",
            "isLeaf": 1,
            "name": "DURANIA"
          },
          {
            "id": "54245",
            "isLeaf": 1,
            "name": "EL CARMEN"
          },
          {
            "id": "54250",
            "isLeaf": 1,
            "name": "EL TARRA"
          },
          {
            "id": "54261",
            "isLeaf": 1,
            "name": "EL ZULIA"
          },
          {
            "id": "54313",
            "isLeaf": 1,
            "name": "GRAMALOTE"
          },
          {
            "id": "54344",
            "isLeaf": 1,
            "name": "HACARÍ"
          },
          {
            "id": "54347",
            "isLeaf": 1,
            "name": "HERRÁN"
          },
          {
            "id": "54377",
            "isLeaf": 1,
            "name": "LABATECA"
          },
          {
            "id": "54385",
            "isLeaf": 1,
            "name": "LA ESPERANZA"
          },
          {
            "id": "54398",
            "isLeaf": 1,
            "name": "LA PLAYA"
          },
          {
            "id": "54405",
            "isLeaf": 1,
            "name": "LOS PATIOS"
          },
          {
            "id": "54418",
            "isLeaf": 1,
            "name": "LOURDES"
          },
          {
            "id": "54480",
            "isLeaf": 1,
            "name": "MUTISCUA"
          },
          {
            "id": "54498",
            "isLeaf": 1,
            "name": "OCAÑA"
          },
          {
            "id": "54518",
            "isLeaf": 1,
            "name": "PAMPLONA"
          },
          {
            "id": "54520",
            "isLeaf": 1,
            "name": "PAMPLONITA"
          },
          {
            "id": "54553",
            "isLeaf": 1,
            "name": "PUERTO SANTANDER"
          },
          {
            "id": "54599",
            "isLeaf": 1,
            "name": "RAGONVALIA"
          },
          {
            "id": "54660",
            "isLeaf": 1,
            "name": "SALAZAR"
          },
          {
            "id": "54670",
            "isLeaf": 1,
            "name": "SAN CALIXTO"
          },
          {
            "id": "54673",
            "isLeaf": 1,
            "name": "SAN CAYETANO"
          },
          {
            "id": "54680",
            "isLeaf": 1,
            "name": "SANTIAGO"
          },
          {
            "id": "54720",
            "isLeaf": 1,
            "name": "SARDINATA"
          },
          {
            "id": "54743",
            "isLeaf": 1,
            "name": "SILOS"
          },
          {
            "id": "54800",
            "isLeaf": 1,
            "name": "TEORAMA"
          },
          {
            "id": "54810",
            "isLeaf": 1,
            "name": "TIBÚ"
          },
          {
            "id": "54820",
            "isLeaf": 1,
            "name": "TOLEDO"
          },
          {
            "id": "54871",
            "isLeaf": 1,
            "name": "VILLA CARO"
          },
          {
            "id": "54874",
            "isLeaf": 1,
            "name": "VILLA DEL ROSARIO"
          }
        ]
      },
      {
        "id": "63",
        "isLeaf": 0,
        "name": "QUINDIO",
        "children": [
          {
            "id": "63001",
            "isLeaf": 1,
            "name": "ARMENIA"
          },
          {
            "id": "63111",
            "isLeaf": 1,
            "name": "BUENAVISTA"
          },
          {
            "id": "63130",
            "isLeaf": 1,
            "name": "CALARCÁ"
          },
          {
            "id": "63190",
            "isLeaf": 1,
            "name": "CIRCASIA"
          },
          {
            "id": "63212",
            "isLeaf": 1,
            "name": "CÓRDOBA"
          },
          {
            "id": "63272",
            "isLeaf": 1,
            "name": "FILANDIA"
          },
          {
            "id": "63302",
            "isLeaf": 1,
            "name": "GÉNOVA"
          },
          {
            "id": "63401",
            "isLeaf": 1,
            "name": "LA TEBAIDA"
          },
          {
            "id": "63470",
            "isLeaf": 1,
            "name": "MONTENEGRO"
          },
          {
            "id": "63548",
            "isLeaf": 1,
            "name": "PIJAO"
          },
          {
            "id": "63594",
            "isLeaf": 1,
            "name": "QUIMBAYA"
          },
          {
            "id": "63690",
            "isLeaf": 1,
            "name": "SALENTO"
          }
        ]
      },
      {
        "id": "66",
        "isLeaf": 0,
        "name": "RISARALDA",
        "children": [
          {
            "id": "66001",
            "isLeaf": 1,
            "name": "PEREIRA"
          },
          {
            "id": "66045",
            "isLeaf": 1,
            "name": "APÍA"
          },
          {
            "id": "66075",
            "isLeaf": 1,
            "name": "BALBOA"
          },
          {
            "id": "66088",
            "isLeaf": 1,
            "name": "BELÉN DE UMBRÍA"
          },
          {
            "id": "66170",
            "isLeaf": 1,
            "name": "DOSQUEBRADAS"
          },
          {
            "id": "66318",
            "isLeaf": 1,
            "name": "GUÁTICA"
          },
          {
            "id": "66383",
            "isLeaf": 1,
            "name": "LA CELIA"
          },
          {
            "id": "66400",
            "isLeaf": 1,
            "name": "LA VIRGINIA"
          },
          {
            "id": "66440",
            "isLeaf": 1,
            "name": "MARSELLA"
          },
          {
            "id": "66456",
            "isLeaf": 1,
            "name": "MISTRATÓ"
          },
          {
            "id": "66572",
            "isLeaf": 1,
            "name": "PUEBLO RICO"
          },
          {
            "id": "66594",
            "isLeaf": 1,
            "name": "QUINCHÍA"
          },
          {
            "id": "66682",
            "isLeaf": 1,
            "name": "SANTA ROSA DE CABAL"
          },
          {
            "id": "66687",
            "isLeaf": 1,
            "name": "SANTUARIO"
          }
        ]
      },
      {
        "id": "68",
        "isLeaf": 0,
        "name": "SANTANDER",
        "children": [
          {
            "id": "68001",
            "isLeaf": 1,
            "name": "BUCARAMANGA"
          },
          {
            "id": "68013",
            "isLeaf": 1,
            "name": "AGUADA"
          },
          {
            "id": "68020",
            "isLeaf": 1,
            "name": "ALBANIA"
          },
          {
            "id": "68051",
            "isLeaf": 1,
            "name": "ARATOCA"
          },
          {
            "id": "68077",
            "isLeaf": 1,
            "name": "BARBOSA"
          },
          {
            "id": "68079",
            "isLeaf": 1,
            "name": "BARICHARA"
          },
          {
            "id": "68081",
            "isLeaf": 1,
            "name": "BARRANCABERMEJA"
          },
          {
            "id": "68092",
            "isLeaf": 1,
            "name": "BETULIA"
          },
          {
            "id": "68101",
            "isLeaf": 1,
            "name": "BOLÍVAR"
          },
          {
            "id": "68121",
            "isLeaf": 1,
            "name": "CABRERA"
          },
          {
            "id": "68132",
            "isLeaf": 1,
            "name": "CALIFORNIA"
          },
          {
            "id": "68147",
            "isLeaf": 1,
            "name": "CAPITANEJO"
          },
          {
            "id": "68152",
            "isLeaf": 1,
            "name": "CARCASÍ"
          },
          {
            "id": "68160",
            "isLeaf": 1,
            "name": "CEPITÁ"
          },
          {
            "id": "68162",
            "isLeaf": 1,
            "name": "CERRITO"
          },
          {
            "id": "68167",
            "isLeaf": 1,
            "name": "CHARALÁ"
          },
          {
            "id": "68169",
            "isLeaf": 1,
            "name": "CHARTA"
          },
          {
            "id": "68176",
            "isLeaf": 1,
            "name": "CHIMA"
          },
          {
            "id": "68179",
            "isLeaf": 1,
            "name": "CHIPATÁ"
          },
          {
            "id": "68190",
            "isLeaf": 1,
            "name": "CIMITARRA"
          },
          {
            "id": "68207",
            "isLeaf": 1,
            "name": "CONCEPCIÓN"
          },
          {
            "id": "68209",
            "isLeaf": 1,
            "name": "CONFINES"
          },
          {
            "id": "68211",
            "isLeaf": 1,
            "name": "CONTRATACIÓN"
          },
          {
            "id": "68217",
            "isLeaf": 1,
            "name": "COROMORO"
          },
          {
            "id": "68229",
            "isLeaf": 1,
            "name": "CURITÍ"
          },
          {
            "id": "68235",
            "isLeaf": 1,
            "name": "EL CARMEN DE CHUCURÍ"
          },
          {
            "id": "68245",
            "isLeaf": 1,
            "name": "EL GUACAMAYO"
          },
          {
            "id": "68250",
            "isLeaf": 1,
            "name": "EL PEÑÓN"
          },
          {
            "id": "68255",
            "isLeaf": 1,
            "name": "EL PLAYÓN"
          },
          {
            "id": "68264",
            "isLeaf": 1,
            "name": "ENCINO"
          },
          {
            "id": "68266",
            "isLeaf": 1,
            "name": "ENCISO"
          },
          {
            "id": "68271",
            "isLeaf": 1,
            "name": "FLORIÁN"
          },
          {
            "id": "68276",
            "isLeaf": 1,
            "name": "FLORIDABLANCA"
          },
          {
            "id": "68296",
            "isLeaf": 1,
            "name": "GALÁN"
          },
          {
            "id": "68298",
            "isLeaf": 1,
            "name": "GÁMBITA"
          },
          {
            "id": "68307",
            "isLeaf": 1,
            "name": "GIRÓN"
          },
          {
            "id": "68318",
            "isLeaf": 1,
            "name": "GUACA"
          },
          {
            "id": "68320",
            "isLeaf": 1,
            "name": "GUADALUPE"
          },
          {
            "id": "68322",
            "isLeaf": 1,
            "name": "GUAPOTÁ"
          },
          {
            "id": "68324",
            "isLeaf": 1,
            "name": "GUAVATÁ"
          },
          {
            "id": "68327",
            "isLeaf": 1,
            "name": "GÜEPSA"
          },
          {
            "id": "68344",
            "isLeaf": 1,
            "name": "HATO"
          },
          {
            "id": "68368",
            "isLeaf": 1,
            "name": "JESÚS MARÍA"
          },
          {
            "id": "68370",
            "isLeaf": 1,
            "name": "JORDÁN"
          },
          {
            "id": "68377",
            "isLeaf": 1,
            "name": "LA BELLEZA"
          },
          {
            "id": "68385",
            "isLeaf": 1,
            "name": "LANDÁZURI"
          },
          {
            "id": "68397",
            "isLeaf": 1,
            "name": "LA PAZ"
          },
          {
            "id": "68406",
            "isLeaf": 1,
            "name": "LEBRIJA"
          },
          {
            "id": "68418",
            "isLeaf": 1,
            "name": "LOS SANTOS"
          },
          {
            "id": "68425",
            "isLeaf": 1,
            "name": "MACARAVITA"
          },
          {
            "id": "68432",
            "isLeaf": 1,
            "name": "MÁLAGA"
          },
          {
            "id": "68444",
            "isLeaf": 1,
            "name": "MATANZA"
          },
          {
            "id": "68464",
            "isLeaf": 1,
            "name": "MOGOTES"
          },
          {
            "id": "68468",
            "isLeaf": 1,
            "name": "MOLAGAVITA"
          },
          {
            "id": "68498",
            "isLeaf": 1,
            "name": "OCAMONTE"
          },
          {
            "id": "68500",
            "isLeaf": 1,
            "name": "OIBA"
          },
          {
            "id": "68502",
            "isLeaf": 1,
            "name": "ONZAGA"
          },
          {
            "id": "68522",
            "isLeaf": 1,
            "name": "PALMAR"
          },
          {
            "id": "68524",
            "isLeaf": 1,
            "name": "PALMAS DEL SOCORRO"
          },
          {
            "id": "68533",
            "isLeaf": 1,
            "name": "PÁRAMO"
          },
          {
            "id": "68547",
            "isLeaf": 1,
            "name": "PIEDECUESTA"
          },
          {
            "id": "68549",
            "isLeaf": 1,
            "name": "PINCHOTE"
          },
          {
            "id": "68572",
            "isLeaf": 1,
            "name": "PUENTE NACIONAL"
          },
          {
            "id": "68573",
            "isLeaf": 1,
            "name": "PUERTO PARRA"
          },
          {
            "id": "68575",
            "isLeaf": 1,
            "name": "PUERTO WILCHES"
          },
          {
            "id": "68615",
            "isLeaf": 1,
            "name": "RIONEGRO"
          },
          {
            "id": "68655",
            "isLeaf": 1,
            "name": "SABANA DE TORRES"
          },
          {
            "id": "68669",
            "isLeaf": 1,
            "name": "SAN ANDRÉS"
          },
          {
            "id": "68673",
            "isLeaf": 1,
            "name": "SAN BENITO"
          },
          {
            "id": "68679",
            "isLeaf": 1,
            "name": "SAN GIL"
          },
          {
            "id": "68682",
            "isLeaf": 1,
            "name": "SAN JOAQUÍN"
          },
          {
            "id": "68684",
            "isLeaf": 1,
            "name": "SAN JOSÉ DE MIRANDA"
          },
          {
            "id": "68686",
            "isLeaf": 1,
            "name": "SAN MIGUEL"
          },
          {
            "id": "68689",
            "isLeaf": 1,
            "name": "SAN VICENTE DE CHUCURÍ"
          },
          {
            "id": "68705",
            "isLeaf": 1,
            "name": "SANTA BÁRBARA"
          },
          {
            "id": "68720",
            "isLeaf": 1,
            "name": "SANTA HELENA DEL OPÓN"
          },
          {
            "id": "68745",
            "isLeaf": 1,
            "name": "SIMACOTA"
          },
          {
            "id": "68755",
            "isLeaf": 1,
            "name": "SOCORRO"
          },
          {
            "id": "68770",
            "isLeaf": 1,
            "name": "SUAITA"
          },
          {
            "id": "68773",
            "isLeaf": 1,
            "name": "SUCRE"
          },
          {
            "id": "68780",
            "isLeaf": 1,
            "name": "SURATÁ"
          },
          {
            "id": "68820",
            "isLeaf": 1,
            "name": "TONA"
          },
          {
            "id": "68855",
            "isLeaf": 1,
            "name": "VALLE DE SAN JOSÉ"
          },
          {
            "id": "68861",
            "isLeaf": 1,
            "name": "VÉLEZ"
          },
          {
            "id": "68867",
            "isLeaf": 1,
            "name": "VETAS"
          },
          {
            "id": "68872",
            "isLeaf": 1,
            "name": "VILLANUEVA"
          },
          {
            "id": "68895",
            "isLeaf": 1,
            "name": "ZAPATOCA"
          }
        ]
      },
      {
        "id": "70",
        "isLeaf": 0,
        "name": "SUCRE",
        "children": [
          {
            "id": "70001",
            "isLeaf": 1,
            "name": "SINCELEJO"
          },
          {
            "id": "70110",
            "isLeaf": 1,
            "name": "BUENAVISTA"
          },
          {
            "id": "70124",
            "isLeaf": 1,
            "name": "CAIMITO"
          },
          {
            "id": "70204",
            "isLeaf": 1,
            "name": "COLOSÓ"
          },
          {
            "id": "70215",
            "isLeaf": 1,
            "name": "COROZAL"
          },
          {
            "id": "70221",
            "isLeaf": 1,
            "name": "COVEÑAS"
          },
          {
            "id": "70230",
            "isLeaf": 1,
            "name": "CHALÁN"
          },
          {
            "id": "70233",
            "isLeaf": 1,
            "name": "EL ROBLE"
          },
          {
            "id": "70235",
            "isLeaf": 1,
            "name": "GALERAS"
          },
          {
            "id": "70265",
            "isLeaf": 1,
            "name": "GUARANDA"
          },
          {
            "id": "70400",
            "isLeaf": 1,
            "name": "LA UNIÓN"
          },
          {
            "id": "70418",
            "isLeaf": 1,
            "name": "LOS PALMITOS"
          },
          {
            "id": "70429",
            "isLeaf": 1,
            "name": "MAJAGUAL"
          },
          {
            "id": "70473",
            "isLeaf": 1,
            "name": "MORROA"
          },
          {
            "id": "70508",
            "isLeaf": 1,
            "name": "OVEJAS"
          },
          {
            "id": "70523",
            "isLeaf": 1,
            "name": "PALMITO"
          },
          {
            "id": "70670",
            "isLeaf": 1,
            "name": "SAMPUÉS"
          },
          {
            "id": "70678",
            "isLeaf": 1,
            "name": "SAN BENITO ABAD"
          },
          {
            "id": "70702",
            "isLeaf": 1,
            "name": "SAN JUAN DE BETULIA"
          },
          {
            "id": "70708",
            "isLeaf": 1,
            "name": "SAN MARCOS"
          },
          {
            "id": "70713",
            "isLeaf": 1,
            "name": "SAN ONOFRE"
          },
          {
            "id": "70717",
            "isLeaf": 1,
            "name": "SAN PEDRO"
          },
          {
            "id": "70742",
            "isLeaf": 1,
            "name": "SAN LUIS DE SINCÉ"
          },
          {
            "id": "70771",
            "isLeaf": 1,
            "name": "SUCRE"
          },
          {
            "id": "70820",
            "isLeaf": 1,
            "name": "SANTIAGO DE TOLÚ"
          },
          {
            "id": "70823",
            "isLeaf": 1,
            "name": "TOLÚ VIEJO"
          }
        ]
      },
      {
        "id": "73",
        "isLeaf": 0,
        "name": "TOLIMA",
        "children": [
          {
            "id": "73001",
            "isLeaf": 1,
            "name": "IBAGUÉ"
          },
          {
            "id": "73024",
            "isLeaf": 1,
            "name": "ALPUJARRA"
          },
          {
            "id": "73026",
            "isLeaf": 1,
            "name": "ALVARADO"
          },
          {
            "id": "73030",
            "isLeaf": 1,
            "name": "AMBALEMA"
          },
          {
            "id": "73043",
            "isLeaf": 1,
            "name": "ANZOÁTEGUI"
          },
          {
            "id": "73055",
            "isLeaf": 1,
            "name": "ARMERO"
          },
          {
            "id": "73067",
            "isLeaf": 1,
            "name": "ATACO"
          },
          {
            "id": "73124",
            "isLeaf": 1,
            "name": "CAJAMARCA"
          },
          {
            "id": "73148",
            "isLeaf": 1,
            "name": "CARMEN DE APICALÁ"
          },
          {
            "id": "73152",
            "isLeaf": 1,
            "name": "CASABIANCA"
          },
          {
            "id": "73168",
            "isLeaf": 1,
            "name": "CHAPARRAL"
          },
          {
            "id": "73200",
            "isLeaf": 1,
            "name": "COELLO"
          },
          {
            "id": "73217",
            "isLeaf": 1,
            "name": "COYAIMA"
          },
          {
            "id": "73226",
            "isLeaf": 1,
            "name": "CUNDAY"
          },
          {
            "id": "73236",
            "isLeaf": 1,
            "name": "DOLORES"
          },
          {
            "id": "73268",
            "isLeaf": 1,
            "name": "ESPINAL"
          },
          {
            "id": "73270",
            "isLeaf": 1,
            "name": "FALAN"
          },
          {
            "id": "73275",
            "isLeaf": 1,
            "name": "FLANDES"
          },
          {
            "id": "73283",
            "isLeaf": 1,
            "name": "FRESNO"
          },
          {
            "id": "73319",
            "isLeaf": 1,
            "name": "GUAMO"
          },
          {
            "id": "73347",
            "isLeaf": 1,
            "name": "HERVEO"
          },
          {
            "id": "73349",
            "isLeaf": 1,
            "name": "HONDA"
          },
          {
            "id": "73352",
            "isLeaf": 1,
            "name": "ICONONZO"
          },
          {
            "id": "73408",
            "isLeaf": 1,
            "name": "LÉRIDA"
          },
          {
            "id": "73411",
            "isLeaf": 1,
            "name": "LÍBANO"
          },
          {
            "id": "73443",
            "isLeaf": 1,
            "name": "SAN SEBASTIÁN DE MARIQUITA"
          },
          {
            "id": "73449",
            "isLeaf": 1,
            "name": "MELGAR"
          },
          {
            "id": "73461",
            "isLeaf": 1,
            "name": "MURILLO"
          },
          {
            "id": "73483",
            "isLeaf": 1,
            "name": "NATAGAIMA"
          },
          {
            "id": "73504",
            "isLeaf": 1,
            "name": "ORTEGA"
          },
          {
            "id": "73520",
            "isLeaf": 1,
            "name": "PALOCABILDO"
          },
          {
            "id": "73547",
            "isLeaf": 1,
            "name": "PIEDRAS"
          },
          {
            "id": "73555",
            "isLeaf": 1,
            "name": "PLANADAS"
          },
          {
            "id": "73563",
            "isLeaf": 1,
            "name": "PRADO"
          },
          {
            "id": "73585",
            "isLeaf": 1,
            "name": "PURIFICACIÓN"
          },
          {
            "id": "73616",
            "isLeaf": 1,
            "name": "RIOBLANCO"
          },
          {
            "id": "73622",
            "isLeaf": 1,
            "name": "RONCESVALLES"
          },
          {
            "id": "73624",
            "isLeaf": 1,
            "name": "ROVIRA"
          },
          {
            "id": "73671",
            "isLeaf": 1,
            "name": "SALDAÑA"
          },
          {
            "id": "73675",
            "isLeaf": 1,
            "name": "SAN ANTONIO"
          },
          {
            "id": "73678",
            "isLeaf": 1,
            "name": "SAN LUIS"
          },
          {
            "id": "73686",
            "isLeaf": 1,
            "name": "SANTA ISABEL"
          },
          {
            "id": "73770",
            "isLeaf": 1,
            "name": "SUÁREZ"
          },
          {
            "id": "73854",
            "isLeaf": 1,
            "name": "VALLE DE SAN JUAN"
          },
          {
            "id": "73861",
            "isLeaf": 1,
            "name": "VENADILLO"
          },
          {
            "id": "73870",
            "isLeaf": 1,
            "name": "VILLAHERMOSA"
          },
          {
            "id": "73873",
            "isLeaf": 1,
            "name": "VILLARRICA"
          }
        ]
      },
      {
        "id": "76",
        "isLeaf": 0,
        "name": "VALLE DEL CAUCA",
        "children": [
          {
            "id": "76001",
            "isLeaf": 1,
            "name": "CALI"
          },
          {
            "id": "76020",
            "isLeaf": 1,
            "name": "ALCALÁ"
          },
          {
            "id": "76036",
            "isLeaf": 1,
            "name": "ANDALUCÍA"
          },
          {
            "id": "76041",
            "isLeaf": 1,
            "name": "ANSERMANUEVO"
          },
          {
            "id": "76054",
            "isLeaf": 1,
            "name": "ARGELIA"
          },
          {
            "id": "76100",
            "isLeaf": 1,
            "name": "BOLÍVAR"
          },
          {
            "id": "76109",
            "isLeaf": 1,
            "name": "BUENAVENTURA"
          },
          {
            "id": "76111",
            "isLeaf": 1,
            "name": "GUADALAJARA DE BUGA"
          },
          {
            "id": "76113",
            "isLeaf": 1,
            "name": "BUGALAGRANDE"
          },
          {
            "id": "76122",
            "isLeaf": 1,
            "name": "CAICEDONIA"
          },
          {
            "id": "76126",
            "isLeaf": 1,
            "name": "CALIMA"
          },
          {
            "id": "76130",
            "isLeaf": 1,
            "name": "CANDELARIA"
          },
          {
            "id": "76147",
            "isLeaf": 1,
            "name": "CARTAGO"
          },
          {
            "id": "76233",
            "isLeaf": 1,
            "name": "DAGUA"
          },
          {
            "id": "76243",
            "isLeaf": 1,
            "name": "EL ÁGUILA"
          },
          {
            "id": "76246",
            "isLeaf": 1,
            "name": "EL CAIRO"
          },
          {
            "id": "76248",
            "isLeaf": 1,
            "name": "EL CERRITO"
          },
          {
            "id": "76250",
            "isLeaf": 1,
            "name": "EL DOVIO"
          },
          {
            "id": "76275",
            "isLeaf": 1,
            "name": "FLORIDA"
          },
          {
            "id": "76306",
            "isLeaf": 1,
            "name": "GINEBRA"
          },
          {
            "id": "76318",
            "isLeaf": 1,
            "name": "GUACARÍ"
          },
          {
            "id": "76364",
            "isLeaf": 1,
            "name": "JAMUNDÍ"
          },
          {
            "id": "76377",
            "isLeaf": 1,
            "name": "LA CUMBRE"
          },
          {
            "id": "76400",
            "isLeaf": 1,
            "name": "LA UNIÓN"
          },
          {
            "id": "76403",
            "isLeaf": 1,
            "name": "LA VICTORIA"
          },
          {
            "id": "76497",
            "isLeaf": 1,
            "name": "OBANDO"
          },
          {
            "id": "76520",
            "isLeaf": 1,
            "name": "PALMIRA"
          },
          {
            "id": "76563",
            "isLeaf": 1,
            "name": "PRADERA"
          },
          {
            "id": "76606",
            "isLeaf": 1,
            "name": "RESTREPO"
          },
          {
            "id": "76616",
            "isLeaf": 1,
            "name": "RIOFRÍO"
          },
          {
            "id": "76622",
            "isLeaf": 1,
            "name": "ROLDANILLO"
          },
          {
            "id": "76670",
            "isLeaf": 1,
            "name": "SAN PEDRO"
          },
          {
            "id": "76736",
            "isLeaf": 1,
            "name": "SEVILLA"
          },
          {
            "id": "76823",
            "isLeaf": 1,
            "name": "TORO"
          },
          {
            "id": "76828",
            "isLeaf": 1,
            "name": "TRUJILLO"
          },
          {
            "id": "76834",
            "isLeaf": 1,
            "name": "TULUÁ"
          },
          {
            "id": "76845",
            "isLeaf": 1,
            "name": "ULLOA"
          },
          {
            "id": "76863",
            "isLeaf": 1,
            "name": "VERSALLES"
          },
          {
            "id": "76869",
            "isLeaf": 1,
            "name": "VIJES"
          },
          {
            "id": "76890",
            "isLeaf": 1,
            "name": "YOTOCO"
          },
          {
            "id": "76892",
            "isLeaf": 1,
            "name": "YUMBO"
          },
          {
            "id": "76895",
            "isLeaf": 1,
            "name": "ZARZAL"
          }
        ]
      },
      {
        "id": "81",
        "isLeaf": 0,
        "name": "ARAUCA",
        "children": [
          {
            "id": "81001",
            "isLeaf": 1,
            "name": "ARAUCA"
          },
          {
            "id": "81065",
            "isLeaf": 1,
            "name": "ARAUQUITA"
          },
          {
            "id": "81220",
            "isLeaf": 1,
            "name": "CRAVO NORTE"
          },
          {
            "id": "81300",
            "isLeaf": 1,
            "name": "FORTUL"
          },
          {
            "id": "81591",
            "isLeaf": 1,
            "name": "PUERTO RONDÓN"
          },
          {
            "id": "81736",
            "isLeaf": 1,
            "name": "SARAVENA"
          },
          {
            "id": "81794",
            "isLeaf": 1,
            "name": "TAME"
          }
        ]
      },
      {
        "id": "85",
        "isLeaf": 0,
        "name": "CASANARE",
        "children": [
          {
            "id": "85001",
            "isLeaf": 1,
            "name": "YOPAL"
          },
          {
            "id": "85010",
            "isLeaf": 1,
            "name": "AGUAZUL"
          },
          {
            "id": "85015",
            "isLeaf": 1,
            "name": "CHÁMEZA"
          },
          {
            "id": "85125",
            "isLeaf": 1,
            "name": "HATO COROZAL"
          },
          {
            "id": "85136",
            "isLeaf": 1,
            "name": "LA SALINA"
          },
          {
            "id": "85139",
            "isLeaf": 1,
            "name": "MANÍ"
          },
          {
            "id": "85162",
            "isLeaf": 1,
            "name": "MONTERREY"
          },
          {
            "id": "85225",
            "isLeaf": 1,
            "name": "NUNCHÍA"
          },
          {
            "id": "85230",
            "isLeaf": 1,
            "name": "OROCUÉ"
          },
          {
            "id": "85250",
            "isLeaf": 1,
            "name": "PAZ DE ARIPORO"
          },
          {
            "id": "85263",
            "isLeaf": 1,
            "name": "PORE"
          },
          {
            "id": "85279",
            "isLeaf": 1,
            "name": "RECETOR"
          },
          {
            "id": "85300",
            "isLeaf": 1,
            "name": "SABANALARGA"
          },
          {
            "id": "85315",
            "isLeaf": 1,
            "name": "SÁCAMA"
          },
          {
            "id": "85325",
            "isLeaf": 1,
            "name": "SAN LUIS DE PALENQUE"
          },
          {
            "id": "85400",
            "isLeaf": 1,
            "name": "TÁMARA"
          },
          {
            "id": "85410",
            "isLeaf": 1,
            "name": "TAURAMENA"
          },
          {
            "id": "85430",
            "isLeaf": 1,
            "name": "TRINIDAD"
          },
          {
            "id": "85440",
            "isLeaf": 1,
            "name": "VILLANUEVA"
          }
        ]
      },
      {
        "id": "86",
        "isLeaf": 0,
        "name": "PUTUMAYO",
        "children": [
          {
            "id": "86001",
            "isLeaf": 1,
            "name": "MOCOA"
          },
          {
            "id": "86219",
            "isLeaf": 1,
            "name": "COLÓN"
          },
          {
            "id": "86320",
            "isLeaf": 1,
            "name": "ORITO"
          },
          {
            "id": "86568",
            "isLeaf": 1,
            "name": "PUERTO ASÍS"
          },
          {
            "id": "86569",
            "isLeaf": 1,
            "name": "PUERTO CAICEDO"
          },
          {
            "id": "86571",
            "isLeaf": 1,
            "name": "PUERTO GUZMÁN"
          },
          {
            "id": "86573",
            "isLeaf": 1,
            "name": "PUERTO LEGUÍZAMO"
          },
          {
            "id": "86749",
            "isLeaf": 1,
            "name": "SIBUNDOY"
          },
          {
            "id": "86755",
            "isLeaf": 1,
            "name": "SAN FRANCISCO"
          },
          {
            "id": "86757",
            "isLeaf": 1,
            "name": "SAN MIGUEL"
          },
          {
            "id": "86760",
            "isLeaf": 1,
            "name": "SANTIAGO"
          },
          {
            "id": "86865",
            "isLeaf": 1,
            "name": "VALLE DEL GUAMUEZ"
          },
          {
            "id": "86885",
            "isLeaf": 1,
            "name": "VILLAGARZÓN"
          }
        ]
      },
      {
        "id": "88",
        "isLeaf": 0,
        "name": "ARCHIPIÉLAGO DE SAN ANDRÉS, PROVIDENCIA Y SANTA CATALINA",
        "children": [
          {
            "id": "88001",
            "isLeaf": 1,
            "name": "SAN ANDRÉS"
          },
          {
            "id": "88564",
            "isLeaf": 1,
            "name": "PROVIDENCIA"
          }
        ]
      },
      {
        "id": "91",
        "isLeaf": 0,
        "name": "AMAZONAS",
        "children": [
          {
            "id": "91001",
            "isLeaf": 1,
            "name": "LETICIA"
          },
          {
            "id": "91263",
            "isLeaf": 1,
            "name": "EL ENCANTO"
          },
          {
            "id": "91405",
            "isLeaf": 1,
            "name": "LA CHORRERA"
          },
          {
            "id": "91407",
            "isLeaf": 1,
            "name": "LA PEDRERA"
          },
          {
            "id": "91430",
            "isLeaf": 1,
            "name": "LA VICTORIA"
          },
          {
            "id": "91460",
            "isLeaf": 1,
            "name": "MIRITÍ - PARANÁ"
          },
          {
            "id": "91530",
            "isLeaf": 1,
            "name": "PUERTO ALEGRÍA"
          },
          {
            "id": "91536",
            "isLeaf": 1,
            "name": "PUERTO ARICA"
          },
          {
            "id": "91540",
            "isLeaf": 1,
            "name": "PUERTO NARIÑO"
          },
          {
            "id": "91669",
            "isLeaf": 1,
            "name": "PUERTO SANTANDER"
          },
          {
            "id": "91798",
            "isLeaf": 1,
            "name": "TARAPACÁ"
          }
        ]
      },
      {
        "id": "94",
        "isLeaf": 0,
        "name": "GUAINÍA",
        "children": [
          {
            "id": "94001",
            "isLeaf": 1,
            "name": "INÍRIDA"
          },
          {
            "id": "94343",
            "isLeaf": 1,
            "name": "BARRANCO MINAS"
          },
          {
            "id": "94663",
            "isLeaf": 1,
            "name": "MAPIRIPANA"
          },
          {
            "id": "94883",
            "isLeaf": 1,
            "name": "SAN FELIPE"
          },
          {
            "id": "94884",
            "isLeaf": 1,
            "name": "PUERTO COLOMBIA"
          },
          {
            "id": "94885",
            "isLeaf": 1,
            "name": "LA GUADALUPE"
          },
          {
            "id": "94886",
            "isLeaf": 1,
            "name": "CACAHUAL"
          },
          {
            "id": "94887",
            "isLeaf": 1,
            "name": "PANA PANA"
          },
          {
            "id": "94888",
            "isLeaf": 1,
            "name": "MORICHAL"
          }
        ]
      },
      {
        "id": "95",
        "isLeaf": 0,
        "name": "GUAVIARE",
        "children": [
          {
            "id": "95001",
            "isLeaf": 1,
            "name": "SAN JOSÉ DEL GUAVIARE"
          },
          {
            "id": "95015",
            "isLeaf": 1,
            "name": "CALAMAR"
          },
          {
            "id": "95025",
            "isLeaf": 1,
            "name": "EL RETORNO"
          },
          {
            "id": "95200",
            "isLeaf": 1,
            "name": "MIRAFLORES"
          }
        ]
      },
      {
        "id": "97",
        "isLeaf": 0,
        "name": "VAUPÉS",
        "children": [
          {
            "id": "97001",
            "isLeaf": 1,
            "name": "MITÚ"
          },
          {
            "id": "97161",
            "isLeaf": 1,
            "name": "CARURÚ"
          },
          {
            "id": "97511",
            "isLeaf": 1,
            "name": "PACOA"
          },
          {
            "id": "97666",
            "isLeaf": 1,
            "name": "TARAIRA"
          },
          {
            "id": "97777",
            "isLeaf": 1,
            "name": "PAPUNAHUA"
          },
          {
            "id": "97889",
            "isLeaf": 1,
            "name": "YAVARATÉ"
          }
        ]
      },
      {
        "id": "99",
        "isLeaf": 0,
        "name": "VICHADA",
        "children": [
          {
            "id": "99001",
            "isLeaf": 1,
            "name": "PUERTO CARREÑO"
          },
          {
            "id": "99524",
            "isLeaf": 1,
            "name": "LA PRIMAVERA"
          },
          {
            "id": "99624",
            "isLeaf": 1,
            "name": "SANTA ROSALÍA"
          },
          {
            "id": "99773",
            "isLeaf": 1,
            "name": "CUMARIBO"
          }
        ]
      }
    ]
  }
])
      }
    },
    methods: {
      onDel(node) {
        console.log(node)
        node.remove()
      },
 
      onChangeName(params) {
        console.log(params)
      },
 
      onAddNode(params) {
        console.log(params)
      },
 
      onClick(params) {
        console.log(params)
      },
 
      addNode() {
        var node = new TreeNode({ name: 'new node', isLeaf: false })
        if (!this.data.children) this.data.children = []
        this.data.addChildren(node)
      },
 
      getNewTree() {
        var vm = this
        function _dfs(oldNode) {
          var newNode = {}
 
          for (var k in oldNode) {
            if (k !== 'children' && k !== 'parent') {
              newNode[k] = oldNode[k]
            }
          }
 
          if (oldNode.children && oldNode.children.length > 0) {
            newNode.children = []
            for (var i = 0, len = oldNode.children.length; i < len; i++) {
              newNode.children.push(_dfs(oldNode.children[i]))
            }
          }
          return newNode
        }
 
        vm.newTree = _dfs(vm.data)
      }
    }
  }
</script> 
    
    <style lang="less" rel="stylesheet/less">
    .vtl {
        .vtl-drag-disabled {
        background-color: #d0cfcf;
        &:hover {
            background-color: #d0cfcf;
        }
        }
        .vtl-disabled {
      background-color: #d0cfcf;
    }
  }
</style> 
 
<style lang="less" rel="stylesheet/less" scoped>
  .icon {
    &:hover {
      cursor: pointer;
    }
  }
 
  .muted {
    color: gray;
    font-size: 80%;
  }
</style> 