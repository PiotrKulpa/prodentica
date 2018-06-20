<template>
  <div id="kontakt">
    <div>

      <h1>SKONTAKTUJ SIĘ Z NAMI:</h1>
      <p>Prodentica</p>
      <p>ul. Altanowa 4/U6</p>
      <p>20-819 Lublin</p>
      <p>tel.: 570 727 676</p>

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

#kontakt, #kontakt h1 {
  text-align: center;
}


</style>
