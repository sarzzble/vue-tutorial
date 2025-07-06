<template>
  <nav>
    <router-link to="/">Home</router-link> |
    
    <!-- route'un name'i kullanılarak da yönlendirme yapılabilir -->
    <router-link :to="{name: 'about'}">About</router-link> |
    <router-link :to="{name: 'jobs'}">Jobs</router-link>
  </nav>

  <button @click="redirect">Redirect</button>
  <button @click="back">Go back</button>
  <button @click="forward">Go forward</button>

  <router-view/> <!-- router-view renders home or about --> 
</template>

<script>
  export default {
    methods: {
      redirect(){
        this.$router.push({name: 'home'}) // home sayfasına yönlendirir.
      },
      back(){
        this.$router.go(-1) // -1 ile bir önceki sayfaya geri dönülür. -2 ile iki önceki sayfaya gidilir.
      },
      forward(){
        this.$router.go(1) // 1 ile bir sonraki sayfaya gidilir. 2 ile iki sonraki sayfaya gidilir.
      },      
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
</style>
