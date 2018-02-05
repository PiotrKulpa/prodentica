<template>
  <div id="cases">
    <h1>Przypadki</h1>
    <button type="button" name="button" @click="showCase1()" v-bind:class="{btnActive: isActive}">Przypadek 1</button><button type="button" name="button" @click="showCase2()" v-bind:class="{btnActive: isActive2}">Przypadek 2</button><button type="button" name="button" @click="showCase3()" v-bind:class="{btnActive: isActive3}">Przypadek 3</button>
    <hr>

    <div class="case" v-if="c1">
      Natychmiastowa implantacja, natychmiastowe obciążenie wszczepów
      Zabieg implantacji przeprowadzony w nawigacji komuterowej.
      Bezzębny pacjent w ciagu jednej godziny został zaopatrzony w implanty i zęby, podjał natychmiastową funkcję żucia.  Zabieg   wykonywany  był  bez  cięcia  chirurgicznego  w  znieczuleniu miejscowym, trwał okolo 1 godziny. Przez miesiac pacjent musiał utrzymywać miękką dietę.

      Tymczasowy most akrylowy przykręcony do implantów po 3 miesiącach został wymieniony na most stały ostateczny.

      Przed zabiegiem
      Zęby w jedną godzinę - implantacja przeprowadzona w nawigacji komputerowej Nobel GUIDE

      Po zabiegu

      Ostateczny most akrylowy
    </div>
    <div class="case" v-if="c2">
      Pełnoceramiczne korony porcelanowe na przebarwionych zębach
      Mocno przebarwione i zniszczone jedynki zostały przeleczone kanałowo, a następnie wzmocnione ćwiekami (wkładami koronowo - korzeniowymi) z włókna kwarcowego, po czym zostały pokryte pełnoceramicznymi koronami porcelanowymi.
    </div>
    <div class="case" v-if="c3">
      Stomatologia estetyczna - osadzenie korony pełnoceramicznej
      Nieestetyczna jedynka zniszczona z powodu niedorozwoju szkliwa oraz licznymi zabiegami stomatologicznymi w przeszłości została powtórnie przeleczona endodontycznie oraz wzmocniona wkładem koronowo korzeniowym z włókna kwarcowego. Następnie po odpowiedniej preparacji na ząb została osadzona pełnoceramiczna korona porcelanowa.
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      c1: true,
      c2: false,
      c3: false,
      isActive: true,
      isActive2: false,
      isActive3: false
    }
  },
  methods: {
    showCase1() {
      this.c1 = true;
      this.c2 = false;
      this.c3 = false;
      this.isActive = true;
      this.isActive2 = false;
      this.isActive3 = false;
    },
    showCase2() {
      this.c1 = false;
      this.c2 = true;
      this.c3 = false;
      this.isActive = false;
      this.isActive2 = true;
      this.isActive3 = false;
    },
    showCase3() {
      this.c1 = false;
      this.c2 = false;
      this.c3 = true;
      this.isActive = false;
      this.isActive2 = false;
      this.isActive3 = true;
    }
  }
}
</script>

<style>

#cases button {
  background-color: #71d759;
  border: none;
  height: 30px;
  width: 150px;
  border-radius: 5px 5px 0 0;
  margin: 0;
  outline: none;
  cursor: pointer;
  color: white;
}

#cases hr {
  margin-top: -2px;
  border-top: 1px solid #71d759;
}

.case {
  padding: 15px 0 15px 0;
}

#cases .btnActive {
  background-color: white !important;
  color: grey !important;
  border: solid 1px #71d759 !important;
  border-bottom: none !important;
}

</style>
