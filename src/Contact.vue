<template>
  <div id="kontakt">
    <h1>Kontakt</h1>
    <div>

      <h2>Gabinet stomatologiczny. Janusz Sykut</h2>
      <p>Ulica ul. Altanowa   4  / 6</p>
      <p>Lublin</p>
      <p>Telefon: 081 742 68 24</p>


    </div>
    <google-map  name="example"></google-map>
  </div>
</template>

<script>
import Map from './Map.vue';
export default {
  components: {
    'google-map': Map
  },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }

}
</script>

<style>



</style>
