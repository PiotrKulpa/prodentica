<template>
  <div id="aboutus">
    <h1>Publikacje</h1>



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
