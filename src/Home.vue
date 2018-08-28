<template>
  <div id="home">
    <h1>Home</h1>

    <!-- <div class="home">
      <h2>Firma</h2>
      <img src="./assets/images/home-firma600x400.jpg">
      <p>
        Działając od dwudziestu lat w stomatologii i wychodząc naprzeciw oczekiwaniom Pacjentów, którym pomogliśmy i pomagamy, stworzyliśmy miejsce szczególne w Lublinie – grupową praktykę stomatologiczną z zespołem nastawionym na interdyscyplinarną obsługę pacjentów.
      </p>


    </div>
    <div class="home">
      <h2>Zadowolenie Pacjentów</h2>
        <img src="./assets/images/home-zadowolenie600x400.jpg">
        <p>
          Pacjenci wracają i rekomendują nas znajomym. Bardzo dziękujemy za lojalność i stałe polecenia usług Prodentica.
        </p>

    </div>
    <div class="home">
      <router-link to="/certyfikaty" active-class="active"><h2>Doświadczenie</h2></router-link>
      <img src="./assets/images/home-gabinet600x400.jpg">
      <p>
        Każdy z nas przyjmuje Pacjentów od ponad dekady, asystentki medyczne mają równie bogate doświadczenie. Udane zabiegi możemy liczyć w dziesiątkach tysięcy.
      </p>

    </div> -->

    <div class="home">
      <h2>Firma</h2>
      <div class="swiper-container">
      <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide"><img src="./assets/images/home-firma600x400.jpg"></div>
            <div class="swiper-slide"><img src="/static/images/galeria022.jpg"></div>
            <div class="swiper-slide"><img src="/static/images/galeria024.jpg"></div>
        </div>
      </div>
      <p>
        Działając od dwudziestu lat w stomatologii i wychodząc naprzeciw oczekiwaniom Pacjentów, którym pomogliśmy i pomagamy, stworzyliśmy miejsce szczególne w Lublinie – grupową praktykę stomatologiczną z zespołem nastawionym na interdyscyplinarną obsługę pacjentów.
      </p>
    </div>

    <div class="home">
      <h2>Zadowolenie Pacjentów</h2>
      <div class="swiper-container">
      <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide"><img src="./assets/images/home-zadowolenie600x400.jpg"></div>
            <div class="swiper-slide"><img src="/static/images/galeria08.jpg"></div>
            <div class="swiper-slide"><img src="/static/images/galeria016.jpg"></div>
        </div>
      </div>
      <p>
        Pacjenci wracają i rekomendują nas znajomym. Bardzo dziękujemy za lojalność i stałe polecenia usług Prodentica.
      </p>
    </div>

    <div class="home">
      <router-link to="/certyfikaty" active-class="active"><h2>Doświadczenie</h2></router-link>
      <div class="swiper-container">
      <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide"><img src="./assets/images/home-gabinet600x400.jpg"></div>
            <div class="swiper-slide"><img src="/static/images/galeria011.jpg"></div>
            <div class="swiper-slide"><img src="/static/images/galeria013.jpg"></div>
        </div>
      </div>
      <p>
        Każdy z nas przyjmuje Pacjentów od ponad dekady, asystentki medyczne mają równie bogate doświadczenie. Udane zabiegi możemy liczyć w dziesiątkach tysięcy.
      </p>
    </div>

  </div>
</template>

<script>
import Swiper from 'swiper/dist/js/swiper.min.js'
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

h1 {
  width: 100%;
}

#home {
  display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox;      /* TWEENER - IE 10 */
  display: -webkit-flex;     /* NEW - Chrome */
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.home {
  width: 33.3%;
  padding: 10px;
}

.home img {
  width: 100%;
}

@media screen and (max-width: 599px) {
  .home {
    width: 100%;
    padding: 0;
  }

}

@media screen and (min-width: 600px) and (max-width: 999px) {


}


</style>
