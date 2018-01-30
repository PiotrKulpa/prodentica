<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/onas">O nas</router-link>
      <router-link to="/przypadki">Nasze przypadki</router-link>
      <router-link to="/galeria">Galeria</router-link>
      <router-link to="/kontakt">Kontakt</router-link>
    </nav>
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

/** Fonts */
@font-face {
    font-family: 'latoregular';
    src: url('/assets/fonts/latoregular.ttf') format('ttf');
}

@font-face {
    font-family: 'latolight';
    src: url('/assets/fonts/latolight.ttf') format('ttf');
}



#app {
  font-family: latolight, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
  width: 1000px;
  margin: auto;
}

h1, h2 {
  font-family: latoregular, sans-serif;
  font-weight: normal;
  text-align: left;
  color: #71d759;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
