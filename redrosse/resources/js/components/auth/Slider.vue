<template>
  <v-carousel hide-delimiters cycle class="mx-auto pt-lg-10 pt-md-10 mt-lg-12 pt-sm-2 mt-sm-2">
    <v-carousel-item>
        <center>
          <h1>
            The Cultural Melting
            <span id="caption-highlight">Pot of the World!</span>
          </h1>
          <p>
            From Paris to Rio, New York to Dubai, Lagos to Beijing, Delhi to Buenos Aires, San Juan to Casablanca.
            <span>“Our cultural strength has always been derived from our diversity of understanding and experience.”</span> Break cultural barriers, life is fun!
          </p>
        </center>
    </v-carousel-item>
    <v-carousel-item>
        <center>
          <h1>
            Join Our Global
            <span id="caption-highlight">Community Platform!</span>
          </h1>
          <p>
            Share your cultural stories and adventures. Share your experience about food, music, fashion & beauty, and language. Share your memorable stories and not so memorable adventures with your friends, family and citizens of the world.
            <span></span>
          </p>
        </center>
    </v-carousel-item>
        <center>
          <h1>
            Celebrate Your Culture,
            <span id="caption-highlight">Spread Love!</span>
          </h1>
          <p>
            Tell the world about your culture such as art , poetry, religion, historical landmarks or sites as well as nature sceneries.
            <span>Celebrate your culture and heritage, respect n’ love others, bring the world together!</span>
          </p>
        </center>
    <v-carousel-item>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
	name: 'Slider',
	components: {
	}
}
</script>

<style lang="css">
.v-carousel{
    width: 100%;
    text-align: center;
    height: 250px !important;
}

#caption-highlight {
  color: #f6851f;
  font-size: 24pt;
}
</style>
