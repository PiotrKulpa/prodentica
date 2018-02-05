<template>
  <div id="home">
    <h1>Home</h1>
    <div class="home">
      <h2>Firma</h2>
      <img src="./assets/images/protezy-k-500x300.jpg">
      <p>
        Działając od dwudziestu lat w stomatologii i wychodząc naprzeciw oczekiwaniom Pacjentów, którym pomogliśmy i pomagamy, stworzyliśmy miejsce szczególne w Lublinie – grupową praktykę stomatologiczną z zespołem nastawionym na interdyscyplinarną obsługę pacjentów.
      </p>


    </div>
    <div class="home">
      <h2>Zadowolenie Pacjentów</h2>
        <img src="./assets/images/biznes-pani-500x300.jpg">
        <p>
          Pacjenci wracają i rekomendują nas znajomym. Bardzo dziękujemy za lojalność i stałe polecenia usług Prodentica.
        </p>

    </div>
    <div class="home">
      <h2>Doświadczenie</h2>
      <img src="./assets/images/specjalisci-2-500x300.jpg">
      <p>
        Każdy z nas przyjmuje Pacjentów od ponad dekady, asystentki medyczne mają równie bogate doświadczenie. Udane zabiegi możemy liczyć w dziesiątkach tysięcy.
      </p>

    </div>

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

h1 {
  width: 100%;
}

#home {
  display: flex;
  flex-wrap: wrap;
}

.home {
  width: 33%;
  padding: 10px;
}

.home img {
  width: 100%;
}


</style>
