<template>
  <div id="galeria">
    <h1>Galeria</h1>

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
