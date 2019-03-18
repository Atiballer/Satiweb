<template>
  <div id="velemeny">
    <h2 class="text-center pt-3">Vélemények</h2>
    <slider animation="fade">
      <slider-item v-for="item in items"
                   :key="item.id"
                   :style="color">
        <blockquote class="blockquote text-center my-5 pt-5">
          <p style=" text-align: center; font-weight:200; letter-spacing:1.5px">{{
            item.title }}</p>
          <footer class="blockquote-footer">{{item.name}}
            <cite title="Source Title">{{item.source}}</cite>
          </footer>

        </blockquote>
      </slider-item>
    </slider>
  </div>
</template>

<script>
import { Slider, SliderItem } from 'vue-easy-slider'
export default {
  data() {
    return {
      items: [
        {
          title:
            '"Nagy segítség az új weboldalam, hisz vendégeim több mint fele, már online talál meg"',
          name: 'Marsi Adrienn',
          source: 'Női-férfi-gyermek fodrász'
        },
        {
          title:
            '"Autósiskolámnak mai kornak megfelelő megjelenést kaptam, rendszeres karbantartással"',
          name: 'Sályi Sándor',
          source: 'Autósiskola vezető'
        },
        {
          title:
            '"Cégünk többféle szolgáltatást is nyújt, ezeket oldalunkon könnyen megtalálják a látogatók"',
          name: 'Marsi Attiláné',
          source: 'Biztosítás, szaktanácsadás'
        },
        {
          title:
            '"Széles termékkínálatunk fontos információi megtalálhatóak egyedi oldalunkon"',
          name: 'Fekete László',
          source: 'Rozsdamentes berendezések'
        },
        {
          title:
            '"Szeretném megköszönni Sárik Attila kreatív, lelkiismeretes munkáját. Gördülékeny együttműködésével lehetővé tette gondolataim formába öntését"',
          name: 'Szalkai Gabriella',
          source: 'Esküvői Szertartásvezető'
        },
        {
          title: '"Elvárásaimnak megfelelő profi munka. Ajánlom mindenkinek"',
          name: 'Budafalvi József',
          source: 'Fa Trade Kft'
        },
        {
          title:
            '"Vendégeink igénylik, hogy első körben minden információt megkapjanak a neten. Ehhez kaptunk egy profi weboldalt"',
          name: 'Juhászné Garics Erika',
          source: 'Hotel Lelle'
        }
      ],
      color: [
        {
          backgroundColor: 'white',
          width: '100%',
          height: '100%'
        }
      ]
    }
  }
}
</script>

<style scoped>
#velemeny h2 {
  font-weight: 200;
  letter-spacing: 1.5px;
}
.slider-indicator-icon {
  background-color: #d6d6d6 !important;
}
.slider-indicator-active {
  background-color: #eee !important;
}

@media only screen and (max-width: 500px) {
  blockquote {
    font-size: 12px;
  }
}
</style>
