<template>
  <div id="galeria">
    <h1>Galeria</h1>
    <h2>W przygotowaniu</h2>

    <!-- <lightbox src="./assets/images/biznes-pani-500x300.jpg" caption="this is pic caption" album="albumA"></lightbox>
    <lightbox src="./assets/images/dzieci-480x300.jpg" caption="this is pic caption" album="albumA"></lightbox>
    <lightbox src="./assets/images/specjalisci-2-500x300.jpg" caption="this is pic caption" album="albumB"></lightbox>
    <lightbox-app src="./assets/images/specjalisci-2-500x300.jpg"></lightbox-app> -->



    <darkbox-app>
    
    </darkbox-app>


  </div>
</template>

<script>
import Lightbox from './Lightbox.vue';
export default {
  components: {
    'darkbox-app': Lightbox
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
