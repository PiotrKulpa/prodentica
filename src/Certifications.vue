<template>
  <div id="cerifications">
    <h1>Certyfikaty</h1>
    <div v-for="el of certs">
      <a :href="`/static/certs/${el}.pdf`" download>
        <img class="cert-thumb" :src="`/static/certs/${el}.jpg`" alt="prodentica gabinet">
        <i class="fa fa-download" aria-hidden="true"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      certs: []
    }
  },
  created() {
    for (var i = 1; i <= 70; i++) {
      this.certs.push(i);
    }
    console.log(this.certs);
  }
}
</script>

<style>
html {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
*, *:before, *:after {
  -webkit-box-sizing: inherit;
  -moz-box-sizing: inherit;
  box-sizing: inherit;
  }

#cerifications a i {
    position: absolute;
    display: block;
    left: 5px;
    bottom: 8px;
    color: #71d759;
    text-align: center;
    font-size: 1.2em;
  }

#cerifications {
  display: flex;
  flex-wrap: wrap;
}

#cerifications a {
  margin: 5px;
  position: relative;
  text-align: center;
}

#cerifications h1 {
  width: 100%;
}

.cert-thumb {
  border: 2px solid #71d759;
  width: 190px;
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
