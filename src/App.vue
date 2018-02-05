<template>
  <div id="app">

    <main>



    <header>
      <div class="header-image">
        <img src="./assets/images/headerimg.png">

      </div>
      <div class="header-logo">
        <h1>ProDentica</h1>
        <h3>Gabinet stomatologiczny</h3>
      </div>
      <div class="header-contact">
        Kontakt
      </div>

    </header>

    <nav>

      <div class="nav-home-block">
        <router-link to="/"><div class="nav-home radial-gradient">Home</div></router-link>
      </div>


      <div class="nav-links-block">
        <router-link  to="/onas"><div class="nav-link">O nas</div></router-link>


        <router-link to="/przypadki"><div class="nav-link radial-gradient">Nasze przypadki</div></router-link>


        <router-link to="/galeria"><div class="nav-link">Galeria</div></router-link>

        <router-link to="/galeria"><div class="nav-link">Nasz zespół</div></router-link>
        <router-link to="/kontakt"><div class="nav-link radial-gradient">Kontakt</div></router-link>
      </div>




    </nav>

    <router-view></router-view>

    </main>

    <footer class="gradient-footer">
        <div class="footer-menu">
          <router-link to="/">Home</router-link>
          <router-link  to="/onas">O nas</router-link>
          <router-link to="/przypadki">Nasze przypadki</router-link>
          <router-link to="/galeria">Galeria</router-link>
          <router-link to="/galeria">Nasz zespół</router-link>
          <router-link to="/kontakt">Kontakt</router-link>
        </div>

      <hr>


      <div class="copyright">
        <p>Copyright &copy; {{ year }} by Prodentica</p>
      </div>


    </footer>

  </div>

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      year: this.getYear()

    }
  },
  methods: {
    getYear() {
      let d = new Date();
      let y = d.getFullYear();
      return y;
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

* {
  box-sizing: border-box;
}

body {
  color: #656665;
  background: linear-gradient(#e7e7e7 50px, white 100px);
  background-repeat: no-repeat;
  margin: 0;
}

#app {
  font-family: latolight, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  margin-top: 60px;
  width: 100%;
  margin: auto;
}

main {
  width: 1000px;
  margin: auto;
}

h1, h2 {
  font-family: latoregular, sans-serif;
  font-weight: normal;
  text-align: left;
  color: #71d759;
}

header {
  height: 150px;
  display: flex;
  align-items: center;
  text-align: center;
}

header div {
  width: 33%;
}

nav {
  display: flex;
}

.nav-links-block {
  display: flex;
  flex-wrap: wrap;
}

.nav-home {
  width: 300px;
  height: 300px;
  padding: 15px;
  margin: 2px;

}


.nav-link {
  width: 150px;
  height: 150px;
  background-color: #f9f9f9;
  border: solid 1px grey;
  color: #8b8b8b;
  padding: 15px;
  margin: 2px;
}

.radial-gradient {
  background-image: radial-gradient(
      #00c23a 0%, #009f30 100%);
  color: white;
}

.radial-gradient:hover {
  transition: background-image 5s;
  background-image: radial-gradient(
      #00c23a 10%, #009f30 50%);
}

.gradient-footer {
  background: linear-gradient(#e4e4e4 50px, white 100px);
  color: grey;
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
  color: white;
  text-decoration: none;
}

footer {
  height: 100px;
  padding: 15px;
}

.footer-menu a{
  color: #656665;
}

.copyright {
  text-align: right;
}
</style>
