<template>
  <div class="login">
    <h1 class="title">Autenticación Requerida</h1>
    
    <form class="form" @submit.prevent="login">
      <label class="form-label" for="email">Email:</label>
      <input
        v-model="email"
        class="form-input"
        type="email"
        id="email"
        required
        placeholder="Email"
      >
      
      <label class="form-label" for="password">Password:</label>
      <input
        v-model="password"
        class="form-input"
        type="password"
        id="password"
        required
        placeholder="Password"
      >
      
      <p v-if="error" class="error">
        {{ errorMessage || 'Has introducido mal el email o la contraseña.' }}
      </p>
      
      <input class="form-submit" type="submit" value="Login">
    </form>
  </div>
</template>

<script>
// Asegúrate de que la ruta sea correcta hacia tu archivo auth.js
import auth from "@/auth"; // O "@/services/auth" dependiendo de tu carpeta

export default {
  name: "Login",
  data: () => ({
    email: "",
    password: "",
    error: false,
    errorMessage: "",
    loading: false
  }),
  methods: {


async login() {
  this.error = false;
  this.loading = true;
  
  try {
    // Llamamos al auth.js corregido
    const response = await auth.login(this.email, this.password);
    
    // Reqres devuelve el token en response.data.token
    if (response.data && response.data.token) {
        const user = { email: this.email };
        const token = response.data.token;
        
        // ¡OJO! Pasamos ambos argumentos
        auth.setUserLogged(user, token);
        
        // Redirigimos
        this.$router.push("/");
    }
  } catch (err) {
    console.log(err);
    this.error = true;
    // Si Reqres devuelve error, lo mostramos
    if (err.response && err.response.data && err.response.data.error) {
        this.errorMessage = err.response.data.error; 
    } else {
        this.errorMessage = "Error de conexión o credenciales.";
    }
  } finally {
    this.loading = false;
  }
}


  }
};
</script>

<style lang="scss" scoped>
.login {
  padding: 2rem;
}
.title {
  text-align: center;
}
.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background: rgba(19, 35, 47, 0.9);
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
.form-label {
  margin-top: 2rem;
  color: white;
  margin-bottom: 0.5rem;
  &:first-of-type {
    margin-top: 0rem;
  }
}
.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;
  &:focus {
    outline: 0;
    border-color: #1ab188;
  }
}
.form-submit {
  background: #1ab188;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #0b9185;
  }
}
.error {
  margin: 1rem 0 0;
  color: #ff4a96;
  font-weight: bold;
  text-align: center;
}
</style>