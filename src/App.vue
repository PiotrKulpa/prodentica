<template>
  <div id="app">
    <!-- <div class="darkbox-box">
      <i class="fa fa-times-circle close" aria-hidden="true"></i>
      <div class="img-container">

      </div>
    </div> -->

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
        <p><a href="tel:081 742 68 24">081 742 68 24 <i class="fa fa-phone" aria-hidden="true"></i></a></p>
        <p><a href="mailto:sykutjanusz@gmail.com">sykutjanusz@gmail.com <i class="fa fa-envelope" aria-hidden="true"></i></a></p>

      </div>

    </header>

    <div class="bars"  @click="toggleNav()">
      <i class="fa fa-bars" aria-hidden="true"></i>
    </div>

    <nav v-bind:class="{'nav-close': navState, 'nav-open': !navState}">



      <div class="nav-home-block" @click="toggleNav()">
        <router-link to="/" exact active-class="active" @click="toggleNav()"><div class="nav-home radial-gradient">Home</div></router-link>
      </div>


      <div class="nav-links-block" @click="toggleNav()">
        <router-link  to="/onas" active-class="active" ><div class="nav-link">O nas</div></router-link>

        <router-link to="/uslugi" active-class="active"><div class="nav-link radial-gradient">Usługi</div></router-link>

        <router-link to="/galeria" active-class="active"><div class="nav-link">Galeria</div></router-link>

        <router-link to="/przypadki" active-class="active"><div class="nav-link radial-gradient">Nasze przypadki</div></router-link>

        <router-link to="/zespol" active-class="active"><div class="nav-link radial-gradient">Nasz zespół</div></router-link>

        <router-link to="/publikacje" active-class="active"><div class="nav-link">Nasze publikacje</div></router-link>

        <router-link to="/sprzet" active-class="active"><div class="nav-link radial-gradient">Czym pracujemy</div></router-link>

        <router-link to="/kontakt" active-class="active"><div class="nav-link">Kontakt</div></router-link>
      </div>




    </nav>
    <hr>

    <router-view></router-view>

    </main>

    <footer class="gradient-footer">

        <div class="footer-menu">
          <router-link to="/">Home</router-link><span> | </span>
          <router-link  to="/onas">O nas</router-link><span> | </span>
          <router-link to="/przypadki">Nasze przypadki</router-link><span> | </span>
          <router-link to="/galeria">Galeria</router-link><span> | </span>
          <router-link to="/zespol">Nasz zespół</router-link><span> | </span>
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
      year: this.getYear(),
      navState: true

    }
  },
  methods: {
    getYear() {
      let d = new Date();
      let y = d.getFullYear();
      return y;
    },
    toggleNav() {
       this.navState = !this.navState;
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
  color: #8b8b8b;
  background: linear-gradient(#e7e7e7 50px, white 100px);
  background-repeat: no-repeat;
  margin: 0;
  font-family: latolight;
}

hr {
   border-top: 1px solid #cccbcb;
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

.active {
  font-weight: bold;
  font-size: 1.5em;
}

header {
  height: 150px;
  display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox;      /* TWEENER - IE 10 */
  display: -webkit-flex;     /* NEW - Chrome */
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  color: #8b8b8b;
}

.header-contact {
  text-align: right;
}

.header-image {
  margin: 0;
}

.header-image img {
  margin-bottom: -6px;
}

.header-contact a {
  color: #8b8b8b;
}

header h3 {
  font-family: latoregular, sans-serif;
}

header div {
  width: 33%;
}

nav {
  display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox;      /* TWEENER - IE 10 */
  display: -webkit-flex;     /* NEW - Chrome */
  display: flex;
}

.bars {
  display: none;
}

.nav-links-block {
  display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox;      /* TWEENER - IE 10 */
  display: -webkit-flex;     /* NEW - Chrome */
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.nav-home {
  width: 388px;
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
  margin: 1px;
}

.radial-gradient {
  background-image: radial-gradient(
      #00c23a 0%, #009f30 100%);
  color: white;
}

.radial-gradient-grey {
  background-image: radial-gradient(
    #ffffff 0%, #f9f9f9 50%, #f9f9f9 100%);
  color: white;
}

.radial-gradient:hover {
  transition: color 0.5s, transform 0.2s;
  color: #71d759;
  transform: scale(1.05);
}

.nav-link:hover {
  transition: transform 0.2s;
  transform: scale(1.05);
}

.gradient-footer {
  background: linear-gradient(#e4e4e4 50px, white 100px);
  color: grey;
}

ul {
  list-style-type: circle;
}

li {
  //display: inline-block;
  margin: 0 10px;
}

a {
  color: white;
  text-decoration: none;
}

footer {
  height: 100px;
  padding: 15px;
  margin-top: 25px;
  font-size: 0.9em;
  color: #656665;
}

.footer-menu {
  width: 1000px;
  margin: auto;
}

.footer-menu a{
  color: #656665;
}

.copyright {
  text-align: right;
}

@media screen and (max-width: 599px) {
  main {
    width: 100%;
    margin: auto;
    padding: 0 5px;
  }

  .header-image, .header-logo {
    width: 50%;
    height: 70%;
  }

  .header-logo {
    text-align: right;
  }

  .header-logo h1, .header-logo h3{
    margin: 0 !important;
    padding: 5px !important;
    text-align: right;
  }

  .header-contact {
    width: 100% !important;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.8);
  }

  .header-contact p {
    display: inline-block;
    padding-right: 5px;
  }

  nav {
    width: 300px;
    display: block;
    position: fixed;
    z-index: 99;
  }

  .bars {
    text-align: right;
    display: block;
    font-size: 2em;
    cursor: pointer;
    margin-right: 5px;
  }

  .nav-close {
    /* This trasform moves the drawer off canvas. */
    -webkit-transform: translate(-310px, 0);
    transform: translate(-310px, 0);
    /* Optionally, we animate the drawer. */
    transition: transform 0.3s ease;
  }

  .nav-open {
    /* This trasform moves the drawer on canvas. */
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
    /* Optionally, we animate the drawer. */
    transition: transform 0.3s ease;
  }

  .nav-home {
    display: block;
    width: 100%;
    height: 45px;
    padding: 15px;
    margin: 2px;
  }

  .nav-links-block {
    display: block;
    width: 100%;
  }

  .nav-links-block a {
    display: block;
    width: 100%;
    height: 45px;
  }

  .nav-link {
    display: block;
    width: 100%;
    height: 45px;
    background-image: radial-gradient(
      #00c23a 0%, #009f30 100%);
      color: white;
  }

  .active {
    font-weight: bold;
    font-size: 1em;
  }

  .radial-gradient {
    background-image: radial-gradient(
        #00c23a 0%, #009f30 100%);
    color: white;
  }

  .radial-gradient-grey {
    background-image: radial-gradient(
      #00c23a 0%, #009f30 100%);
    color: white;
  }

  .radial-gradient:hover {
    transition: color 0.5s, transform 0.2s;
    color: #71d759;
    transform: scale(1);
  }

  .nav-link:hover {
    transition: transform 0.2s;
    transform: scale(1);
    color: #71d759;
  }

  .footer-menu {
    width: 100%;
  }

  .footer-menu {
    font-size: 0.7em;
  }

}

@media screen and (min-width: 600px) and (max-width: 999px) {
  main {
    width: 600px;
    margin: auto;
  }

  .nav-home {
    width: 150px;
    height: 222px;
    padding: 15px;
    margin: 2px;
  }

  .nav-link {
    width: 109px;
    height: 109px;
  }

  .active {
    font-weight: bold;
    font-size: 1.2em;
  }

  .footer-menu {
    width: 100%;
  }

}
</style>
