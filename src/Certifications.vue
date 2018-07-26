<template>
  <div id="aboutus">
    <h1>Certyfikaty</h1>

    <a href="/static/certs/miniaturka.pdf" download>
      <img class="darkbox" :src="'/static/certs/001.jpg'" alt="prodentica gabinet">
    </a>
    <a href="/static/certs/rekonstrukcja.pdf" download>
      <img class="darkbox" :src="'/static/certs/002.jpg'" alt="prodentica gabinet">
    </a>
    <a href="/static/certs/rekonstrukcja.pdf" download>
      <img class="darkbox" :src="'/static/certs/003.jpg'" alt="prodentica gabinet">
    </a>
    <a href="/static/certs/rekonstrukcja.pdf" download>
      <img class="darkbox" :src="'/static/certs/004.jpg'" alt="prodentica gabinet">
    </a>
    <a href="/static/certs/rekonstrukcja.pdf" download>
      <img class="darkbox" :src="'/static/certs/005.jpg'" alt="prodentica gabinet">
    </a>
    <a href="/static/certs/rekonstrukcja.pdf" download>
      <img class="darkbox" :src="'/static/certs/006.jpg'" alt="prodentica gabinet">
    </a>
    <a href="/static/certs/rekonstrukcja.pdf" download>
      <img class="darkbox" :src="'/static/certs/007.jpg'" alt="prodentica gabinet">
    </a>
    <a href="/static/certs/rekonstrukcja.pdf" download>
      <img class="darkbox" :src="'/static/certs/008.jpg'" alt="prodentica gabinet">
    </a>
    <a href="/static/certs/rekonstrukcja.pdf" download>
      <img class="darkbox" :src="'/static/certs/009.jpg'" alt="prodentica gabinet">
    </a>
    <a href="/static/certs/rekonstrukcja.pdf" download>
      <img class="darkbox" :src="'/static/certs/010.jpg'" alt="prodentica gabinet">
    </a>
    <a href="/static/certs/rekonstrukcja.pdf" download>
      <img class="darkbox" :src="'/static/certs/011.jpg'" alt="prodentica gabinet">
    </a>
    <a href="/static/certs/rekonstrukcja.pdf" download>
      <img class="darkbox" :src="'/static/certs/012.jpg'" alt="prodentica gabinet">
    </a>
  





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
#aboutus {
  display: flex;
  flex-wrap: wrap;
}

#aboutus h1 {
  width: 100%;
}
.aboutus {
  width: 60%;
  padding: 5px;
}

.sidebar {
  width: 40%;
  padding: 5px;
}

.sidebar img {
  width: 100%;
}

@media screen and (max-width: 599px) {
  .aboutus, .sidebar {
    width: 100%;
    padding: 5px;
  }

}

@media screen and (min-width: 600px) and (max-width: 999px) {


}
</style>
