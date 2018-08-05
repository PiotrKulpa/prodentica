<template>
  <div id="aboutus">
    <h1>O nas</h1>

    <div class="aboutus">
      <p>
        Działając od dwudziestu lat w stomatologii i wychodząc naprzeciw oczekiwaniom Pacjentów, którym pomogliśmy i pomagamy, stworzyliśmy miejsce szczególne w Lublinie – grupową praktykę stomatologiczną z zespołem nastawionym na interdyscyplinarną obsługę pacjentów.
      </p>
      <p>
        Praca jest dla nas pasją, dlatego zdobytą wiedzę przenosimy wprost do gabinetów, by służyć Wam – Pacjentom, by szybko i rzetelnie rozwiązywać złożone problemy z zakresu stomatologii zachowawczej, estetycznej, ortodoncji, pedodoncji, protetyki, implantologii i periodontologii.
      </p>
      <p>
        Praktyka grupowa w Prodentice, w której opiekę nad Pacjentem sprawuje kilku lekarzy – każdy w swoim wyspecjalizowanym zakresie – pozwala na wprowadzenie wszystkich  specjalności stomatologii i możliwość traktowania leczenia uzębienia kompleksowo – od dzieci do dorosłych.
      </p>
      <p>
      Oddajemy Pacjentów pod opiekę lekarzy i pielęgniarek. W rejestracji pomoże i udzieli informacji zespół recepcjonistek.
      </p>
    </div>

    <div class="sidebar">
      <img src="./assets/images/onas600x400.jpg">
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
#aboutus {
  display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox;      /* TWEENER - IE 10 */
  display: -webkit-flex;     /* NEW - Chrome */
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
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
