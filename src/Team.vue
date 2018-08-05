<template>
  <div id="team">
    <h1>Nasz zespół</h1>


    <div class="team">
      <img src="./assets/images/zespol-sykut600x600.jpg">
      <h2>DR N. MED JANUSZ SYKUT</h2>
      <h3>SPECJALNOŚĆ  PROTETYKA, CHIRURGIA, IMPLANTOLOGIA</h3>
      <p>
        Absolwent Uniwersytetu Medycznego w Lublinie. Autor publikacji w czasopismach branżowych. Uczestnik licznych krajowych i zagranicznych kursów oraz konferencji naukowych. Janusz Sykut zajmuje się również zabiegami Medycyny Estetycznej. Obecnie adiunkt w Katedrze i Zakładzie Protetyki Stomatologicznej Uniwersytetu Medycznego w Lublinie.
      </p>
      <p class="team-link" @click="showTeam1"><strong>Więcej</strong> <i class="fa fa-chevron-circle-down" aria-hidden="true"></i></p>
      <div v-if="team1">
        <p>
          W latach 2001-2002 Janusz Sykut był asystentem w Zakładzie Stomatologii Zachowawczej UM w Lublinie. 2001-2007 asystent w Poradni Chirurgii Stomatologicznej Wojewódzkiej Przychodni Stomatologicznej w Lublinie. 2002-2006 rezydent w trakcie specjalizacji w Katedrze i Zakładzie Protetyki Stomatologicznej z Pracownią Implantologii Stomatologicznej i Pracownią Zaburzeń Czynnościowych Narządu Żucia Uniwersytetu Medycznego w Lublinie. W 2004 uzyskał stopień doktora nauk medycznych. W 2006 uzyskał tytuł specjalisty w dziedzinie Protetyki Stomatologicznej. W 2014 roku ukończył czteroletni Implant Continuum Education Program w Collage of Dentistry New York University. W 2015 uzyskał certyfikat Umiejętności w Dziedzinie Implantologii Stomatologicznej EDI OSIS.
        </p>
        <p>
          Prywatne zainteresowania: sporty wodne i zimowe, motoryzacja, film.
        </p>
        <p>
          Janusz Sykut jest pracownikiem naukowym <a href="http://www.zakladprotetyki.umlub.pl/pracownicy/" target="_blank" rel="noopener noreferrer" tabindex="0">Uniwersytetu Medycznego w Lublinie </a>
        </p>
        <p>
          Więcej: “Zakład Protetyki Stomatologicznej został powołany wraz z Instytutem Stomatologii AM w Lublinie w dniu 1 października 1974 roku. W 1985 roku przy Zakładzie powstała Pracownia Zaburzeń Czynnościowych Narządu Żucia. Pracownia ta była na początku jedyną tego typu wyodrębnioną placówką naukową w kraju, zajmującą się leczeniem chorych z bólami twarzy i głowy na tle dysfunkcji układu stomatognatycznego. W momencie powołania Zakład Protetyki Stomatologicznej zatrudniał 5 pracowników naukowo-dydaktycznych. Obecnie w Zakładzie Protetyki Stomatologicznej jest zatrudnionych 23 nauczycieli akademickich (5 adiunktów i 18 asystentów). Pracownicy Katedry i Zakładu Protetyki Stomatologicznej aktywnie działają w Polskim Towarzystwie Stomatologicznym. Kilku pracowników Zakładu wchodzi w skład Zarządu Oddziału PTS w Lublinie. Lekarze pracujący w Zakładzie Protetyki Stomatologicznej prowadzą szkolenia przeddyplomowe i podyplomowe. Realizowany jest program szkolenia przeddyplomowego z zakresu protetyki stomatologicznej oraz materiałoznawstwa stomatologicznego dla studentów I, III, IV, V roku kierunku lekarsko-dentystycznego (ćwiczenia przedkliniczne, ćwiczenia kliniczne, wykłady).
        </p>
      </div>
    </div>

    <div class="team">
      <img src="./assets/images/zespol-radej600x600.jpg">
      <h2>DR KATARZYNA RADEJ</h2>
      <h3>SPECJALNOŚĆ PEDODOCJA (STOMATOLOGIA  DZIECIĘCA, ZACHOWAWCZA)</h3>
      <p>
        Absolwent Uniwersytetu Medycznego w Lublinie. Obecnie wykładowca w Katedrze i Zakładzie Protetyki Stomatologicznej Uniwersytetu Medycznego w   Lublinie. W 2014 uzyskał stopień specjalisty w zakresie protetyki stomatologicznej. Autor publikacji w czasopismach branżowych. Uczestnik licznych krajowych i zagranicznych kursów i konferencji naukowych.
      </p>
      <p class="team-link" @click="showTeam2"><strong>Więcej</strong> <i class="fa fa-chevron-circle-down" aria-hidden="true"></i></p>
      <div v-if="team2">
        <p>
          W latach 2004-2017 pracownik student studiów doktoranckich oraz asystent w Katedrze i Zakładzie Protetyki Stomatologicznej z Pracownią Implantologii Stomatologicznej i Pracownią Zaburzeń Czynnościowych Narządu Żucia Uniwersytetu Medycznego w Lublinie.<br>
          Zajmuje się również zabiegami Medycyny Estetycznej.
        </p>
        <p>
          Prywatne zainteresowania: sporty wodne i zimowe, motoryzacja, film.
        </p>
      </div>
    </div>
    <div class="team">
      <img src="./assets/images/zespol-kopec600x600.jpg">
      <h2>DR PRZEMYSŁAW KOPEĆ</h2>
      <h3>SPECJALNOŚĆ ENDODONCJA</h3>
      <p>
        Podpora naszego gabinetu od 2010 r. Ukończyła Technologię Żywności na Uniwersytecie Przyrodniczym, a następnie odbyła wiele kursów i szkoleń wewnętrznych oraz zewnętrznych (żeby tylko wymienić: asysta, sterylizacja, dezynfekcja, ergonomia pracy, recepcja). Iza współpracuje ze wszystkimi lekarzami Prodentica Stomatologia. Jej główne zadania to: asysta przy zabiegach, sterylizacja, obsługa recepcji, koordynacja pracy gabinetu.
      </p>
    </div>
    <h1>Kompleksowe leczenie & profilaktyka</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      team1: false,
      team2: false

    }
  },
  methods: {
    showTeam1() {
      this.team1 = true;
    },
    showTeam2() {
      this.team2 = true;
    }

  }
}
</script>

<style>
#team {
  display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox;      /* TWEENER - IE 10 */
  display: -webkit-flex;     /* NEW - Chrome */
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

#team h1, #team h2 {
  width: 100%;
}

.team {
  width: 33.3%;
  padding: 5px;
}

.team img {
  width: 100%;
}

.team-link {
  cursor: pointer;
}

@media screen and (max-width: 599px) {

  .team {
    width: 100%;
  }

}

@media screen and (min-width: 600px) and (max-width: 999px) {


}
</style>
