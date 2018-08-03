<template>
  <div id="aboutus">
    <h1>Sprzęt</h1>

    <div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide"><img src="./assets/images/home-firma600x400.jpg"></div>
        <div class="swiper-slide"><img src="./assets/images/home-zadowolenie600x400.jpg"></div>
        <div class="swiper-slide"><img src="./assets/images/home-gabinet600x400.jpg"></div>
        ...
    </div>
    

</div>

  </div>
</template>





<script>
import Swiper from 'swiper'
import SwipperCSS from 'swiper/dist/css/swiper.min.css'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });
  }
}
</script>

<style>
.swiper-container {
    width: 900px;
    height: 300px;
}
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
