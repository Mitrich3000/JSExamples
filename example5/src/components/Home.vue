<template>
  <v-container fluid fill-height justify-space-between>
    <v-layout align-center justify-center row wrap>
      <v-flex xs12 text-md-center><h1>Добро пожаловать на сайт!</h1></v-flex>
      <v-flex d-flex xs5>
        <v-carousel>
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
          ></v-carousel-item>
        </v-carousel>
      </v-flex>
      <v-divider></v-divider>
        <v-flex d-flex xs6>
        <youtube video-id="o7gVHMg_jdY"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
        }
      ]
    }
  }
}
</script>
