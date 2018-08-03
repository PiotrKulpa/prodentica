<template>
  <div id="galeria">
    <h1>Galeria</h1>
    <darkbox-app></darkbox-app>
    <div class="darkbox-container">
      <img class="darkbox" :src="'/static/images/thumbs/galeria01.jpg'" alt="prodentica gabinet">
      <img class="darkbox" :src="'/static/images/thumbs/galeria02.jpg'" alt="prodentica gabinet">
      <img class="darkbox" :src="'/static/images/thumbs/galeria03.jpg'" alt="prodentica gabinet">
      <img class="darkbox" :src="'/static/images/thumbs/galeria04.jpg'" alt="prodentica gabinet">
      <img class="darkbox" :src="'/static/images/thumbs/galeria05.jpg'" alt="prodentica gabinet">
      <img class="darkbox" :src="'/static/images/thumbs/galeria06.jpg'" alt="prodentica gabinet">
      <img class="darkbox" :src="'/static/images/thumbs/galeria07.jpg'" alt="prodentica gabinet">
      <img class="darkbox" :src="'/static/images/thumbs/galeria08.jpg'" alt="prodentica gabinet">
      <img class="darkbox" :src="'/static/images/thumbs/galeria010.jpg'" alt="prodentica gabinet">
      <img class="darkbox" :src="'/static/images/thumbs/galeria011.jpg'" alt="prodentica gabinet">
      <img class="darkbox" :src="'/static/images/thumbs/galeria012.jpg'" alt="prodentica gabinet">
      <img class="darkbox" :src="'/static/images/thumbs/galeria013.jpg'" alt="prodentica gabinet">
      <img class="darkbox" :src="'/static/images/thumbs/galeria014.jpg'" alt="prodentica gabinet">
      <img class="darkbox" :src="'/static/images/thumbs/galeria015.jpg'" alt="prodentica gabinet">
      <img class="darkbox" :src="'/static/images/thumbs/galeria016.jpg'" alt="prodentica gabinet">
      <img class="darkbox" :src="'/static/images/thumbs/galeria017.jpg'" alt="prodentica gabinet">
      <img class="darkbox" :src="'/static/images/thumbs/galeria018.jpg'" alt="prodentica gabinet">
      <img class="darkbox" :src="'/static/images/thumbs/galeria019.jpg'" alt="prodentica gabinet">
      <img class="darkbox" :src="'/static/images/thumbs/galeria020.jpg'" alt="prodentica gabinet">
      <img class="darkbox" :src="'/static/images/thumbs/galeria021.jpg'" alt="prodentica gabinet">
      <img class="darkbox" :src="'/static/images/thumbs/galeria022.jpg'" alt="prodentica gabinet">
      <img class="darkbox" :src="'/static/images/thumbs/galeria024.jpg'" alt="prodentica gabinet">
      <img class="darkbox" :src="'/static/images/thumbs/galeria025.jpg'" alt="prodentica gabinet">
      <img class="darkbox" :src="'/static/images/thumbs/galeria026.jpg'" alt="prodentica gabinet">
      <img class="darkbox" :src="'/static/images/thumbs/galeria027.jpg'" alt="prodentica gabinet">
      <img class="darkbox" :src="'/static/images/thumbs/galeria028.jpg'" alt="prodentica gabinet">
    </div>
  </div>
</template>

<script>
import Darkbox from './Darkbox.vue';
export default {
  components: {
    'darkbox-app': Darkbox
  },
  name: 'app',
  data () {
    return {


    }
  },
  methods: {

    }
}
</script>

<style>



</style>
