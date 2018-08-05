<template>
  <div>
    <div class="google-map" :id="mapName"></div>
  </div>
</template>

<script>
export default {
  name: 'google-map',
  props: ['name'],
  data () {
    return {
      mapName: this.name + "-map"
    }
  },
  mounted: function () {
    let element = document.getElementById(this.mapName)
    let options = {
      zoom: 14,
      center: new google.maps.LatLng(51.2656239,22.5195762)
    }
    let map = new google.maps.Map(element, options);

    let marker = new google.maps.Marker({
          position: {lat: 51.2656239, lng: 22.5195762},
          map: map,
          title: 'Prodentica'
        });
  }

}
</script>

<style>
.google-map {
  width: 100%;
  height: 600px;
  margin: 0 auto;
  background: gray;
  padding: 5px;
}


</style>
