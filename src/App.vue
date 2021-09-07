<template>

  <div id="app">

    <b-navbar toggleable="md" type="dark" variant="dark">
    
          <b-container >
              <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
              <b-navbar-brand >CNB Colegio Nacional de Bacteriología</b-navbar-brand>
            
<!-- disabled -->
            <b-collapse is-nav id="nav-collapse" >
                <b-navbar-nav>

                  <b-nav-item-dropdown text="Virtualidad" right>
                    <b-dropdown-item :to="{name:'Home'}" exact>Eventos</b-dropdown-item>
                    <b-dropdown-item :to="{name:'Participante'}">Participantes</b-dropdown-item>
                    <b-dropdown-item  :to="{name:'certificado'}">Filtros</b-dropdown-item>
                  <!--   <b-dropdown-item  :to="{name:'prueba'}">Prueba</b-dropdown-item> -->
                  </b-nav-item-dropdown>
                  <b-nav-item-dropdown text="Certificaciones Digitales" right>
                    <b-dropdown-item  :to="{name:'certificadopublico'}">Certificados</b-dropdown-item>
                    <b-dropdown-item  :to="{name:'carnetafiliacioncnb'}">Carné Afiliación CNB</b-dropdown-item>                    
                  </b-nav-item-dropdown>                   
<!-- 

                  <b-nav-item  :to="{name:'Home'}" exact>Cursos</b-nav-item>
                  <b-nav-item  :to="{name:'Participante'}">Participantes</b-nav-item>
                  <b-nav-item  :to="{name:'certificado'}">Filtros</b-nav-item> -->

<!--                   <b-nav-item  :to="{name:'login'}">Funcionario</b-nav-item>
                  <b-nav-item  :to="{name:'cerrar'}">Cerrar sesión</b-nav-item> -->

                  <b-nav-item-dropdown text="Funcionario" right>
                    <b-dropdown-item :to="{name:'login'}">Ingresar</b-dropdown-item>
                    <b-dropdown-item  :to="{name:'cerrar'}">Cerrar sesión</b-dropdown-item>
                  </b-nav-item-dropdown>


                </b-navbar-nav>    
            </b-collapse>
          </b-container>


    </b-navbar>

   <b-container>
     <router-view/>
   </b-container>
  

  </div>
</template>




<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
